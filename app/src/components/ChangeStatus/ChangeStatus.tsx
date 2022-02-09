import React, { useState, useEffect } from "react";
import { ActionType, ChangeStatus } from "src/Context/TableActions";
import { useData } from "src/Context/TableProvider";
import { UpdateStatus } from "src/services/TableApi/TableApi";
import { isTemplateTail } from "typescript";
import {
  Button,
  CancelBtn,
  ConfirmBtn,
  Select,
} from "../TableRow/TableRow.styles";

type ChangeStatusProps = {
  selectedItem: IItem | null;
  setSelected: React.Dispatch<React.SetStateAction<IItem | null>>;
};

function ChangeStatus({ selectedItem, setSelected }: ChangeStatusProps) {
  const [newState, setNewState] = useState<string | null>(null);
  const { dispatch } = useData();
  useEffect(() => {
    selectedItem && setNewState(selectedItem.status);
  }, []);

  const changeStatus = async () => {
    const response = await UpdateStatus({
      id: selectedItem?.id,
      status: newState,
    } as UpdateStatus);
    if (response.success) {
      dispatch({
        type: ActionType.ChangeStatus,
        payload: {
          id: selectedItem?.id,
          status: newState,
        } as UpdateStatus,
      } as ChangeStatus);
      setSelected(null);
    }
  };

  return (
    <div>
      <Select
        value={newState == null ? "" : newState}
        onChange={(e) => setNewState(e.target.value)}
      >
        <option value="new"> new </option>
        <option value="processing">processing</option>
        <option value="done">done</option>
        <option value="error">error</option>
      </Select>
      <CancelBtn onClick={() => setSelected(null)}>&#10005;</CancelBtn>
      <ConfirmBtn onClick={changeStatus}>&#10003;</ConfirmBtn>
    </div>
  );
}

export default ChangeStatus;
