import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	product: Product;
	comments: Comment[];

  @Input()
  newRating: number = 5;
  newComment: string = "";
  isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
  	let productId: number = this.routeInfo.snapshot.params["productId"];
  	this.product = this.productService.getProduct(productId);
  	this.comments = this.productService.getCommentForProductId(productId);
  }
  addComment(){
    let comment = new Comment(0, this.product.id, new Date().toISOString(), "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
  isHidden(){
       this.isCommentHidden = !this.isCommentHidden;
    }

}
