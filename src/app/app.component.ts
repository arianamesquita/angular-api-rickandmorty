import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="display__container">
      <app-card></app-card>
    </div>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services';
}
