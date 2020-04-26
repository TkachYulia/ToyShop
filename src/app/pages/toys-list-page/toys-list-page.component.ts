import { Component, OnInit } from '@angular/core';
import { ToysService } from 'src/app/services/toys.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toys-list-page',
  templateUrl: './toys-list-page.component.html',
  styleUrls: ['./toys-list-page.component.css']
})
export class ToysListPageComponent implements OnInit {
  public toys = []
  constructor(private ts: ToysService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let path = param.path.toLowerCase()
      this.ts.getSortedToys(path).subscribe(data => {
        this.toys = data
      })
    })
  }

}
