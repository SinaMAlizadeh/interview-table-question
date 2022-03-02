import React, { ReactNode } from "react";
import { ActionType, SortData } from "src/Context/TableActions";
import { useData } from "src/Context/TableProvider";
import { HeaderItemStyled } from "./HeaderItem.styles";

type HeaderItemProps = {
  field: string;
  children: React.ReactNode;
};

function HeaderItem({ field, children }: HeaderItemProps) {
  const {
    state: {
      sorting: { orderBy, type },
    },
    dispatch,
  } = useData();

  const sort = () => {
    // Check if field is null not send for sorting (we dont want search)
    if (field)
      dispatch({
        type: ActionType.SortDara,
        payload: {
          orderBy: field,
          type: type == "ASC" ? "DESC" : "ASC" 
        },
      });
  };

  return (
    <HeaderItemStyled onClick={sort}>
      {field != "" ? (
        orderBy === field ? (
          type === "DESC" ? (
            <i> &#9650;</i>
          ) : (
            <i>&#9660;</i>
          )
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {children}
    </HeaderItemStyled>
  );
}

export default HeaderItem;
