import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

    categories= [];
    slideOpts = {
      initialSlide: 0
    };
  constructor() { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){

    this.categories = [
      {
        name:"Utilities",
        icon:"bulb-outline"
      },
      {
        name:"School Fees",
        icon:"easel-outline"
      },
      {
        name:"Internet",
        icon:"wifi-outline"
      },
      {
        name:"Airtime",
        icon:"call-outline"
      },
      {
        name:"Corporates",
        icon:"receipt-outline"
      },
      {
        name:"Others",
        icon:"pricetags-outline"
      },
    ]
  }

}
