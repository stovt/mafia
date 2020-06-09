import { ROLES } from 'shared/constants';

type ValueOf<T> = T[keyof T];

export interface GameMember {
  id: number;
  role: typeof ROLES[keyof typeof ROLES];
  killed: boolean;
}

export type GameTime = 'day' | 'night';
