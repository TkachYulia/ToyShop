import { Component, OnInit } from '@angular/core';
import { ToysService } from 'src/app/services/toys.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  toy = {
      name: '',
      image: '',
      description: '',
      price: '',
      category: ''
  }
  
  constructor(private ts: ToysService) { }

  ngOnInit(): void {
  }

  onCreate() {
    console.log(this.toy)
    this.ts.create(this.toy)
  }

}
