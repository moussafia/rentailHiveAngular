
export enum EquipmentActionType {

}
export enum DataState{
    LOADING, LOADED, ERROR
}
export interface IEquipementDataState<T>{
dataState: DataState,
data?: T,
error?: string,
}
