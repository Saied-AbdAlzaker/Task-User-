import { ContactsService } from '../contacts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  constructor(private _ContactsService: ContactsService, private _Router: Router) { }

  usersLists: any[] = [];

  getUsers() {
    this._ContactsService.listUsers().subscribe((user) => {
      console.log(user);
      this.usersLists = user.data;
    })
  }

  getUsersById(id:string) {
    this._ContactsService.getUsers(id).subscribe((user) => {
      console.log(user);
      this.usersLists = user.data;
    })
  }

  ngOnInit(): void {
    
  }

}
