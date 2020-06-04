import { ProductInterface } from './product.interface';

export interface ProductCartInterface extends ProductInterface {
    amount: number;
}
