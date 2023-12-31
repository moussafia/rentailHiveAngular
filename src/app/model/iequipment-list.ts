export interface IEquipmentList {
    id: number;
    name: string;
    quantity: number;
    pricePerDay: number;
    manufacturerName: string;
    category: ICategory;
}
export interface ICategory{
    id: number,
    name: string
}
