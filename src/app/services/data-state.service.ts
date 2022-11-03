import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { makeStateKey, StateKey, TransferState } from "@angular/platform-browser";
import { Observable, of, tap } from "rxjs";
import { Product } from "../interfaces/product.interface";

export const HEROES_LIST = makeStateKey<Product[]>('heroes-list');

@Injectable({
  providedIn: 'root'
})
export class DataStateService {

  isServer: boolean = isPlatformServer(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private transferState: TransferState){
  }

  checkAndGetData<T>(key: StateKey<T>, getDataObservable: Observable<any>, defaultValue: any = []): Observable<T> {
    if (this.transferState.hasKey(key)) {
      console.log('got transferState');
      return of(this.transferState.get(key, defaultValue));
    } else {
      return getDataObservable.pipe(
        tap((data) => {
          if (this.isServer) {
            console.log('set transferState');
            this.transferState.set<T>(key, data);
          }
        })
      );
    }
  }
}
