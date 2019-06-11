import { Injectable } from "@angular/core";
import { Product } from "./product.model";
@Injectable()
export class Cart {
 public lines: CartLine[] = [];
 public itemCount: number = 0;
 public cartPrice: number = 0;
 addLine(product: Product) {
     this.lines.pop();
 let line = this.lines.find(line => line.product.id == product.id);
 this.lines.push(new CartLine(product));
//  this.recalculate();
 }
 updateQuantity(product: Product) {
 let line = this.lines.find(line => line.product.id == product.id);
//  this.recalculate();
 }
 Promote(product: Product){
     let index = this.lines.findIndex(line => line.product.id == product.id);
     if(product.experience > 3){
         product.pro="y";
         this.lines.splice(index,0);
     }
 }
 removeLine(id: number) {
 let index = this.lines.findIndex(line => line.product.id == id);
 this.lines.splice(index, 1);
//  this.recalculate();
 }
 clear() {
 this.lines = [];
 this.itemCount = 0;
 this.cartPrice = 0;
 }
//  private recalculate() {
//  this.itemCount = 0;
//  this.cartPrice = 0;
//  this.lines.forEach(l => {
//  this.itemCount += l.quantity;
//  this.cartPrice += (l.quantity * l.product.price);
//  })
//  }
 }
 export class CartLine {
    constructor(public product: Product) {}
    
}
