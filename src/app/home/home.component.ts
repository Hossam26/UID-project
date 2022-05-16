import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
declare const $: any;
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        '<i class="fa-solid change fa-arrow-left fa-3x"></i>',
        '<i class="fa-solid change fa-arrow-right fa-3x"></i>',
      ],

      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
  });

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _data:DataService,private _auth:AuthService) {
    this._data.user.next(JSON.parse(localStorage.getItem("User")||"{}"))
   if(this._data.user.getValue().mail.includes('@admin')){
     this._auth.admin.next(true)
   }
  }
  ngOnInit(): void {}
}
