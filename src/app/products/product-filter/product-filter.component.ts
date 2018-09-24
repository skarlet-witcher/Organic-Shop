import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll(); // consisitency 保证调用的方法同名 方便维护
   }

  ngOnInit() {
  }

}
