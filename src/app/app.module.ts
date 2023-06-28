import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MainRoutingModule } from './main-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
//import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './work/project/project.component';
import { HomeColtsComponent } from './home-colts/home-colts.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { TeamComponent } from './team/team.component';
import { OffenseComponent } from './team/offense/offense.component';
import { PlayerOffenseComponent } from './player/offense/offense.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { DefenseComponent } from './team/defense/defense.component';
import { PlayerDefenseComponent } from './player/defense/defense.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { SkillComponent } from './work/skill/skill.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ProjectComponent,
    HomeColtsComponent,
    PlayerListComponent,
    //DialogBodyComponent,
    TeamComponent,
    OffenseComponent,
    PlayerOffenseComponent,
    DefenseComponent,
    PlayerDefenseComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MainRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    NgImageSliderModule,
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
