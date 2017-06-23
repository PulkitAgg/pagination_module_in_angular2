import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     offset=500;
     limit=10;
     count = 1000;
  title = 'app works!';
  onPageChange(offset) {
      this.offset = offset;
   }
}
