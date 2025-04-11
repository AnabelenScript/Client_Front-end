export default interface Pedido {
    dessert_id?: number; 
    user_id: number;
    cantidad_producto: number;
    estatus: string;
    total: number
}