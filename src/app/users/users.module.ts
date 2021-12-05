import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { FilterUsersComponent } from './filter-users/filter-users.component';



@NgModule({
  declarations: [
    UsersListComponent,
    FilterUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsersListComponent,
    FilterUsersComponent
  ]
})
export class UsersModule { }
