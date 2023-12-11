import { Component, Input } from '@angular/core';
import { IEquipmentList } from '../../../model/iequipment-list';

@Component({
  selector: 'app-equipment-cards',
  templateUrl: './equipment-cards.component.html',
  styleUrl: './equipment-cards.component.css'
})
export class EquipmentCardsComponent {
@Input() equipment?: IEquipmentList;
}
