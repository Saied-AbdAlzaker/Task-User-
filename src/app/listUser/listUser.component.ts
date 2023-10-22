import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listUser',
  templateUrl: './listUser.component.html',
  styleUrls: ['./listUser.component.scss']
})
export class ListUserComponent implements OnInit {

  title = 'pagination';
  usersLists: any[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  addUser: string = 'Add New Contact';

  constructor(private _ContactsService: ContactsService, private _Router: Router) { }

  getUsers() {
    this._ContactsService.listUsers().subscribe((user) => {
      console.log(user);
      this.usersLists = user.data;
    })
  }

  onUpdateUsers(user: any, id: string) {
    this._ContactsService.updateUsers(user , id).subscribe((user) => {
      console.log(user.data.id);
      this._Router.navigateByUrl('/addUser' +  id);
      // this.usersLists.push(user.data);
      this.usersLists = user.data;
    })
  }

  onDeleteUsers(id: string) {
    this._ContactsService.deleteUsers(id).subscribe((user) => {
      console.log(user);
      this.usersLists.splice(user.id, 1);
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onTableDataChange(event: any) {
    // this.tableSize = event.target.value;
    this.page = event;
    // this.getUsers();
  }

}


