import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  cname="Sarath";
  taxVal=450;
   users={};
  updatedsUsersList(event:any)
  {
    console.log(event);
    this.users=event;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
