import React, { useState, useEffect } from "react";
import { ActionType, FilterData } from "src/Context/TableActions";
import { useData } from "src/Context/TableProvider";
import { Input } from "./Filter.styles";
function Filter() {
  const [filter, setFilter] = useState("");
  const { dispatch } = useData();
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch({ type: ActionType.FilterData, payload: filter } as FilterData);
    }, 200);
    return () => clearTimeout(delayDebounceFn);
  }, [filter]);

  return (
    <div>
      <Input
        type="text"
        onChange={(e) => changeFilter(e)}
        placeholder="Search by name..."
      />
    </div>
  );
}

export default Filter;
