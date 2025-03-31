import { Component, Input, EventEmitter, Output } from '@angular/core';
//import TYPE
import {PilotType} from "../../types/pilotType";

@Component({
  selector: 'table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {
  // props parent -> child
  @Input() pilot!: PilotType;
  // event child -> parent (here event emit)
  @Output() edit = new EventEmitter<number>();

  goToUserDetail() {
    this.edit.emit(this.pilot.id);
  }
}
