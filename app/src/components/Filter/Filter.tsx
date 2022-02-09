import React, { useState } from "react";
import { useData } from "src/Context/TableProvider";
import { Input } from "./Filter.styles";
function Filter() {
  const [filter, setFilter] = useState(null);
  const { dispatch } = useData();
  const changeFilter = (e) => {
    setFilter(e.target.value);
    dispatch({ type: "FILTER_DATA", payload: e.target.value });
  };
  return (
    <div>
      <Input
        type="text"
        onChange={changeFilter}
        placeholder="Search by name..."
      />
    </div>
  );
}

export default Filter;
