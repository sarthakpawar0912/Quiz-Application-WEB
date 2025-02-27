import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../services/admin.service';
import { DemoNgZorroAntdModule } from '../../../../DemoNgZorroAntdModule';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [SharedModule,DemoNgZorroAntdModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

    // ✅ Define an interface for the test object
   
   
    tests: { id: number; title: string; time: number; description: string }[] = [];


  constructor(
    private notification: NzNotificationService,
    private testService: AdminService
  ) {}


  ngOnInit() {
    this.getAllTests();
  }


  getAllTests() {
    this.testService.getAllTest().subscribe(
      res => {
        this.tests = res;
      },
      error => {
        this.notification.error('ERROR', `Something Went Wrong. Try Again`, {
          nzDuration: 5000
        });
      }
    );
  }

  

  getFormattedTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }

}
