import React, { useContext, useEffect } from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import { TableStyle } from "./Table.styles";
interface TableProps {
  data: Array<IItem>;
}

const Table = ({ data }: TableProps) => {
  return (
    <TableStyle>
      <TableHeader />
      {data && <TableBody data={data} />}
    </TableStyle>
  );
};

export default Table;
