import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'ng-lht',
  templateUrl: 'lht.component.html'
})

export class LhtComponent {
  appName = 'Angular Test';
}
