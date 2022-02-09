import React, { useState, useEffect } from "react";
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
        type: "CHANGE_STATUS",
        payload: {
          id: selectedItem?.id,
          status: newState,
        } as UpdateStatus,
      });
      setSelected(null);
    }
  };

  return (
    <div>
      <Select
        value={newState as string}
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
