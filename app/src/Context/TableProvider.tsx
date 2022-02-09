import React, { useReducer, FC } from "react";

type Action =
  | { type: "SeT_DATA"; payload: Array<IItem> }
  | { type: "FILTER_DATA"; payload: string }
  | { type: "SORT_DATA"; payload: Sorting }
  | { type: "CHANGE_STATUS"; payload: UpdateStatus };

type Dispatch = (action: Action) => void;

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
    case "SeT_DATA": {
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
      };
    }
    case "FILTER_DATA": {
      return {
        ...state,
        filterData: state.data.filter((x) =>
          x.name.toLowerCase().includes(action.payload)
        ),
      };
    }
    case "SORT_DATA": {
      let data =
        action.payload.type == "DESC"
          ? state.filterData.sort((a, b) =>
              a[action.payload.orderBy] > b[action.payload.orderBy] ? 1 : -1
            )
          : state.filterData.sort((a, b) =>
              a[action.payload.orderBy] < b[action.payload.orderBy] ? 1 : -1
            );
      return {
        ...state,
        filterData: data,
        sorting: {
          orderBy: action.payload.orderBy,
          type: action.payload.type,
        } as Sorting,
      };
    }
    case "CHANGE_STATUS": {
      debugger;

      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id == action.payload.id)
            return {
              ...item,
              status: action.payload.status,
            } as IItem;
          return item;
        }),
        filterData: state.filterData.map((item) => {
          if (item.id == action.payload.id)
            return {
              ...item,
              status: action.payload.status,
            } as IItem;
          return item;
        }),
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
