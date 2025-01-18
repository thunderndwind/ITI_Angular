import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from "./search/search.component";

@Component({
  selector: 'app-root',
  imports: [UsersComponent, HeaderComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'users-task';
}
