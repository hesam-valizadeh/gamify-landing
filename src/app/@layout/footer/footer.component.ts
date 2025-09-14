import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FooterViewDataInterface} from '../../models/footer-view-data.interface';
import {ContactUsService} from '@layout/footer/services/contact-us.service';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactForm: FormGroup;
  isSending: boolean = false;
  isSentSuccessfully: boolean | null = null;
  data: FooterViewDataInterface = {
    title: 'شما هم گیمی‌فای را امتحان کنید',
    description: ['کمپین خاصی در ذهن دارید و نمی‌دانید از کجا شروع کنید؟ ما اینجاییم تا از ایده تا اجرا، در کنار شما باشیم.'],
    phoneNumber: "۰۹۱۲۴۵۸۷۷۸۷",
    tell: "۰۲۱۷۷۵۳۳۵۶۷",
    requestAdvice: "درخواست مشاوره"
  }

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private contactUsServies: ContactUsService) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      contactNumber: ['', [Validators.required, Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern(/^0\d{10}$/)
      ]],
      description: ['', [Validators.required]]
    });
  }

  onSendMessage() {
    if (this.contactForm.invalid) {
      return;
    }
    this.isSending = true;
    this.isSentSuccessfully = null;
    this.contactUsServies.submitContactUsForm(this.contactForm.value).subscribe({
      next: () => {
        this.isSending = false;
        this.isSentSuccessfully = true;
        this.contactForm.reset();
        setTimeout(() => {
          this.isSentSuccessfully = null;
        }, 3000);
      },
      error: err => {
        this.isSending = false;
        this.isSentSuccessfully = false;
        setTimeout(() => {
          this.isSentSuccessfully = null;
        }, 3000);
      }
    })
  }
}
