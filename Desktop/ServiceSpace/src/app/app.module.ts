import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';
import { AppRoutingModule } from './app-routing.module';

import { ElectAddComponent } from './components/elect/elect-add/elect-add.component';
import { ElectListComponent } from './components/elect/elect-list/elect-list.component';
import { ElectService } from './services/elect/elect.service';
import { ElectDetailsComponent } from './components/elect/elect-details/elect-details.component';
import { PhoneAddComponent } from './components/phone/phone-add/phone-add.component';
import { PhoneListComponent } from './components/phone/phone-list/phone-list.component';
import { PhoneDetailComponent } from './components/phone/phone-detail/phone-detail.component';
import { PhoneService } from './services/phone/phone.service';


@NgModule({
	declarations: [
		AppComponent,
		PhoneListComponent,
		PhoneDetailComponent,
		PhoneAddComponent,
		LoginComponent,
		HomeComponent,
		FilterPipe,
		PhonePipe,
		HighlightStudentDirective,
		ElectAddComponent,
		ElectListComponent,
		ElectDetailsComponent,
		PhoneAddComponent,
		PhoneListComponent,
		PhoneDetailComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
		}),
		HttpClientModule
	],
	providers: [AuthService, UserService, PhoneService,ElectService,LoginComponent],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
