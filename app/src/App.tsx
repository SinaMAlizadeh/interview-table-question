import React, { useContext, useState, useEffect } from "react";
import ErrorComponent from "./components/Error/Error";
import LoadingComponent from "./components/Loading/Loading";
import RefreshBtn from "./components/Refresh/Refresh";

import Table from "./components/Table/Table";
import { Container } from "./configs/app";
import { ActionType, SetData } from "./Context/TableActions";
import {
  TableProvider,
  TableStateContext,
  useData,
} from "./Context/TableProvider";

import { GetItems } from "./services/TableApi/TableApi";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[] | null>(null);
  const {
    state: { data },
    dispatch,
  } = useData();

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
    dispatch({ type: ActionType.SetData, payload: payload } as SetData);
    // setList(payload);
  };

  return (
    <div>
      {errors && (
        <Container>
          <ErrorComponent errorMessages={errors} />{" "}
          <RefreshBtn refresh={getData} loading={loading} />{" "}
        </Container>
      )}
      {loading && <LoadingComponent />}
      {!errors && data && <Table />}
    </div>
  );
};

export default App;
