import { Component, OnInit } from '@angular/core';
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
  constructor() {}
   
  ngOnInit(): void {}
}
