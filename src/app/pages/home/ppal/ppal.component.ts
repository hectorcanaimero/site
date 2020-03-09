import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-ppal',
  templateUrl: './ppal.component.html',
  styleUrls: ['./ppal.component.scss']
})
export class PpalComponent implements OnInit, OnDestroy {

  json: any = [];
  jsonSubscription: Subscription;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.jsonSubscription = this.api.getJson('data')
    .subscribe(
      resp => (this.json = resp[0].home),
      erro => console.log(erro)
    );
  }

  ngOnDestroy(): void{
    if(this.jsonSubscription) { this.jsonSubscription.unsubscribe() }
  }

}
