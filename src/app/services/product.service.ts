import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError, delay, tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { DataStateService, HEROES_LIST } from './data-state.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products/';

    constructor(
        private httpClient: HttpClient,
        private dataStateService: DataStateService,
    ) {
    }

    getProducts(): Observable<Product[]> {
        return this.dataStateService.checkAndGetData<Product[]>(
            HEROES_LIST,
            this.httpClient.get<Product[]>(this.productsUrl),
            []
        );
    }
}
