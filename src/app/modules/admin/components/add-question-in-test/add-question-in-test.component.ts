import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { DemoNgZorroAntdModule } from '../../../../DemoNgZorroAntdModule';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../services/admin.service';

@Component({

  selector: 'app-add-question-in-test',
  imports: [SharedModule,DemoNgZorroAntdModule,CommonModule],
  templateUrl: './add-question-in-test.component.html',
  styleUrl: './add-question-in-test.component.scss'
})

export class AddQuestionInTestComponent {
  testForm: any;
  deviceService: any;

  constructor(
    private fb: FormBuilder,
    private devicesService: AdminService,
    private notification: NzNotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  
  questionForm!: FormGroup;
  id: number | null = null;

  ngOnInit() {
    this.questionForm = this.fb.group({
      questionText: [null, [Validators.required]],
      optionA: [null, [Validators.required]],
      optionB: [null, [Validators.required]],
      optionC: [null, [Validators.required]],
      optionD: [null, [Validators.required]],
      correctOption: [null, [Validators.required]]
    });
  this.id = this.activatedRoute.snapshot.params['id'];
  }

  submitForm() {
    if (this.questionForm.invalid) {
      this.notification.error(
        'ERROR',
        'Please fill out all required fields.',
        { nzDuration: 5000 }
      );
      return;
    }
    const questionDto = this.questionForm.value;
    questionDto.id = this.id; // Assigning the test ID
    console.log('Form Data:', questionDto); // Log the form data
    this.devicesService.addQuestionInTest(questionDto).subscribe(
      (res) => {
        this.notification.success(
          'SUCCESS',
          'Question Created Successfully.',
          { nzDuration: 5000 }
        );
        this.router.navigateByUrl('/admin/dashboard');
      },
      (error) => {
        this.notification.error(
          'ERROR',
          error.error || 'An error occurred while adding the question.',
          { nzDuration: 5000 }
        );
      }
    );
  }
  
}
