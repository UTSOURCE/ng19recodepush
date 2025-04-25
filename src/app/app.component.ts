import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { codePush } from 'cap-codepush';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
    codePush.sync().then(() => console.log('CodePush sync complete'));
  }
}
