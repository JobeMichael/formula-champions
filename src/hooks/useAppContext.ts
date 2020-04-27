import React from "react";
import { AppContextTypes } from "../context/AppContext";

export const useAppContext = (): AppContextTypes => {
  const [allChampions, setAllChampionData] = React.useState([]);

  const setAllChampions = React.useCallback((state: any): void => {
    setAllChampionData(state);
  }, []);

  return {
    allChampions,
    setAllChampions,
  };
};
