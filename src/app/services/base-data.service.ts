import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaseDataService {

    state_city_map: any;

    constructor(public http: HttpClient) {
    }

    getStateCityMap(): Promise<any> {
        if (this.state_city_map != null) return Promise.resolve(this.state_city_map);
        else return this.http.get("/assets/collections/state-city.json").pipe(tap(res => this.state_city_map = res)).toPromise();
    }


}
