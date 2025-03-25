import { Component, Input, EventEmitter, Output } from '@angular/core';
import {UserType} from "../types/userType";

@Component({
  selector: 'table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {

  @Input() user!: UserType;
  @Output() edit = new EventEmitter<number>();

  goToUserDetail() {
    this.edit.emit(this.user.id);
  }
}
