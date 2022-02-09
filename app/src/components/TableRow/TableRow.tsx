import React, { useState } from "react";
import ChangeStatus from "../ChangeStatus/ChangeStatus";
import ImageComponent from "../Image/ImageComponent";
import { Button, SpanStyle } from "./TableRow.styles";

type TableRowProps = {
  item: IItem;
};

function TableRow({ item }: TableRowProps) {
  const [selected, setSelected] = useState<IItem | null>(null);

  return (
    <>
      <td>{item?.id}</td>
      <td>
        <ImageComponent url={item.image} alt={item.name} />
      </td>
      <td>{item.date}</td>
      <td>{item?.name}</td>
      <td>
        {selected ? (
          <ChangeStatus selectedItem={selected} setSelected={setSelected} />
        ) : (
          <SpanStyle status={item.status}>{item?.status}</SpanStyle>
        )}
      </td>
      <td>
        <Button onClick={() => setSelected(item)}>Change Status</Button>
      </td>
    </>
  );
}

export default TableRow;
