import React from "react";
import ImageComponent from "../Image/ImageComponent";
import { SpanStyle } from "./TableRow.styles";

type TableRowProps = {
  item: IItem;
};

function TableRow({ item }: TableRowProps) {
  return (
    <>
      <td>{item?.id}</td>
      <td>
        <ImageComponent url={item.image} alt={item.name} />
      </td>
      <td>{item?.name}</td>
      <td>
        <SpanStyle status={item.status}>{item?.status}</SpanStyle>
      </td>
    </>
  );
}

export default TableRow;
