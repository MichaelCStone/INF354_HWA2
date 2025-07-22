import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { WorkoutService, Workout } from '../services/workout.service';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './workout-list.page.html',
  styleUrls: ['./workout-list.page.scss'],
})

export class WorkoutListPage {
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService, private router: Router) 
  {
    this.workouts = this.workoutService.getWorkouts();
  }

  openDetails(id: number) 
  {
    const active = document.activeElement as HTMLElement;
    if (active) 
    {
      active.blur();
    }

    this.router.navigate(['/tabs/workout-details', id]);
  }
}

