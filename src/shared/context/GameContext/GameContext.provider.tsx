import React, { useReducer, useCallback } from 'react';
import {
  SET_GAME_MEMBERS,
  KILL_GAME_MEMBER,
  SET_SECURITY_VOTE,
  SET_GAME_MESSAGES,
  SET_GAME_TIME,
  RESET_GAME
} from './GameContext.actions';
import GameContextReducer, { initialState } from './GameContext.reducer';
import { GameMember, GameTime } from './GameContext.types';
import GameContext from './GameContext';

const GameContextProvider: React.FC = ({ children }) => {
  const [{ gameMembers, securityVote, gameMessages, gameTime }, dispatch] = useReducer(
    GameContextReducer,
    initialState
  );

  const setGameMembers = useCallback((members: GameMember[]) => {
    dispatch({
      type: SET_GAME_MEMBERS,
      members
    });
  }, []);

  const killGameMember = useCallback((memberId: number) => {
    dispatch({
      type: KILL_GAME_MEMBER,
      memberId
    });
  }, []);

  const setSecurityVote = useCallback((memberId: number | null) => {
    dispatch({
      type: SET_SECURITY_VOTE,
      memberId
    });
  }, []);

  const setGameMessages = useCallback((messages: string[]) => {
    dispatch({
      type: SET_GAME_MESSAGES,
      messages
    });
  }, []);

  const setGameTime = useCallback((time: GameTime) => {
    dispatch({
      type: SET_GAME_TIME,
      time
    });
  }, []);

  const resetGame = useCallback(() => {
    dispatch({
      type: RESET_GAME
    });
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameMembers,
        gameMessages,
        securityVote,
        gameTime,
        setGameMembers,
        killGameMember,
        setSecurityVote,
        setGameMessages,
        setGameTime,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
