import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { routerTransition } from 'src/app/services/config/config.service';
import { Phone } from 'src/app/services/phone/phone';
import { PhoneService } from 'src/app/services/phone/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss'],
  animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})
export class PhoneListComponent implements OnInit {


  PhoneList: Observable<Phone[]>;
user : any ;
	constructor(private phoneserv: PhoneService, private toastr: ToastrService) { }
	// Call student list function on page load
	ngOnInit() {
		this.getPhoneList();
	}

	// Get student list from services
	getPhoneList() {
		this.PhoneList = this.phoneserv.getAllPhone();
	}

	// Get student list success

	// Delete a student with its index
	delphone(index: number) {
		const r = confirm('Are you sure?');
		if (r === true) {
		// get confirm box for confirmation
      this.phoneserv.delphone(index)
	  .subscribe(data => {
	console.log(index)
	this.toastr.success('Success','Bill Deleted Successfully');
	this.getPhoneList();
	  }, error => {
			this.toastr.error('Due To Server Maybe ! Please Try Again','Failed');
	  });;
	}
	}

}
