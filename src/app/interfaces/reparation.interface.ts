
export interface Reparation {
    id: number;
    date: Date,
    status: string;
    type: string;
    reparation: string;
    price: string;
    bill_number?: string;
    users_id?: number;
    cars_id ?: number;
}
