import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-get-alluser',
  templateUrl: './get-alluser.component.html',
  styleUrls: ['./get-alluser.component.css']
})
export class GetALLUserComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(result=>{
    //  debugger;
      this.users =result.result;
      // console.log(this.users)
    },err=> alert(JSON.stringify(err)));
    
  }
 
} 