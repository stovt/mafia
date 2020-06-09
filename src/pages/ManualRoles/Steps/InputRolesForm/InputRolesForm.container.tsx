import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useGameContext } from 'shared/context/GameContext';
import { INITIAL_VALUES } from './InputRolesForm.constants';
import InputRolesFormComponent from './InputRolesForm.component';

interface InputRolesFormContainerProps {
  goToNextStep: () => void;
}

const InputRolesFormContainer: React.FC<InputRolesFormContainerProps> = ({ goToNextStep }) => {
  const { setGameMembers } = useGameContext();

  const handleOnSubmit = useCallback(
    ({ gameMembers }: typeof INITIAL_VALUES) => {
      setGameMembers(
        gameMembers.map((gameMember, index) => ({
          id: index + 1,
          role: gameMember,
          killed: false
        }))
      );
      goToNextStep();
    },
    [setGameMembers, goToNextStep]
  );

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleOnSubmit}>
      {props => <InputRolesFormComponent {...props} />}
    </Formik>
  );
};

export default InputRolesFormContainer;
