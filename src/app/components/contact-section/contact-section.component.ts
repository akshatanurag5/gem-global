import { Component } from '@angular/core';
import {SECTION_IDS, Service} from "../../constants/app.const";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import emailjs from '@emailjs/browser';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  protected readonly SECTION_IDS = SECTION_IDS;
  private emailJsConfig: any = environment.emailJsConfig;

  contactUsForm!: FormGroup;
  areasOfInterestList = [Service.TECHNOLOGY_DEVELOPMENT.name,Service.TECHNOLOGY_REVIEWS.name,Service.CONSULTING.name];
  isSending: boolean = false;
  emailSent: boolean = false;
  showFormMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: [''],
      company: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)
      ]],
      subject: ['', Validators.required],
      message: ['',Validators.required],
      areasOfInterest: [[]]
    })
  }

  ngOnInit(): void {
    this.contactUsForm.valueChanges.subscribe(() => {
      if (this.contactUsForm.touched) {
        this.showFormMessage = false;
      }
    });
  }


  onCheckboxChange(event: any) {
    const interests = this.contactUsForm.get('areasOfInterest')!.value as string[];

    if (event.target.checked) {
      interests.push(event.target.value);
    } else {
      const index = interests.indexOf(event.target.value);
      if (index >= 0) interests.splice(index, 1);
    }

    this.contactUsForm.get('areasOfInterest')!.setValue([...interests]);
    this.contactUsForm.get('areasOfInterest')!.markAsTouched();
  }


  handleContactFormSubmit() {
    this.contactUsForm.markAllAsTouched()
    if(this.contactUsForm.invalid){
      return;
    }
    this.isSending = true;
    const formData = this.contactUsForm.value;

    emailjs.send(
      this.emailJsConfig.serviceId,
      this.emailJsConfig.contactUsTemplateId,
      formData,
      this.emailJsConfig.publicKey,
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        // alert('Message sent successfully!');
        this.isSending = false;
        this.showFormMessage = true;
        this.emailSent = true;

        this.contactUsForm.reset();
      },
      (error) => {
        console.error('FAILED...', error);
        // alert('Failed to send message.');
        this.isSending = false;
        this.emailSent = false;
        this.showFormMessage = true;
      }
    );
  }
}
