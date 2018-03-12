import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

	private products: Product[] = [
  		new Product(1,"第一个商品",0.99,1.5,"这是第一个商品，是我在学习慕课网Angular入门实践时创建的。",["电子商品","数码商品"]),
  		new Product(2,"第二个商品",1.99,2.5,"这是第二个商品，是我在学习慕课网Angular入门实践时创建的。",["电子商品"]),
  		new Product(3,"第三个商品",2.99,3.5,"这是第三个商品，是我在学习慕课网Angular入门实践时创建的。",["图书","数码商品"]),
  		new Product(4,"第四个商品",3.99,4.5,"这是第四个商品，是我在学习慕课网Angular入门实践时创建的。",["电子商品","硬件设备"]),
  		new Product(5,"第五个商品",4.99,3.5,"这是第五个商品，是我在学习慕课网Angular入门实践时创建的。",["电子商品","数码商品"]),
  		new Product(6,"第六个商品",5.99,1.5,"这是第六个商品，是我在学习慕课网Angular入门实践时创建的。",["硬件设备","图书"]),
  		];

  	private comments: Comment[] = [
  		new Comment(1, 1, '2018-03-03 18:08:23', '小米', 3, '颜色漂亮'),
  		new Comment(2, 1,"2018-03-09 18:08:23","小米",1,"颜色佳节快乐漂亮"),
  		new Comment(3,2,"2018-03-04 18:08:23","小简介",4,"颜色漂亮"),
  		new Comment(4,3,"2018-03-06 18:08:23","就好米",5,"颜色几句话漂亮"),
  	];

  constructor() { }

  getProducts():Product[]{
  	return this.products;
  }

  getProduct(id: number): Product {
  	return this.products.find((product) => product.id == id);
  }

  getCommentForProductId(id:number):Comment[]{
  	return this.comments.filter((comment:Comment) => comment.productId == id);
  }

}
export class Product{
	constructor(
		public id: number,
		public title: string,
		public price: number,
		public rating: number,
		public desc: string,
		public categories: Array<string>
	){}
}

export class Comment{
	constructor(
		public id: number,
		public productId: number,
		public timestamp: string,
		public user: string,
		public rating: number,
		public content: string
		){}
}
