import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Observable } from 'rxjs';
import { ProductCartInterface } from 'src/app/interfaces/product-cart.interface';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    public cartCount$: Observable<number>;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartCount$ = this.cartService.getCart$().pipe(map((products: ProductCartInterface[]) => products.length));
    }

    public openCart(): void {
        this.cartService.setCartOpened(true);
    }
}
