import { useContext } from 'react';
import GameContext, { GameContext as IGameContext } from './GameContext';

const useSnackbar = () => useContext(GameContext) as IGameContext;

export default useSnackbar;
