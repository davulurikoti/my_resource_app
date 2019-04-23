import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [ MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatTabsModule,
            MatCardModule,
           MatToolbarModule,
           MatProgressBarModule,
           MatChipsModule,
           MatListModule,
           MatSidenavModule,
           MatTableModule,
           MatSortModule,
           MatDialogModule,
           MatIconModule,
           MatDividerModule,
           MatSelectModule,
           MatBadgeModule,
           MatSnackBarModule],
  exports: [ MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatTabsModule,
            MatCardModule,
           MatToolbarModule,
           MatProgressBarModule,
           MatChipsModule,
           MatListModule,
           MatSidenavModule,
           MatTableModule,
           MatSortModule,
           MatDialogModule,
           MatIconModule,
           MatDividerModule,
           MatSelectModule,
           MatBadgeModule,
           MatSnackBarModule]
})

export class MaterialModule{}