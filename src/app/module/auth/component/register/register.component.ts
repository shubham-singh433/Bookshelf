import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name!: string;
  registerForm = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmpassword: new FormControl<string>(''),
  });
  constructor(
    private toastr: ToastrService,
    private route: Router,
    private user: UserService
  ) {}

  onSubmit(): void {
    if (this.registerForm.value.username && this.registerForm.value.password)
      this.name =
        this.registerForm.value.username + this.registerForm.value.password;

    // this.name = JSON.stringify(this.registerForm.value.username+this.registerForm.value.password);
    if (
      !localStorage.getItem(this.name) &&
      this.registerForm.value.password ===
        this.registerForm.value.confirmpassword
    ) {
      this.toastr.info('Registeration successful', 'Registered', {
        timeOut: 2000,
      });
      this.user.setUser(this.name);
      this.route.navigate(['/login']);
    } else {
      this.toastr.info('Password Not Matched', '', {
        timeOut: 2000,
      });
    }
  }
}
