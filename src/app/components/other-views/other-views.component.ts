import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-other-views',
  templateUrl: './other-views.component.html',
  styleUrls: ['./other-views.component.sass']
})
export class OtherViewsComponent implements OnInit {

  title: any
  constructor(private activatedRouter:ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRouter.data.subscribe(data => {
      this.title = data['title']
    })
  }
}
