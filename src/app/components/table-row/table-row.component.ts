import { Component, Input, EventEmitter, Output } from '@angular/core';
import {PilotType} from "../../types/pilotType";

@Component({
  selector: 'table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {

  @Input() pilot!: PilotType;
  @Output() edit = new EventEmitter<number>();

  goToUserDetail() {
    this.edit.emit(this.pilot.id);
  }
}
