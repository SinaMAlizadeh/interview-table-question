import React, { useReducer, FC } from "react";

type Action = { type: "SeT_DATA"; payload: Array<IItem> };

type Dispatch = (action: Action) => void;

type State = { data: Array<IItem> };
const initialSatet: State = {
  data: [],
};

export const TableStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function tableReducer(state: State = initialSatet, action: Action) {
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

const TableProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(tableReducer, initialSatet);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <TableStateContext.Provider value={value}>
      {children}
    </TableStateContext.Provider>
  );
};

function useData() {
  const context = React.useContext(TableStateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { TableProvider, useData };
