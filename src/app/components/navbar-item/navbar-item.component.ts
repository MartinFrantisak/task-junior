import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.sass']
})
export class NavbarItemComponent implements OnInit {

  @Input() title = ''

  constructor() { }
  ngOnInit(): void {
  }
}
