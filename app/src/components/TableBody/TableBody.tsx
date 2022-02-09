import React, { useEffect } from "react";
import { useData } from "src/Context/TableProvider";
import TableRow from "../TableRow/TableRow";

function TableBody() {
  const {
    state: { filterData: data },
  } = useData();

  return (
    <tbody>
      {data?.map((item) => (
        <tr key={item.id}>
          <TableRow item={item} />
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
