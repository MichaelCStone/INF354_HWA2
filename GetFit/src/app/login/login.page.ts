import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthorisationService } from '../services/authorisation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthorisationService,
    private navCtrl: NavController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  goToSignup()
  {
    const active = document.activeElement as HTMLElement;
    if (active) 
    {
      active.blur();
    }

    this.navCtrl.navigateForward("/signup")
  }

  login() 
  {
    if (this.loginForm.valid) 
    {
      const { email, password } = this.loginForm.value;

      if (this.authService.login(email, password)) 
      {
        alert('Login successful!');

        const active = document.activeElement as HTMLElement;
        if (active) 
        {
          active.blur();
        }

        // this.navCtrl.navigateForward('/home');
        this.navCtrl.navigateRoot('/tabs');
      } 
      else 
      {
        alert('Invalid credentials');
      }
    }
  }
}
