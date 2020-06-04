import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductCartInterface } from 'src/app/interfaces/product-cart.interface';

export const getCartState = createFeatureSelector<ProductCartInterface[]>('cart');
export const getCartSelector = createSelector(getCartState, (state: ProductCartInterface[]) => state);
