import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TestScheduler } from 'rxjs/testing';
import { TestService } from '../../services/test.service';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-view-my-test-results',
  imports: [SharedModule,CommonModule,NzTableModule],
  templateUrl: './view-my-test-results.component.html',
  styleUrl: './view-my-test-results.component.scss'
})
export class ViewMyTestResultsComponent {

  dataSet: any[] = [];
  constructor(private testService: TestService) {}
  ngOnInit() {
    this.getTestResults();
  }

  getTestResults() {
    this.testService.getMyTestResults().subscribe(
      res => {
        this.dataSet = res;
        console.log(this.dataSet);
      },
      error => {
        console.error('Error fetching test results:', error);
      }
    );
  }
  
}
