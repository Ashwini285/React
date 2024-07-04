import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
