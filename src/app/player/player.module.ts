import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PlayerOffenseComponent } from './offense/offense.component';
import { PlayerDefenseComponent } from './defense/defense.component';
import { CdkColumnDef } from '@angular/cdk/table';

@NgModule({
  imports: [CommonModule, MatTableModule, MatSort],
  declarations: [
    PlayerListComponent,
    PlayerOffenseComponent,
    PlayerDefenseComponent,
  ],
  providers: [CdkColumnDef],
  exports: [],
})
export class PlayerModule {}
