import { ROLES } from 'shared/constants';

interface InitialValues {
  [ROLES.BITCH]?: number | '';
  [ROLES.MAFIA_DON]?: number | '';
  [ROLES.MAFIA]?: number | '';
  [ROLES.MANIAC]?: number | '';
  [ROLES.DOCTOR]?: number | '';
  [ROLES.SECURITY]?: number | '';
  [ROLES.SHERIFF]?: number | '';
}

export const INITIAL_VALUES: InitialValues = {
  [ROLES.BITCH]: '',
  [ROLES.MAFIA_DON]: '',
  [ROLES.MAFIA]: '',
  [ROLES.MANIAC]: '',
  [ROLES.DOCTOR]: '',
  [ROLES.SHERIFF]: '',
  [ROLES.SECURITY]: ''
};
