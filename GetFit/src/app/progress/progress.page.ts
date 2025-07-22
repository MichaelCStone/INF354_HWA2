import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
import { WorkoutService, Workout } from '../services/workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})

export class ProgressPage {
  completedWorkouts: Workout[] = [];

  constructor(
    private storage: Storage,
    private workoutService: WorkoutService,
    private router: Router
  ) {}

  async ionViewWillEnter() 
  {
    await this.loadCompletedWorkouts();
  }

  private async loadCompletedWorkouts() 
  {
    await this.storage.create();
    const completedIds: number[] = await this.storage.get('completedWorkouts') || [];
    this.completedWorkouts = completedIds
      .map(id => this.workoutService.getWorkout(id)!)
      .filter(Boolean);
  }

  async resetProgress() {
    await this.storage.remove('completedWorkouts');
    this.completedWorkouts = [];
  }

  goHome() 
  {
    const active = document.activeElement as HTMLElement;
    if (active) 
    {
      active.blur();
    }

    this.router.navigate(['/tabs/home']);
  }

  goWorkouts() 
  {
    const active = document.activeElement as HTMLElement;
    if (active) 
    {
      active.blur();
    }
    
    this.router.navigate(['/tabs/workout-list']);
  }
}
