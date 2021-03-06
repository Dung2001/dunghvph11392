import { Injectable } from '@angular/core';
import { TypeProduct } from './product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { dataFake } from './data-fake';

@Injectable()
export class ProductService {
    // products: TypeProduct[] = dataFake;
    API: string = 'https://5e79b4b817314d00161333da.mockapi.io/product';

    constructor(private http: HttpClient) { }
    getProducts(): Observable<TypeProduct[]> {
        return this.http.get<TypeProduct[]>(this.API);
        // return this.products;
    }
    get(id : number): Observable<TypeProduct> {
        return this.http.get<TypeProduct>(`${this.API}/${id}`);
    }
    addProduct(item: TypeProduct): Observable<TypeProduct> {
        return this.http.post<TypeProduct>(this.API, item);
    }
    removeProduct(id: number): Observable<TypeProduct> {
        return this.http.delete<TypeProduct>(`${this.API}/${id}`);
    }
    updateProduct(id : number, item: TypeProduct): Observable<TypeProduct> {
        return this.http.put<TypeProduct>(`${this.API}/${id}`, item);
    }
    getCategory() {
        // call api
    }
}
