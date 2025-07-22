import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService, Workout } from '../services/workout.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-workout-details',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './workout-details.page.html',
  styleUrls: ['./workout-details.page.scss'],
})

export class WorkoutDetailsPage implements OnInit 
{
  workout: Workout | undefined;
  private storageReady = false;
  completed: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit() 
  {
    await this.storage.create();
    this.storageReady = true;

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workout = this.workoutService.getWorkout(id);
  }

  async ionViewWillEnter() {
    // Check if the workout is completed every time the page is visited
    if (this.workout) {
      const completed = (await this.storage.get('completedWorkouts')) || [];
      this.completed = completed.includes(this.workout.id);
    }
  }

  async markCompleted() 
  {
    if (!this.workout || !this.storageReady) return;

    const completed = (await this.storage.get('completedWorkouts')) || [];
    if (!completed.includes(this.workout.id)) {
      completed.push(this.workout.id);
      await this.storage.set('completedWorkouts', completed);
      this.completed = true;  // Set the completed flag
    }

    // alert('Workout marked as completed!');
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

  async goProgress() 
  {
    const active = document.activeElement as HTMLElement;
    if (active) 
    {
      active.blur();
    }

    await this.router.navigate(['/tabs/progress']);
  }
}