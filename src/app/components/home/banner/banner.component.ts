import { Component, OnInit, AfterViewInit } from '@angular/core';

import {trigger, state, style, animate, transition, keyframes, stagger, query } from "@angular/animations"
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        animate('1s', keyframes([
          style({ opacity: 0, transform: 'translateY(-50px)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateY(10px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void { 
  }
  

}
