import { ActionReducer, ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import * as fromCart from './cart/cart.reducer';
import { ProductCartInterface } from '../interfaces/product-cart.interface';

export interface GlobalState {
    cart: ProductCartInterface[],
}

export const reducers: ActionReducerMap<GlobalState> = {
    cart: fromCart.reducer,
};

export function stateReset(reducer: ActionReducer<GlobalState>): ActionReducer<GlobalState> {
    return (state: GlobalState, action: Action) => {
        if (action.type === 'RESET_STATE') {
            reducer(undefined, action);
        }

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<GlobalState>[] = [stateReset];