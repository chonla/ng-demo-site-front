import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.css']
})
export class ReadPageComponent implements OnInit {

  private doc$: Subscription;
  public doc;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');

    const docObservable = this.db.collection('posts', ref => ref.where('slug', '==', title)).valueChanges();
    this.doc$ = docObservable.subscribe(doc => {
      this.doc = doc[0];
    });
  }

  ngOnDestroy() {
    this.doc$.unsubscribe();
  }

}
