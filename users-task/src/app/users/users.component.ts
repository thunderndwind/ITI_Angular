import { Component, OnInit } from '@angular/core';
import { User, Role } from '../models/user';
import usersData from '../../../public/data/users.json';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  emptyData: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.users = usersData.map(user => ({
      ...user,
      role: user.role.toLowerCase() as Role
    }));

    this.filteredUsers = this.users;

    this.emptyData = this.users.length === 0;

    this.searchService.search$.subscribe(searchTerm => {
      this.filterUsers(searchTerm);
    });
  }

  filterUsers(searchTerm: string) {
    if (!searchTerm) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}