import { Component, OnInit, OnDestroy } from '@angular/core';
import { slideInOutAnimation } from 'src/app/shared/animations';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': ''}
})
export class SobreComponent implements OnInit, OnDestroy {

  json: any = [];
  jsonSubscription: Subscription;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.jsonSubscription = this.api.getJson('data')
    .subscribe(
      resp => (this.json = resp[0].sobre),
      erro => console.log(erro)
    );
  }

  ngOnDestroy(): void{
    if(this.jsonSubscription) { this.jsonSubscription.unsubscribe() }
  }

}
