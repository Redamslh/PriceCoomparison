/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

 import { Component, OnInit } from '@angular/core';
 import { RouterModule, Routes ,Router} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Components

 // Services
 import { routerTransition } from '../../services/config/config.service';
import { ElectAddComponent } from '../elect/elect-add/elect-add.component';
import { ElectListComponent } from '../elect/elect-list/elect-list.component';
import { ElectDetailsComponent } from '../elect/elect-details/elect-details.component';
import { PhoneListComponent } from '../phone/phone-list/phone-list.component';
import { PhoneAddComponent } from '../phone/phone-add/phone-add.component';
import { PhoneDetailComponent } from '../phone/phone-detail/phone-detail.component';

 @Component({
 	selector: 'app-home',
 	templateUrl: './home.component.html',
 	styleUrls: ['./home.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })


 export class HomeComponent implements OnInit {
 	active:string;
 	constructor(private router: Router,private toastr: ToastrService) {
 		// Detect route changes for active sidebar menu
 		this.router.events.subscribe((val) => {
 			this.routeChanged(val);
 		});
 	}

 	ngOnInit() {
 	}

 	// Detect route changes for active sidebar menu
 	routeChanged(val){
 		this.active = val.url;
 	}

 	// Logout User
 	logOut(){
 		this.toastr.success('Success', "Logged Out Successfully");
 		localStorage.removeItem('userData');
 		this.router.navigate(['/login']);
 	}
 }


 // Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
 {
 	path: '',
 	component: PhoneListComponent
 },
 {
 	path: 'add',
 	component: PhoneAddComponent
 },
 {
	path: 'electList',
	component: ElectListComponent
},

 {
	path: 'addElect',
	component: ElectAddComponent
},
{
	path: 'upElect/:id',
	component: ElectAddComponent
},

 {
 	path: 'update/:id',
 	component: PhoneAddComponent
 },
 {
 	path: 'detail/:id',
 	component: PhoneDetailComponent
 },

 {
	path: 'detailElect/:id',
	component: ElectDetailsComponent
}
 ];

