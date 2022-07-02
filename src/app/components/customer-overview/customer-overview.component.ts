import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.sass']
})
export class CustomerOverviewComponent implements OnInit {

  customers: any = []
  sortBySize(): void {
    this.customers.sort(function(a: { size: any; }, b: { size: any; }) {
      a = a.size.toUpperCase().slice(0, -3)
      b = b.size.toUpperCase().slice(0, -3)
      return Number(b) - Number(a)
    })
    console.log(this.customers)
  }

  search(): void {
    let c = document.getElementById("searchData")
    console.log(c)
  }

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.httpClient.get("assets/customerData.json").subscribe(data => {
      this.customers = data
    })
  }

}
