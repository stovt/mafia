import { GameMember, GameTime } from './GameContext.types';

export const SET_GAME_MEMBERS = '@@game/SET_GAME_MEMBERS';
export const KILL_GAME_MEMBER = '@@game/KILL_GAME_MEMBER';
export const SET_SECURITY_VOTE = '@@game/SET_SECURITY_VOTE';
export const SET_GAME_MESSAGES = '@@game/SET_GAME_MESSAGES';
export const SET_GAME_TIME = '@@game/SET_GAME_TIME';
export const RESET_GAME = '@@game/RESET_GAME';

interface SetGameMembers {
  type: typeof SET_GAME_MEMBERS;
  members: GameMember[];
}

interface KillGameMember {
  type: typeof KILL_GAME_MEMBER;
  memberId: number;
}

interface SetSecurityVote {
  type: typeof SET_SECURITY_VOTE;
  memberId: number | null;
}

interface SetGameMessages {
  type: typeof SET_GAME_MESSAGES;
  messages: string[];
}

interface SetGameTime {
  type: typeof SET_GAME_TIME;
  time: GameTime;
}

interface ResetGame {
  type: typeof RESET_GAME;
}

export type Action =
  | SetGameMembers
  | KillGameMember
  | SetSecurityVote
  | SetGameMessages
  | SetGameTime
  | ResetGame;
