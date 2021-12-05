import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {
  
  @Input()
  channelName:any;
  @Input()
  tax:any;

  @Output()
   updatedList=new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  updatedUsers()
  {
    let userObj={userId:10,userName:"Sarath"};
    this.updatedList.emit(userObj);
  }

}
