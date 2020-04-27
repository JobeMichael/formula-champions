import React from "react";

export interface AppContextTypes {
  allChampions: Array<any>;
  setAllChampions: (currentData: any) => void;
}

export const URL_DEFAULT_VALUE = {
  allChampions: [],
  setAllChampions: () => {},
};

export const AppContext = React.createContext<AppContextTypes>(
  URL_DEFAULT_VALUE
);
