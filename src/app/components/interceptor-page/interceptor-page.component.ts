import { Component, OnInit } from '@angular/core';
import { InterService } from '../../services/interceptor/inter.service';

@Component({
  selector: 'interceptor-page',
  templateUrl: './interceptor-page.component.html',
  styleUrls: ['./interceptor-page.component.scss']
})
export class InterceptorPageComponent implements OnInit {
  //init variable
  users: any[] = [];

  constructor(private interService: InterService) {}

  ngOnInit() {
    this.interService.getUsers().subscribe(data => {
      //set users variable
      this.users = data;
    });
  }
}
