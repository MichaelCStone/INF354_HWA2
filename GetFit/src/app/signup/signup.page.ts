import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthorisationService } from '../services/authorisation.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage {
  signupForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthorisationService,
    private navCtrl: NavController
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signup() 
  {
    if (this.signupForm.valid) 
      {
      const { email, password } = this.signupForm.value;

      if (this.authService.signup(email, password)) 
      {
        alert("Sign Up successful!");

        const active = document.activeElement as HTMLElement;
        if (active) 
        {
          active.blur();
        }

        // this.navCtrl.navigateForward("/home");
        this.navCtrl.navigateRoot('tabs');
      }
      else 
      {
        alert("User already exists");
      }
    }
  }

}
