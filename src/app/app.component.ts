import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SharedModule } from './modules/shared/shared.module';
import { UserStorageService } from './modules/auth/services/user-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,  
    NzIconModule, 
    NzLayoutModule,
    CommonModule, 
    NzMenuModule,
    SharedModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed = false;
  isUserLoggedIn = false;
  isAdminLoggedIn = false;

  constructor(private router: Router, private userStorageService: UserStorageService) {}

  ngOnInit() {
    this.updateLoginStatus();
    this.router.events.subscribe(() => {
      this.updateLoginStatus();
    });
  }

  updateLoginStatus() {
    this.isUserLoggedIn = this.userStorageService.isUserLoggedIn();
    this.isAdminLoggedIn = this.userStorageService.isAdminLoggedIn();
  }

  logout() {
    this.userStorageService.signOut();
    this.router.navigate(['/login']);
  }
}