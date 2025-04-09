import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntrojsService } from '@ngx-intro';
@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ngx-intro';
  introService = inject(IntrojsService);

  ngOnInit() {
    this.introService.startTour([
      {
        element: '#step1',
        intro: 'Step 1',
        step: 0,
        title: 'First Step',
        position: 'floating',
        scrollTo: 'element',
      },
      {
        element: '#step2',
        intro: 'Step 2',
        step: 1,
        title: 'Second Step',
        position: 'floating',
        scrollTo: 'element',
      },
    ]);
  }
}
