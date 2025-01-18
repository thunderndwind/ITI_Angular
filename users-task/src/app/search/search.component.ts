import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm = '';
  hasSearched = false;

  constructor(private searchService: SearchService) { }

  onSearch() {
    this.searchService.updateSearchTerm(this.searchTerm.trim());
    this.hasSearched = true;
  }

  onReset() {
    this.searchService.updateSearchTerm('');
    this.hasSearched = false;
  }
}