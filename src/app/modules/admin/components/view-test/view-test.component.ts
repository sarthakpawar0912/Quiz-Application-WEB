import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { DemoNgZorroAntdModule } from '../../../../DemoNgZorroAntdModule';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-test',
  standalone: true,
  imports: [SharedModule, DemoNgZorroAntdModule, CommonModule],
  templateUrl: './view-test.component.html',
  styleUrl: './view-test.component.scss'
})
export class ViewTestComponent {

  questions: any[] = [];
  testId: number = 0;
  testTitle: string = '';
  testDescription: string = '';
  testTime: number = 0;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private notification: NzNotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.testId = Number(params.get('id')) || 0;  // Convert to number safely

      if (this.testId > 0) {
        this.fetchTestDetails();
      } else {
        console.error("❌ Invalid test ID");
        this.notification.error("Error", "Invalid Test ID!", { nzDuration: 4000 });
      }
    });
  }

  fetchTestDetails() {
    this.adminService.getTestById(this.testId).subscribe(
      res => {
        console.log("🔍 API Response:", res);

        if (res && res.testDto) {
          this.testTitle = res.testDto.title;
          this.testDescription = res.testDto.description;
          this.testTime = res.testDto.time;
        }

        if (res && res.questionDto && Array.isArray(res.questionDto)) {
          this.questions = res.questionDto;
          console.log("✅ Loaded Questions:", this.questions);
        } else {
          console.warn("⚠️ No questions found for this test!");
          this.questions = [];
          this.notification.warning("No Questions", "No questions available for this test!", { nzDuration: 4000 });
        }
      },
      error => {
        console.error("❌ Error fetching test details:", error);
        this.notification.error("Error", "Failed to fetch test questions. Try again!", { nzDuration: 5000 });
      }
    );
  }
}
