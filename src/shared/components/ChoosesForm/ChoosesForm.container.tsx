import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { ROLES } from 'shared/constants';
import { useGameContext } from 'shared/context/GameContext';
import { INITIAL_VALUES } from './ChoosesForm.constants';
import ChoosesFormComponent from './ChoosesForm.component';

const ChoosesFormContainer = () => {
  const {
    securityVote,
    setGameTime,
    setGameMessages,
    killGameMember,
    setSecurityVote
  } = useGameContext();

  const handleOnSubmit = useCallback(
    (values: typeof INITIAL_VALUES) => {
      let gameMessages: string[] = [];

      const bitchChoose = values[ROLES.BITCH];
      const mafiaChoose = values[ROLES.MAFIA];
      const maniacChoose = values[ROLES.MANIAC];
      const doctorChoose = values[ROLES.DOCTOR];
      const securityChoose = values[ROLES.SECURITY];

      // Шлюха
      if (bitchChoose) {
        gameMessages = [...gameMessages, `Шлюха сіла на номер ${bitchChoose}.`];
      }

      // Тілоохоронець
      if (securityChoose) {
        setSecurityVote(securityChoose as number);
        gameMessages = [...gameMessages, `Тілоохоронець поставив щит на номер ${securityChoose}.`];
      } else {
        setSecurityVote(null);
      }

      // Мафія
      if (mafiaChoose && mafiaChoose !== doctorChoose && mafiaChoose !== securityVote) {
        killGameMember(mafiaChoose as number);
        gameMessages = [...gameMessages, `Убили номер ${mafiaChoose}.`];
      }

      // Маньяк
      if (maniacChoose && maniacChoose !== doctorChoose && maniacChoose !== securityVote) {
        killGameMember(maniacChoose as number);
        gameMessages = [...gameMessages, `Убили номер ${maniacChoose}.`];
      }

      setGameTime('day');
      setGameMessages(gameMessages.filter((v, i) => gameMessages.indexOf(v) === i));
    },
    [setGameTime, setGameMessages, securityVote, killGameMember, setSecurityVote]
  );

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleOnSubmit}>
      {props => <ChoosesFormComponent {...props} />}
    </Formik>
  );
};

export default ChoosesFormContainer;
