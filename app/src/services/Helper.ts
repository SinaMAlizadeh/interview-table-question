const filterData = <T>(list: Array<T>, filter: string, param: string): Array<T> => {
    return list.filter((x) =>
        x[param].toLowerCase().includes(filter)
    )
}

const SortingData = <T>(list: Array<T>, type: string, orderBy: string): Array<T> => {
    return type == "DESC"
        ? list.sort((a, b) =>
            a[orderBy] > b[orderBy] ? 1 : -1
        )
        : list.sort((a, b) =>
            a[orderBy] < b[orderBy] ? 1 : -1
        );
}

const ChangeStatusData = (list: Array<IItem>, id: number, newStatus: string): Array<IItem> => {
    return list.map((item) => {
        if (item.id == id)
            return {
                ...item,
                status: newStatus,
            } as IItem;
        return item;
    })
}

export { filterData, SortingData, ChangeStatusData };