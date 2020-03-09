import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit, OnDestroy {

  json: any = [];
  jsonSubscription: Subscription;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.jsonSubscription = this.api.getJson('data')
    .subscribe(
      resp => (this.json = resp[0].menu),
      erro => console.log(erro)
    );
  }

  ngOnDestroy(): void{
    if(this.jsonSubscription) { this.jsonSubscription.unsubscribe() }
  }

}
