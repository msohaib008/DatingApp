import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { access } from 'fs';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={}
  constructor(public accountService: AccountService, private router:Router, private toastr: ToastrService) { }

  user:any={};

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response =>{
      this.router.navigateByUrl('/members')
      console.log(response);
      this.accountService.currentUser$.subscribe(value => this.user=value);
      console.log("user  ",this.user.username);
      
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
