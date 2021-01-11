import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { routerTransition } from 'src/app/services/config/config.service';
import { Elect } from 'src/app/services/elect/elect';
import { ElectService } from 'src/app/services/elect/elect.service';
import { Phone } from 'src/app/services/phone/phone';
import { PhoneService } from 'src/app/services/phone/phone.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss'],
  animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class PhoneDetailComponent implements OnInit {
  phone:Phone;
  index: any;
	phoneDetail: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private phoneserve: PhoneService,private toastr: ToastrService) { 

      this.route.params.subscribe(params => {
        this.index = params['id'];
        if (this.index && this.index != null && this.index !== undefined) {
          this.getPhoneDetail(this.index);
          console.log(this.index)
        }
      });

    } 
	ngOnInit() {
  }
	// Get student details
	getPhoneDetail(index: number) {
		this.phoneserve.getPhoneById(index)
		.subscribe(data => {
      this.toastr.success('Success');
      this.phone = data;
		}, error => {
      this.toastr.error('Due To Server Maybe ! Please Try Again','Failed');
    });
	}
}

