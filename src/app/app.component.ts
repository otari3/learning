import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showedNav: string = 'recipe';
  informationFromHeader(target: string) {
    this.showedNav = target;
  }
}
