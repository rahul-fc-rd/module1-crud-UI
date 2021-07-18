import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser=new User();
  constructor(private userService:UserService,
    private route:Router) { }
  ngOnInit(): void {
  }

  addingUser(){
    //call service , pass user details
    this.userService.addUser(this.newUser).subscribe(result=>{
      console.log(result);
      alert(JSON.stringify(result));
      this.route.navigateByUrl("/login");
    });
  }
}
