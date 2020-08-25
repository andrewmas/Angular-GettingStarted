import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css'],
    // providers: [ProductService] //this is registering the service for one specific component. providedIn: 'root' is for entire module
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
    products: IProduct[] = [];

    constructor(private productService: ProductService) {
        // this.filteredProducts = this.products; //since constructor gets executed first before ngOnInit so we need to move this down
        // this.listFilter = 'cart'; //remove this to see all products by default
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
        //lifecycle hook
        //constructor gets executed first before ngOnInit
        console.log('In OnInit');
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Product list ${message}`;
    }
}