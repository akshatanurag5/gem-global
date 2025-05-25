import {ChangeDetectorRef, Component} from '@angular/core';
import {SECTION_IDS} from "../../constants/app.const";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import emailjs from "@emailjs/browser";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-news-and-update',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './news-and-update.component.html',
  styleUrl: './news-and-update.component.scss'
})
export class NewsAndUpdateComponent {
  protected readonly SECTION_IDS = SECTION_IDS;
  private emailJsConfig: any = environment.emailJsConfig;

  isSending: boolean = false;
  emailSent: boolean = false;
  subscribeForm: FormGroup;

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
    this.subscribeForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]]
    });
  }

  ngOnInit(): void {
    this.subscribeForm.valueChanges.subscribe(() => {
      if (this.subscribeForm.touched) {
        this.emailSent = false;
        this.cdr.detectChanges();
      }
    });
  }

  handleSubscribeEmail() {
    this.subscribeForm.markAllAsTouched();
    if(this.subscribeForm.invalid) {
      return;
    }
    this.isSending = true;
    const formData = this.subscribeForm.value;

    emailjs.send(
      this.emailJsConfig.serviceId,
      this.emailJsConfig.subscribeTemplateId,
      formData,
      this.emailJsConfig.publicKey,
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        // alert('Message sent successfully!');
        this.isSending = false;
        this.emailSent = true;
        this.subscribeForm.reset();
      },
      (error) => {
        console.error('FAILED...', error);
        // alert('Failed to send message.');
        this.isSending = false;
        this.emailSent = false;
      }
    );
  }
}
