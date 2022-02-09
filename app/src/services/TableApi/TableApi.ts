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

const UpdateStatus = async (params: UpdateStatus): Promise<IResponse<IItem>> => {

  return await fetch(`http://localhost:8082/api/items/${params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: params.status })
  }).then((res) =>
    res.json()
  ).then((res) => {
    return res;
  });
}

export { GetItems, UpdateStatus };
