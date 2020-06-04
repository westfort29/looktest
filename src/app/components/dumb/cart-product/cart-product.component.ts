import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { ProductCartInterface } from 'src/app/interfaces/product-cart.interface';
import { FormControl } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { AbstractDestroyable } from '../../abstract/abstract-destroyable';
import { ChangeProductAmounEventInterface } from 'src/app/interfaces/change-product-amount-event.interface';

@Component({
    selector: 'app-cart-product',
    templateUrl: './cart-product.component.html',
    styleUrls: ['./cart-product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductComponent extends AbstractDestroyable {
    @Input() product: ProductCartInterface;
    @Output() amountChanged = new EventEmitter<ChangeProductAmounEventInterface>();

    public amountControl: FormControl;

    ngOnInit(): void {
        this.amountControl = new FormControl(this.product.amount);

        this.amountControl.valueChanges
            .pipe(
                debounceTime(200),
                takeUntil(this.onDestroy$),
            )
            .subscribe((amount: number) => this.amountChanged.emit({amount, id: this.product.id}))
    }

    public changeAmount(delta: number): void {
        this.amountControl.patchValue(this.amountControl.value + delta);
    }
}