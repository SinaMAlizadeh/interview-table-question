import React, { useEffect } from "react";
import TableRow from "../TableRow/TableRow";

type HeaderProps = {
  data: Array<IItem>;
};

function TableBody({ data }: HeaderProps) {
  useEffect(() => {
    console.log(data);
  }, [data]);
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
