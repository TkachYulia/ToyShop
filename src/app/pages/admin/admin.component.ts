import { Component, OnInit } from '@angular/core';
import { ToysService } from 'src/app/services/toys.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  upd: boolean = false
  toyList = []
  toy = {
    id: 0,
    name: '',
    image: '',
    description: '',
    price: '',
    category: '',
    cat: ''
  }
  constructor(private ts: ToysService) { }
  ngOnInit(): void { this.ts.getToys().subscribe(data => { this.toyList = data }) }

  onCreate() {
    if (this.upd) {
      this.ts.update(this.toy).subscribe()
    }
    else this.ts.create(this.toy).subscribe()
  }

  onUpd(id) {
    this.upd = true
    this.ts.getToyById(id).subscribe(
      data => {
        this.toy.name = data.name
        this.toy.id = data.id
        this.toy.category = data.category.name
        this.toy.description = data.description
        this.toy.price = data.price
        this.toy.image = data.imageURL
      })
  }
  onDel(id) { this.ts.delete(id).subscribe() }
}
