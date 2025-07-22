import { Injectable } from '@angular/core';

export interface Workout {
  id: number;
  title: string;
  description: string;
  exercises: string[];
  duration: string;
  equipment: string;
}

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {

  private workouts: Workout[] = [
    {
      id: 1,
      title: 'Weight Loss Program',
      description: 'A high-intensity workout for burning fat.',
      exercises: ['Jump Rope', 'Burpees', 'Squats'],
      duration: '45 mins',
      equipment: 'Jump Rope'
    },
    {
      id: 2,
      title: 'Muscle Gain Program',
      description: 'A heavy-lifting workout for building muscle.',
      exercises: ['Bench Press', 'Dead Lift', 'Bicep Curls', 'Leg Press', 'Squats'],
      duration: '1h 30mins',
      equipment: 'Dumbbells, weights'
    },
    {
      id: 3,
      title: 'Core Strength Program',
      description: 'A workout focused on strengthening the core.',
      exercises: ['Plank', 'Russian Twists', 'Leg Raises', 'Mountain Climbers'],
      duration: '30 mins',
      equipment: 'Yoga Mat'
    },
    {
      id: 4,
      title: 'Full Body Circuit',
      description: 'A dynamic circuit that targets the entire body.',
      exercises: ['Push-Ups', 'Lunges', 'Jumping Jacks', 'Plank Jacks'],
      duration: '40 mins',
      equipment: 'Bodyweight Only'
    },
    {
      id: 5,
      title: 'Yoga Flow',
      description: 'A calming yoga flow for flexibility and balance.',
      exercises: ['Sun Salutations', 'Warrior Pose', 'Tree Pose', 'Downward Dog'],
      duration: '1 hour',
      equipment: 'Yoga Mat'
    },
    {
      id: 6,
      title: 'HIIT Blast',
      description: 'High-Intensity Interval Training for max fat burn.',
      exercises: ['Jump Squats', 'High Knees', 'Push-Ups', 'Burpees'],
      duration: '25 mins',
      equipment: 'Mat, Water Bottle'
    },
    {
      id: 7,
      title: 'Upper Body Strength',
      description: 'Target your arms, chest, and shoulders.',
      exercises: ['Pull-Ups', 'Shoulder Press', 'Tricep Dips', 'Chest Fly'],
      duration: '1 hour',
      equipment: 'Dumbbells, Pull-Up Bar'
    },
    {
      id: 8,
      title: 'Lower Body Builder',
      description: 'A muscle-focused program for legs and glutes.',
      exercises: ['Deadlifts', 'Leg Press', 'Hip Thrusts', 'Calf Raises'],
      duration: '1h 15mins',
      equipment: 'Barbell, Bench'
    },
    {
      id: 9,
      title: 'Cardio Burner',
      description: 'A steady-state cardio workout for endurance.',
      exercises: ['Jogging', 'Cycling', 'Stair Climbing'],
      duration: '1 hour',
      equipment: 'Treadmill or Stationary Bike'
    },
    {
      id: 10,
      title: 'Mobility & Stretching',
      description: 'Improve range of motion and reduce tightness.',
      exercises: ['Hamstring Stretch', 'Hip Openers', 'Arm Circles', 'Foam Rolling'],
      duration: '30 mins',
      equipment: 'Foam Roller, Mat'
    },
    {
      id: 11,
      title: 'Boxing Fitness',
      description: 'A high-energy boxing routine for agility and power.',
      exercises: ['Shadow Boxing', 'Jab-Cross Drill', 'Footwork Drills', 'Heavy Bag Punches'],
      duration: '45 mins',
      equipment: 'Boxing Gloves, Punching Bag'
    },
    {
      id: 12,
      title: 'Beginner Bodyweight',
      description: 'Intro workout with zero equipment required.',
      exercises: ['Wall Sit', 'Incline Push-Ups', 'Step-Ups', 'Air Squats'],
      duration: '20 mins',
      equipment: 'Bodyweight Only'
    }
  ];

  getWorkouts(): Workout[] 
  {
    return this.workouts;
  }

  getWorkout(id: number): Workout | undefined 
  {
    return this.workouts.find(w => w.id === id);
  }
}
