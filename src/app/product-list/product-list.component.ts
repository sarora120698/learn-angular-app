import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
debugger;
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  filteredProductList: any = [];
  httpClient = inject(HttpClient);
  data: any = [];
  constructor() {
    this.data = this.fetchData();
    this.filteredProductList = this.data;
  }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.httpClient
      .get('https://fakestoreapi.com/products')
      .subscribe((response) => {
        console.log(response);
        this.data = response;
        this.filteredProductList = response;
      });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.data;
      return;
    }
    this.filteredProductList = this.data.filter((product: any) =>
      product?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
}
