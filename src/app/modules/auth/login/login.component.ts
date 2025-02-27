import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../services/auth.service';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  validateForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: AuthService,
    private userStorageService: UserStorageService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  submitForm() {
    if (this.validateForm.invalid) return;
    
    this.authService.login(this.validateForm.value).subscribe(
      (res) => {
        this.message.success(`Login Successful`, { nzDuration: 5000 });
        const user = { id: res.id, role: res.role };
        this.userStorageService.saveUser(user);
        
        if (this.userStorageService.isAdminLoggedIn()) {
          this.router.navigate(['/admin/dashboard']);
        } else if (this.userStorageService.isUserLoggedIn()) {
          this.router.navigate(['/user/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      () => {
        this.message.error(`Bad Credentials`, { nzDuration: 5000 });
      }
    );
  }
}