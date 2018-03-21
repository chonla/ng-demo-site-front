import { Component, OnInit, Input } from '@angular/core';
import { FirebaseResourceDirective } from '../../directives/firebase-resource.directive';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postsData;

  constructor() { }

  ngOnInit() {
  }

}
