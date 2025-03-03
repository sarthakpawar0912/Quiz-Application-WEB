import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-view-test-results',
  imports: [SharedModule,CommonModule,NzTableModule],
  templateUrl: './view-test-results.component.html',
  styleUrl: './view-test-results.component.scss'
})
export class ViewTestResultsComponent {
  resultsData:any;
  constructor(private testService:AdminService){}

  ngOnInit(){
    this.getTestResults();
  }

  getTestResults(){
    this.testService.getTestResults().subscribe(res=>{
      this.resultsData=res;
      console.log(this.resultsData);
    })
  }

}
