import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Observable } from 'rxjs';
import { ProductCartInterface } from 'src/app/interfaces/product-cart.interface';
import { ChangeProductAmounEventInterface } from 'src/app/interfaces/change-product-amount-event.interface';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
    public products$: Observable<ProductCartInterface[]>;
    public isOpened$: Observable<boolean>;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.products$ = this.cartService.getCart$();
        this.isOpened$ = this.cartService.isCartOpened$();
    }

    public closeCart(): void {
        this.cartService.setCartOpened(false);
    }

    public onAmountChanged(amountChangedEvent: ChangeProductAmounEventInterface): void {
        this.cartService.changeProductAmount(amountChangedEvent);
    }

    public getProductsPrice(products: ProductCartInterface[]): number {
        return products.reduce((prev, curr) => prev + curr.amount * curr.price , 0);
    }
}
