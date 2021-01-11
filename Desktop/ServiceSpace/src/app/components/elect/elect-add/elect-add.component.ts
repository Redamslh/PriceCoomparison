import { Component, OnInit } from '@angular/core';
import { Elect } from 'src/app/services/elect/elect';
import { ElectService } from 'src/app/services/elect/elect.service';
import { routerTransition } from '../../../services/config/config.service';
import { ValidationService } from '../../../services/config/config.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-elect-add',
  templateUrl: './elect-add.component.html',
  styleUrls: ['./elect-add.component.scss'],
  animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class ElectAddComponent implements OnInit {
  electDetail: Elect;
  elect: Elect = new Elect();
  submitted = false;
  electAddForm:FormGroup ;
  electUpForm:FormGroup ;
index : any ;
resp : any ;

  constructor(private electServ: ElectService,
    private router: Router,private formBuilder: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService)  {

      this.route.params.subscribe(params => {
        this.index = params['id'];
        // check if ID exists in route & call update or add methods accordingly
        if (this.index && this.index !== null && this.index !== undefined) {
          this.getElectDetails(this.index);
        } else {
          this.createForm(null);
        }
      });
     }

    
  ngOnInit() {
  }


  getElectDetails(index: number) {
		this.electServ.getElectById(index)
		.subscribe(data => {
      this.electDetail = data;
      this.createForm(this.electDetail);
      this.toastr.success('Success');
		}, error => {
      console.log(error)
      this.toastr.error('Due To Server Maybe ! Please Try Again','Failed');
    });
	}
  newEmployee(): void {
    this.submitted = false;
    this.elect = new Elect();
  }

  save() {
    if (this.index && this.index !== null && this.index !== undefined) {
			this.electAddForm.value.id = this.index;
		} else {
			this.index = null;
		}
    this.electServ.createElect(this.elect)
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

  Update(){
    this.electServ.updateElect(this.index,this.electUpForm.value).subscribe(responseStatus => {
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
			this.electAddForm = this.formBuilder.group({
        service: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				nb_contrat: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				date: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
			});
    }
    else {
      console.log(data.service);
			this.electUpForm = this.formBuilder.group({
				service: [data.service, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				nbContrat: [data.nbContrat+"", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				date: [data.date+"",[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
			});
		}
	}
}
