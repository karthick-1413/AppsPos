import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private apiServiceCall: CommonServiceService, private fb: FormBuilder, private cdr : ChangeDetectorRef) { }
  apiDataFromParent: any = null;

  headervalues: string[] = [];

  myForm !: FormGroup;

  apiData: any;

  ngOnInit(): void {

    this.myForm = this.fb.group({
      mst_cat_id: '',
      mst_cat_code: '',
      mst_cat_name: '',
      side_cat_count: '',
      side_cat_max_count: '',
      is_required: '',
      per_qty: '',
      per_qty_max: '',
      is_pro_qty_type: '',
      is_for_repeat_set_combo: '',
      mst_product_repeat_group_no_of_times: '',

      product_details: this.fb.array([
        {
          mst_product_id: '',
          mst_product_code: '',
          mst_product_name: '',
          mst_cat_id: '',
          price_type: '',
          mst_cat_discount: '',
          mst_product_default_price: '',
          mst_product_dish_ids: '',
          sides_pro_count: '',
          is_sus_product: '',
          mst_product_modifier_error_msg: '',
          fix_ptype_id: '',
          mst_product_image: '',
          mst_product_image_web: '',
          subitem_type: '',
          is_listing_type: '',
          product_qty: '',
          isCheckboxCheck: '',

          item_price_details: this.fb.group({
            mst_cat_discount: '',
            sub_price: '',
            sub_promotional_price: '',
            sub_price_discount_per: '',
            sub_price_discount_fix: '',
            final_price: '',
            price_current_taken_type: '',
            price_id: ''
          }),

          dish_price_details: this.fb.array([
            {
              "dish_id": '',
              "dish_name": "Medium",
              "dish_abb": "Medium",
              "dish_price": {
                "mst_cat_discount": '',
                "sub_price": '',
                "sub_promotional_price": '',
                "sub_price_discount_per": '',
                "sub_price_discount_fix": '',
                "final_price": '',
                "price_current_taken_type": "Com",
                "price_id": "77"
              },
              "is_default": "1"
            }
          ]),

          modifier_details: this.fb.array([
            {
              "modifier_id": "",
              "modifier_name": "",
              "modifier_abb": "",
              "modifier_need_printer": "",
              "modifier_type": "",
              "sub_product_modifers_id": "",
              "modifier_options": [
                {
                  "sub_option_id": '',
                  "modifier_options_id": '',
                  "modifier_options_name": "",
                  "modifier_options_abb": "",
                  "modifier_options_default": '',
                  "modifier_options_price": '',
                  "modifier_options_printer": "",
                  "modifier_options_type": ""
                }
              ]
            }
          ]),

          set_item_details: this.fb.array([]),

          suspend_details: this.fb.group({
            is_suspend_type: null,
            is_normal_supend: null,
            is_promo_suspend: null
          }),

          special_icon_details: this.fb.array([])


        }
      ]),

    });




    this.apiServiceCall.apiDataFromParent$.subscribe({
      next: (data: any) => {
        let rawData = data;
        this.apiData = {...data};
        console.log("apiData", this.apiData);
        this.myForm.patchValue(rawData.details);
        // console.log("rawData after patch", this.myForm);
        this.cdr.detectChanges();
      }
    });
  }

   selectedObjects: any[] = [];


  submit() {
    this.selectedObjects =[];
    console.log('full save data', this.apiData);
    let selectedObjects: any[] = [];
    (this.apiData.details as any[]).forEach((x)=>{
      if (x && x.product_details) {
        this.selectedObjects.push(...(x.product_details as any[]).filter(y => y.isCheckboxCheck === true));
      }
    })
    console.log('Selected Checkbox ',this.selectedObjects );
  }

  get product_details() : FormArray {
    // console.log("formarray value triggers ",this.myForm.get("product_details")?.value);
    
    return this.myForm.get("product_details") as FormArray;
  }

}
