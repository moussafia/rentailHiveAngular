import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from '../../../services/equipment.service';
import { IEquipmentList } from '../../../model/iequipment-list';
import { Subscription } from 'rxjs';
import { DataState, IEquipementDataState } from '../../../state/equipment';
import { EquipmentServiceDriver } from '../../../state/equipment.driver.service';

@Component({
  selector: 'app-modal-add-equipment',
  templateUrl: './modal-add-equipment.component.html',
  styleUrl: './modal-add-equipment.component.css'
})
export class ModalAddEquipmentComponent implements OnInit{
  equipmentFormGroup?: FormGroup;
  private submitForm: boolean = false;
  sub?:Subscription;
  errorMessage?:IEquipementDataState<IEquipmentList>;
  @Output() equipmentList : EventEmitter<IEquipementDataState<IEquipmentList>> = new EventEmitter();
  readonly dataState = DataState;
  constructor(private equipmentService: EquipmentService,
    private formBuilder: FormBuilder,
    private equipmentServiceDriver: EquipmentServiceDriver){}
    ngOnInit(): void {
        this.equipmentFormGroup = this.formBuilder.group({
          name: ["", Validators.required],
          quantity: [0, [Validators.required, Validators.min(0)]],
          pricePerDay: [0, [Validators.required, Validators.min(0)]],
          manufacturerName: ["", Validators.required],
          categoryId: [1, Validators.required]
        });
    }
    onSubmitForm(){
      this.submitForm = true;
      if(this.equipmentFormGroup?.invalid) return;
      this.sub = this.equipmentService.post(this.equipmentFormGroup?.value).subscribe({
        next: result =>{
          if(result.body) 
            this.equipmentServiceDriver.publishEvent({dataState: this.dataState.LOADED, data: result.body});
        },
        error: err =>{
          this.equipmentServiceDriver.publishEvent({dataState: this.dataState.ERROR, error: err.error});
        }
      })
    }

}
