import React, { useReducer } from "react";

type Action = { type: "SeT_DATA"; payload: IItem[] };

type Dispatch = (action: Action) => void;

type State = { data: IItem[] };

type CountProviderProps = { children: React.ReactNode };

const initialSatet: State = {
  data: [],
};

const CountStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function countReducer(state: State = initialSatet, action: Action) {
  switch (action.type) {
    case "SeT_DATA": {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}

function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, initialSatet);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <CountStateContext.Provider value={value}>
      {children}
    </CountStateContext.Provider>
  );
}

function useCount() {
  const context = React.useContext(CountStateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CountProvider, useCount };
