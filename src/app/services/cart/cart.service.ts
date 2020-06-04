import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ProductCartInterface } from 'src/app/interfaces/product-cart.interface';
import { Store, select } from '@ngrx/store';
import { GlobalState } from 'src/app/+state';
import { getCartSelector } from 'src/app/+state/cart/cart.selector';
import { ChangeProductAmounEventInterface } from 'src/app/interfaces/change-product-amount-event.interface';
import { ChangeProductAmountAction } from 'src/app/+state/cart/cart.actions';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private _isCartOpened$ = new BehaviorSubject<boolean>(false);

    constructor(private store$: Store<GlobalState>) {}

    public getCart$(): Observable<ProductCartInterface[]> {
        return this.store$.pipe(select(getCartSelector));
    }

    public isCartOpened$(): Observable<boolean> {
        return this._isCartOpened$.asObservable();
    }

    public setCartOpened(isOpened: boolean): void {
        this._isCartOpened$.next(isOpened);
    }

    public changeProductAmount(amountChangeEvent: ChangeProductAmounEventInterface): void {
        this.store$.dispatch(new ChangeProductAmountAction(amountChangeEvent));
    }
}
