import React, { useContext, useEffect } from "react";
import { useData } from "src/Context/TableProvider";
import Filter from "../Filter/Filter";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import { TableStyle } from "./Table.styles";

const Table = () => {
  return (
    <>
      <Filter />
      <TableStyle>
        <TableHeader />
        <TableBody />
      </TableStyle>
    </>
  );
};

export default Table;
