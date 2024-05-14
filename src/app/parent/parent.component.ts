import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private apiServiceCall: CommonServiceService) { }

  formGroupTest = new FormGroup({
    api_key: new FormControl(''),
    language_code: new FormControl(''),
    device_id: new FormControl(''),
    device_token: new FormControl(''),
    device_type: new FormControl(''),
    mst_product_id: new FormControl(''),
    branch_id: new FormControl(''),
    price_type: new FormControl(''),
    dishtype_id: new FormControl(''),
    is_for_repeat_set_combo: new FormControl((''))
  });

  ngOnInit(): void {
    const dummy : any= {
      "api_key": "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
      "language_code": "en",
      "device_id": "2CEC3804-46E6-4803-8982-88CFFCD402DD",
      "device_token": "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
      "device_type": "android",
      "mst_product_id": 41199,
      "branch_id": 4,
      "price_type": 1,
      "dishtype_id": "0",
      "is_for_repeat_set_combo": 0

    }
    this.formGroupTest.patchValue(dummy);
  }

  submit() {
    let apiValue = this.formGroupTest.value;
    console.log({ apiValue });
    if (this.formGroupTest) {
      this.apiServiceCall.postApi(apiValue).subscribe({
        next: (data: any) => {
          console.warn("data ", data);
          this.apiServiceCall.apiDataFromParent$.next(data?.data);
        }, error(err) {
          console.log("error in api", err);

        },
      })
    } else {

    }

  }

  

}
