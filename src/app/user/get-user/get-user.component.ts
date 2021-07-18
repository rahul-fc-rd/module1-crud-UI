import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  userId! : number;
  user!:User;
  display:boolean=false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  findByUserId(){
    this.userService.getUserById(this.userId).subscribe(result=>{
      //  debugger;
        this.user =result.result;
        this.display=true;
        // console.log(this.users)
      },err=> alert(JSON.stringify(err)));
  }

}
