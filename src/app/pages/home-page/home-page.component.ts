import { Component, OnInit } from '@angular/core';
import { ToysService } from 'src/app/services/toys.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public toys = []
  constructor(private ts: ToysService) { }

  ngOnInit(): void {
    this.ts.getToys().subscribe(toys => {
      this.toys = toys
    })
  }

}
