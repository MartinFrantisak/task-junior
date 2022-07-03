import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.sass']
})
export class NavbarItemComponent implements OnInit {

  @Input() title = ''
  @Input() logo_src = ''
  @Input() logo_src_active = ''


  constructor(public router: Router) { }
  ngOnInit(): void {
  }
}
