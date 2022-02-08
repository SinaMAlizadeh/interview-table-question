import React, { useContext, useState, useEffect } from "react";
import ErrorComponent from "./components/Error/Error";
import LoadingComponent from "./components/Loading/Loading";
import RefreshBtn from "./components/Refresh/Refresh";

import Table from "./components/Table/Table";

import { GetItems } from "./services/TableApi/TableApi";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Array<IItem>>([]);
  const [errors, setErrors] = useState<string[] | null>(null);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const getData = async () => {
    setErrors(null);
    const { errors, payload, success } = await GetItems<IItem[]>();
    setLoading(false);
    if (!success) {
      setErrors(errors);
    }
    setList(payload);
  };

  return (
    <div>
      {loading && <LoadingComponent />}
      <RefreshBtn refresh={getData} loading={loading} />
      {errors && <ErrorComponent errorMessages={errors} />}
      {!errors && <Table data={list} />}
    </div>
  );
};

export default App;
