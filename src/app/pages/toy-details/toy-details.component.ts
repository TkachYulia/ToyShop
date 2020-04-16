import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToysService } from 'src/app/services/toys.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-toy-details',
  templateUrl: './toy-details.component.html',
  styleUrls: ['./toy-details.component.css']
})
export class ToyDetailsComponent implements OnInit {
  public toy
  public finder = this.route.snapshot.paramMap.get('id')
  constructor(private route: ActivatedRoute, private ts: ToysService, private us: UserServiceService) { }


  userData = {
    name: '',
    phone: ''
  }
  
  ngOnInit(): void {
    this.ts.get().subscribe(data => {
      this.toy = data.find(toy => toy.id == parseInt(this.finder) )
    })
  }

  onOrder(): void {
    console.log(this.userData)
    this.us.order(this.userData)
  }

}
