export enum ActionType {
    SetData = "SET_DATA",
    FilterData = "FILTER_DATA",
    SortDara = "SORT_DATA",
    ChangeStatus = "CHANGE_STATUS"
}

export interface SetData {
    type: ActionType.SetData,
    payload: Array<IItem>
}

export interface FilterData {
    type: ActionType.FilterData,
    payload: string
}

export interface SortData {
    type: ActionType.SortDara,
    payload: Sorting
}

export interface ChangeStatus {
    type: ActionType.ChangeStatus,
    payload: UpdateStatus
}

export type Dispatch = (action: Action) => void;

export type Action = SetData | FilterData | SortData | ChangeStatus
