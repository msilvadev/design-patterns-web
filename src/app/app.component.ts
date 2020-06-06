import { Component, OnInit } from '@angular/core';
import { ObserverPattern } from './patterns/behavioral/obsever-pattern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'design-patterns-web';

  ngOnInit(): void {
    const obseverPattern = new ObserverPattern();
    obseverPattern.execute('Matheus');
  }
}
