import { IRestaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { Observable } from "rxjs/Observable";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

    restaurants(): Observable<IRestaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
          .map(response => response.json())
          .catch(ErrorHandler.handleError);
    }
    
    restaurantById(id: string): Observable<IRestaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
          .map(response => response.json())
          .catch(ErrorHandler.handleError);
    }

    /** 
     * TODO: substituir any pelo tipo correspondente?
    */
    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
  }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}