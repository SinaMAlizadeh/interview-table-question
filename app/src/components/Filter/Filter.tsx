import React, { useState, useEffect } from "react";
import { useData } from "src/Context/TableProvider";
import { Input } from "./Filter.styles";
function Filter() {
  const [filter, setFilter] = useState("");
  const { dispatch } = useData();
  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch({ type: "FILTER_DATA", payload: filter });
    }, 200);
    return () => clearTimeout(delayDebounceFn);
  }, [filter]);

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
