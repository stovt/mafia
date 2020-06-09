import { createContext } from 'react';
import { GameMember, GameTime } from './GameContext.types';

export interface GameContext {
  gameMembers: GameMember[];
  securityVote?: number | null;
  gameMessages: string[];
  gameTime: GameTime;
  setGameMembers: (members: GameMember[]) => void;
  killGameMember: (memberId: number) => void;
  setSecurityVote: (memberId: number | null) => void;
  setGameMessages: (messages: string[]) => void;
  setGameTime: (time: GameTime) => void;
  resetGame: () => void;
}

export default createContext<GameContext | null>(null);
