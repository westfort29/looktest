import { Action } from '@ngrx/store';
import { ProductCartInterface } from 'src/app/interfaces/product-cart.interface';
import { ChangeProductAmounEventInterface } from 'src/app/interfaces/change-product-amount-event.interface';

export enum CartActionTypes {
    ADD_PRODUCT_TO_CART = '[Cart] Add product to cart',
    CHANGE_PRODUCT_AMOUNT = '[Cart] Change product amount',
    CLEAR_CART = '[Cart] Clear cart',
}

export class AddProductToCartAction implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT_TO_CART;

    constructor(public payload: ProductCartInterface) {}
}

export class ChangeProductAmountAction implements Action {
    readonly type = CartActionTypes.CHANGE_PRODUCT_AMOUNT;

    constructor(public payload: ChangeProductAmounEventInterface) {}
}

export class ClearCartAction implements Action {
    readonly type = CartActionTypes.CLEAR_CART;

    constructor() {}
}

export type CartActions = AddProductToCartAction | ChangeProductAmountAction | ClearCartAction;
