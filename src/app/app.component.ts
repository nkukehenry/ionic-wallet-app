import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'speedometer' },
    { title: 'Reports', url: '/reports', icon: 'stats-chart' },
    { title: 'Payments', url: '/favs', icon: 'ticket' },
    { title: 'Savings', url: '/archs', icon: 'archive' },
    { title: 'Alerts', url: '/suspect', icon: 'warning' },
  ];

  public labels = ['Bills', 'TV payments', 'Transfers', 'Taxes'];
  
  constructor() {}
}
