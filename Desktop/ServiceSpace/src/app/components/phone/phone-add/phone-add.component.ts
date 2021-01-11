import { Component, OnInit } from '@angular/core';
import { Elect } from 'src/app/services/elect/elect';
import { routerTransition } from '../../../services/config/config.service';
import { ValidationService } from '../../../services/config/config.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { PhoneService } from 'src/app/services/phone/phone.service';
import { Phone } from 'src/app/services/phone/phone';

@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.scss'],
  animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class PhoneAddComponent implements OnInit {
  phonedetail: Phone;
  phone: Phone = new Phone();
  submitted = false;
  phoneAddForm:FormGroup ;
  phoneUpForm:FormGroup ;
index : any ;
resp : any ;

  constructor(private phoneServ: PhoneService,
    private router: Router,private formBuilder: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService)  {

      this.route.params.subscribe(params => {
        this.index = params['id'];
        // check if ID exists in route & call update or add methods accordingly
        if (this.index && this.index !== null && this.index !== undefined) {
          this.getPhoneDetails(this.index);
        } else {
          this.createForm(null);
        }
      });
     }

    
  ngOnInit() {
  }


  getPhoneDetails(index: number) {
		this.phoneServ.getPhoneById(index)
		.subscribe(data => {
      this.phonedetail = data;
      this.createForm(this.phonedetail);
      this.toastr.success('Success');
		}, error => {
      console.log(error)
      this.toastr.error('Due To Server Maybe ! Please Try Again','Failed');
    });
	}
  newPhone(): void {
    this.submitted = false;
    this.phone = new Phone();
  }

  save() {
    if (this.index && this.index !== null && this.index !== undefined) {
			this.phoneAddForm.value.id = this.index;
		} else {
			this.index = null;
		}
    this.phoneServ.createPhone(this.phone)
      .subscribe(responseStatus => {
        console.log(responseStatus)
        this.toastr.success('Bill Updated Successfully','Success');
				this.router.navigate(['/electList']);}
        , error => {console.log(error)
          this.toastr.error('Due To Server Maybe ! Please Try Again','Failed');

        });
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  UpPhone(){
    this.phoneServ.updatePhone(this.index,this.phoneUpForm.value).subscribe(responseStatus => {
      console.log(responseStatus)
      console.log()
      this.toastr.success('Bill Updated Successfully','Success');
      this.router.navigate(['/electList'])
      }
      , error => {console.log(error)
        this.toastr.error('Due To Server Maybe ! Please Try Again','Failed');

      });
  }  

  gotoList() {
    //this.router.navigate(['/employees']);
  }
  createForm(data) {
		if (data === null) {
			this.phoneAddForm = this.formBuilder.group({
        num: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				type: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				company: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
			});
    }
    else {
      console.log(data.service);
			this.phoneUpForm = this.formBuilder.group({
				num: [data.num, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				type: [data.type+"", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				company: [data.company+"",[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
			});
		}
	}
}
