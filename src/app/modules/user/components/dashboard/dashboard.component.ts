import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TestService } from '../../services/test.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tests: any[] = [];

  constructor(private notification: NzNotificationService, private testService: TestService) {}

  ngOnInit() {
    this.getAllTests();
  }

  getAllTests() {
    this.testService.getAlltest().subscribe(
      res => {
        console.log('API Response:', res); // Debugging
        if (Array.isArray(res)) {
          this.tests = res;
        } else {
          this.notification.error('ERROR', 'Unexpected response format', { nzDuration: 5000 });
        }
      },
      error => {
        console.error('API Error:', error);
        this.notification.error('ERROR', 'Something Went Wrong. Try Again', { nzDuration: 5000 });
      }
    );
  }

  getFormattedTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }
}
