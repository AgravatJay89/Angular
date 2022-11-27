import { Component } from '@angular/core';
import { Product } from './../product';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  idToEdit = -1;

  myForm = new FormGroup({
    id : new FormControl('',Validators.required),
    createdAt : new FormControl(''), 
    ProductName : new FormControl('',Validators.required), 
    ProductImage : new FormControl('',Validators.required),
    ProductPrice : new FormControl('',Validators.required),
    ProductDescription : new FormControl('')
   });

  product : Product[] = [];

   insert(){
    if(this.idToEdit<0){
      this.product.push(<Product>this.myForm.value);
    }
    else{
      this.product[this.idToEdit]=<Product>this.myForm.value;
    }

    this.myForm.controls.id.setValue('');
    this.myForm.controls.createdAt.setValue('');
    this.myForm.controls.ProductName.setValue('');
    this.myForm.controls.ProductImage.setValue('');
    this.myForm.controls.ProductPrice.setValue('');
    this.myForm.controls.ProductDescription.setValue('');

    this.idToEdit = -1;
   }

   delete(i:any){
    this.product.splice(i,1);
   }

   edit(i:any){
    this.idToEdit=i;
    this.myForm.controls.id.setValue(this.product[i].id);
    this.myForm.controls.createdAt.setValue(this.product[i].createdAt);
    this.myForm.controls.ProductName.setValue(this.product[i].ProductName);
    this.myForm.controls.ProductImage.setValue(this.product[i].ProductImage);
    this.myForm.controls.ProductPrice.setValue(this.product[i].ProductPrice);
    this.myForm.controls.ProductDescription.setValue(this.product[i].ProductDescription);
   }
}
