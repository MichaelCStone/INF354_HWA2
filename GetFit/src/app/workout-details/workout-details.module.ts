import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutDetailsPageRoutingModule } from './workout-details-routing.module';
import { WorkoutDetailsPage } from './workout-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutDetailsPageRoutingModule, WorkoutDetailsPage
  ],
  declarations: []
})
export class WorkoutDetailsPageModule {}
