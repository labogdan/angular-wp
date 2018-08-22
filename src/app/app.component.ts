import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { WordpressService } from './wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
    console.log(this.posts$);
  }
}
