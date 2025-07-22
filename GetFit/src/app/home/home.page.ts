import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
})
export class HomePage {

  constructor(private navCtrl: NavController) { }

  goToWorkouts() 
  {
    const active = document.activeElement as HTMLElement;
    if (active) 
    {
      active.blur();
    }

    this.navCtrl.navigateForward("/tabs/workout-list")
  }

  goToProgress() 
  {
    const active = document.activeElement as HTMLElement;
    if (active) 
    {
      active.blur();
    }

    this.navCtrl.navigateForward("/tabs/progress")
  }

  logout()
  {
    const active = document.activeElement as HTMLElement;
    if (active) 
    {
      active.blur();
    }

    this.navCtrl.navigateForward("/login")
  }
}
