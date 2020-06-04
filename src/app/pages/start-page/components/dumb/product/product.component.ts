import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    @Input() product: ProductInterface;
}
