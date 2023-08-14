import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  constructor(private toastr: ToastrService, private route: Router) {}

  onSubmit(): void {
    this.toastr.info('Registeration successful', 'Registered', {
      timeOut: 2000,
    });
    this.route.navigate(['/login']);
  }
}
