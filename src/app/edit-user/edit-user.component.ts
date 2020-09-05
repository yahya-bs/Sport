import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  user: any;
  userForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fName: [''],
      lName: ['']
    });
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      x => {
        console.log('X', x);
        this.user = x;
      }
    )
  }

  validateEdit() {
    this.userService.editUser(this.user).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }
}
