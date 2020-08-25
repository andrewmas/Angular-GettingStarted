import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    getProducts(): IProduct[] {
        return [
            //these collection need to come from database
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "description": "15 gallon capacity rolling garden hose",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "assets/images/garden_cart.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2019",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "assets/images/hammer.png",
            },
            {
                "productId": 6,
                "productName": "Iron Man",
                "productCode": "IRM-0050",
                "releaseDate": "May 21, 2020",
                "description": "And I...am Iron man",
                "price": 10.0,
                "starRating": 5.0,
                "imageUrl": "assets/images/hammer.png",
            }
        ];
    }
}