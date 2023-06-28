import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit(): void {
    this.router.navigateByUrl('/home');
  }

  title = 'nomadic-brian-website';

  constructor(private router: Router) {}
}
