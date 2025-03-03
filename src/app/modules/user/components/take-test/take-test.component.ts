import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { UserStorageService } from '../../../auth/services/user-storage.service';

@Component({
  selector: 'app-take-test',
  imports: [SharedModule,CommonModule],
  templateUrl: './take-test.component.html',
  styleUrl: './take-test.component.scss'
})
export class TakeTestComponent{
  questions: any[] = [];
    testId: number = 0;
    testTitle: string = '';
    testDescription: string = '';
    testTime: number = 0;
    timeRemaining: number = 0;
    interval: any;
    selectedAnswers: { [key: number]: string } = {};
    isSubmitting: boolean = false;

    constructor(
        private testService: TestService,
        private activatedRoute: ActivatedRoute,
        private message: NzMessageService,
        private router: Router,
        private userStorageService: UserStorageService
    ) {}

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.testId = +(params.get('id') ?? 0);

            if (!this.testId) {
                this.message.error('Invalid test ID', { nzDuration: 5000 });
                this.router.navigate(['/user/dashboard']);
                return;
            }
            this.fetchTestDetails();
        });
    }

    fetchTestDetails() {
        this.testService.getTestQuestions(this.testId).subscribe(
            (res) => {
                console.log('🔍 API Response:', res);
                if (res?.testDto) {
                    this.testTitle = res.testDto.title ?? 'Untitled Test';
                    this.testDescription = res.testDto.description ?? 'No description available.';

                    this.testTime = res.testDto.time ?? 0;
                    this.timeRemaining = this.testTime;

                    console.log(`⏳ Timer set for ${this.timeRemaining} seconds`);

                    this.startTimer();
                }

                if (Array.isArray(res?.questionDto)) {
                    this.questions = res.questionDto;
                    console.log('✅ Loaded Questions:', this.questions);
                } else {
                    console.warn('⚠️ No questions found for this test!');
                    this.questions = [];
                    this.message.warning('No questions available for this test.', { nzDuration: 4000 });
                }
            },
            (error) => {
                console.error('❌ Error fetching test details:', error);
                this.message.error('Failed to load test questions', { nzDuration: 5000 });
            }
        );
    }

    startTimer() {
        if (this.interval) {
            clearInterval(this.interval);
        }

        this.interval = setInterval(() => {
            if (this.timeRemaining > 0) {
                this.timeRemaining--;
                console.log(`⏳ Time Remaining: ${this.getFormattedTime()}`);
            } else {
                clearInterval(this.interval);
                this.submitAnswer();
            }
        }, 1000);
    }

    getFormattedTime(): string {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    onAnswerChange(questionId: number, selectedOption: string) {
      this.selectedAnswers[questionId] = selectedOption; // Store as "optionA", "optionB", etc.
      console.log('Selected Answers:', this.selectedAnswers);
  }

    submitAnswer() {
      if (this.isSubmitting) {
          return; // Prevent multiple submissions
      }
  
      this.isSubmitting = true;
  
      // Prepare the answer list
      const answerList = Object.keys(this.selectedAnswers).map((questionId) => {
          const selectedOption = this.selectedAnswers[Number(questionId)];
          // Normalize the selected option (e.g., "optionB" -> "B")
          const normalizedOption = selectedOption.replace('option', '').toUpperCase();
  
          return {
              questionId: Number(questionId),
              selectedOption: normalizedOption, // Send the normalized option
          };
      });
  
      console.log("📝 Prepared Answer List:", answerList);
  
      // Prepare the data to send to the backend
      const data = {
          testId: this.testId,
          userId: this.userStorageService.getUserId(),
          responses: answerList,
      };
  
      console.log("📤 Sending Data to Backend:", data); // Log the data being sent
  
      // Call the backend API to submit the test
      this.testService.submitTest(data).subscribe(
          (res) => {
              this.isSubmitting = false;
              console.log("✅ Response from Backend:", res); // Log the response from the backend
              this.message.success(`Test Submitted Successfully`, { nzDuration: 5000 }); 
              this.router.navigate(['/user/dashboard']); 
          },
          (error) => {
              this.isSubmitting = false;
              console.error("❌ Error submitting test:", error); // Log the error
              this.message.error(`Failed to submit test: ${error.error.message || 'Unknown error'}`, {
                  nzDuration: 5000,
              });
          }
      );
  }

    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}