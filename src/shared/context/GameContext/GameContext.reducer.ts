import {
  SET_GAME_MEMBERS,
  KILL_GAME_MEMBER,
  SET_SECURITY_VOTE,
  SET_GAME_MESSAGES,
  SET_GAME_TIME,
  RESET_GAME,
  Action
} from './GameContext.actions';
import { GameMember, GameTime } from './GameContext.types';

interface State {
  gameMembers: GameMember[];
  securityVote?: number | null;
  gameMessages: string[];
  gameTime: GameTime;
}

export const initialState: State = {
  gameMembers: [],
  gameMessages: [],
  gameTime: 'day'
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_GAME_MEMBERS:
      return {
        ...state,
        gameMembers: action.members
      };
    case KILL_GAME_MEMBER: {
      const gameMember = state.gameMembers.find(m => m.id === action.memberId);

      if (gameMember) {
        return {
          ...state,
          gameMembers: [
            ...state.gameMembers.filter(m => m.id !== action.memberId),
            {
              ...gameMember,
              killed: true
            }
          ].sort((a, b) => {
            if (a.id > b.id) return 1;
            if (b.id > a.id) return -1;

            return 0;
          })
        };
      }

      return state;
    }
    case SET_SECURITY_VOTE:
      return {
        ...state,
        securityVote: action.memberId
      };
    case SET_GAME_MESSAGES:
      return {
        ...state,
        gameMessages: action.messages
      };
    case SET_GAME_TIME:
      return {
        ...state,
        gameTime: action.time
      };
    case RESET_GAME:
    default:
      return state;
  }
};

export default reducer;
