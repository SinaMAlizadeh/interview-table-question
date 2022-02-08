import React, { createContext, useState, FC, useCallback } from "react";
interface ITableContext {
  data: Array<IItem>;
  setData?: React.Dispatch<React.SetStateAction<IItem[]>>;
}

export const TableContext = createContext<ITableContext>({
  data: [],
});

type TableContextProviderProps = {
  children: React.ReactNode;
};

export const TableContextProvider: FC<TableContextProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<Array<IItem>>([]);

  return (
    <TableContext.Provider value={{ data, setData }}>
      {children}
    </TableContext.Provider>
  );
};
