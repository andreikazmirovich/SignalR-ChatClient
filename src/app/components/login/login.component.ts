import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/shared/models/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() public onLogin: EventEmitter<UserLogin> = new EventEmitter();
  public loginForm: FormGroup;

  ngOnInit(): void {
    const randomId = Math.floor(Math.random() * 100000);
    const randomUsername = `user${randomId}`;
    this.loginForm = new FormGroup({
      user: new FormControl(randomUsername, [Validators.required, Validators.maxLength(20)]),
      room: new FormControl(null, Validators.required)
    });
  }

  public login(): void {
    this.onLogin.next(this.loginForm.value);
    this.loginForm.reset();
  }

}
