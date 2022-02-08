const GetItems = async <T>(): Promise<IResponse<T>> => {

  return await fetch("http://localhost:8082/api/items").then((res) =>
    res.json()
  ).then((res) => {
    if (!res.success) {

      return {
        errors: [res.error],
        success: false

      } as IResponse<T>

    }

    return res as IResponse<T>;
  });

};

export { GetItems };
