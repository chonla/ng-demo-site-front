import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {

  public postsData;

  constructor() { }

  ngOnInit() {
  }

  dataReceiver($event) {
    this.postsData = $event;
  }
}