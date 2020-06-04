import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { delay } from 'rxjs/operators';
import { productsMock } from './mock/products.mock';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    public getProducts$(params: Record<string, string>): Observable<ProductInterface[]> {
        // imagine http req here
        params;
        return of(productsMock).pipe(delay(500));
    }
}
