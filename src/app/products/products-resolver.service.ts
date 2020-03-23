import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<Product[]> {
    constructor(private productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
        return this.productService.getProducts();
    }
}
