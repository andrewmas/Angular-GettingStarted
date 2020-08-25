import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List pageTitle';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    showImageText: string = 'Show';
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        // conditional check on listFilter for null, empty or undefined
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
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

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
        this.showImageText = this.showImage ? 
                'Hide' : 'Show';
    }

    ngOnInit(): void{
        console.log('In OnInit');
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Product list ${message}`;
    }
}