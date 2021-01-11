import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { routerTransition } from 'src/app/services/config/config.service';
import { Elect } from 'src/app/services/elect/elect';
import { ElectService } from 'src/app/services/elect/elect.service';

@Component({
  selector: 'app-elect-list',
  templateUrl: './elect-list.component.html',
  styleUrls: ['./elect-list.component.scss'],
  animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})
export class ElectListComponent implements OnInit {

  ElecList: Observable<Elect[]>;
user : any ;
	constructor(private electserv: ElectService, private toastr: ToastrService) { }
	// Call student list function on page load
	ngOnInit() {
		this.getElecList();
	}

	// Get student list from services
	getElecList() {
		this.ElecList = this.electserv.getAllElect();
		
	}

	// Get student list success

	// Delete a student with its index
	deletelect(index: number) {
		const r = confirm('Are you sure?');
		if (r === true) {
		// get confirm box for confirmation
      this.electserv.delelect(index)
	  .subscribe(data => {
	console.log(index)
	this.toastr.success('Success','Bill Deleted Successfully');
	this.getElecList();
	  }, error => {
			this.toastr.error('Due To Server Maybe ! Please Try Again','Failed');
	  });;
	}
	}
}
