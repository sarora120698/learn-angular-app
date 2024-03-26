import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  id: number = NaN;
  data: any = [];
  product: any = {};
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      console.log('ID from URL:', this.id);
    });
    const data = this.dataService.getData();
    data.subscribe((value) => {
      this.data = value;
    });
    this.product = this.data?.filter((item: any) => item.id === this.id)[0];
  }
}
