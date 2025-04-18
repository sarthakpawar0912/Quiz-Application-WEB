import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
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

  constructor(
    private router: Router,
    private userStorageService: UserStorageService,
    private ngZone: NgZone
  ) {}


  ngOnInit() {
    this.updateLoginStatus();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngZone.run(() => this.updateLoginStatus());
      }
    });
  }


  updateLoginStatus() {
    this.isUserLoggedIn = this.userStorageService.isUserLoggedIn();
    this.isAdminLoggedIn = this.userStorageService.isAdminLoggedIn();
    console.log("User logged in:", this.isUserLoggedIn);
    console.log("Admin logged in:", this.isAdminLoggedIn);
  }


  logout() {
    this.userStorageService.signOut();
    this.router.navigate(['/login']);
  }


}