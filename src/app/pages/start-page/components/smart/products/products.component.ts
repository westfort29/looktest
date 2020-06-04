import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AbstractDestroyable } from 'src/app/components/abstract/abstract-destroyable';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { startWith, switchMap, debounceTime } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent extends AbstractDestroyable implements OnInit {
    public products$: Observable<ProductInterface[]>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.initProducts();
    }

    private initProducts(): void {
        this.products$ = this.activatedRoute.queryParams
            .pipe(
                startWith(this.activatedRoute.snapshot.queryParams),
                // here could be params mapping
                switchMap((params: Record<string, string>) => this.productsService.getProducts$(params)),
            );
    }
}
