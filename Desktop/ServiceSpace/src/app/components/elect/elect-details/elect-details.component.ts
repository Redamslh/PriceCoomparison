import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { routerTransition } from 'src/app/services/config/config.service';
import { Elect } from 'src/app/services/elect/elect';
import { ElectService } from 'src/app/services/elect/elect.service';

@Component({
  selector: 'app-elect-details',
  templateUrl: './elect-details.component.html',
  styleUrls: ['./elect-details.component.scss'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})
export class ElectDetailsComponent implements OnInit {
  elect:Elect;
  index: any;
	electDetail: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private electserv: ElectService,private toastr: ToastrService) { 

      this.route.params.subscribe(params => {
        this.index = params['id'];
        if (this.index && this.index != null && this.index !== undefined) {
          this.getElectDetail(this.index);
          console.log(this.index)
        }
      });

    } 
	ngOnInit() {
  }
	// Get student details
	getElectDetail(index: number) {
		this.electserv.getElectById(index)
		.subscribe(data => {
      this.toastr.success('Success');
      this.elect = data;
		}, error => {
      this.toastr.error('Due To Server Maybe ! Please Try Again','Failed');
    });
	}
}
