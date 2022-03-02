import React, { useReducer, FC } from "react";
import { ChangeStatusData, filterData, SortingData } from "src/services/Helper";
import { Action, ActionType, Dispatch } from "./TableActions";

type State = {
  data: Array<IItem>;
  filterData: Array<IItem>;
  sorting: Sorting;
};

const initialSatet: State = {
  data: [],
  filterData: [],
  sorting: {
    orderBy: "",
    type: "ASC",
  },
};

export const TableStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function tableReducer(state: State = initialSatet, action: Action) {
  switch (action.type) {
    case ActionType.SetData: {
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
      };
    }
    case ActionType.FilterData: {
      return {
        ...state,
        filterData: filterData<IItem>(state.data, action.payload, "name"),
      };
    }
    case ActionType.SortDara: {
      return {
        ...state,
        filterData: SortingData<IItem>(
          state.filterData,
          action.payload.type,
          action.payload.orderBy
        ),
        sorting: {
          orderBy: action.payload.orderBy,
          type: action.payload.type,
        },
      };
    }
    case ActionType.ChangeStatus: {
      return {
        ...state,
        data: ChangeStatusData(
          state.data,
          action.payload.id,
          action.payload.status
        ),
        filterData: ChangeStatusData(
          state.filterData,
          action.payload.id,
          action.payload.status
        ),
      };
    }
    default:
      return state;
  }
}

const TableProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(tableReducer, initialSatet);
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
