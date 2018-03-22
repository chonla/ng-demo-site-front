import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from '@firebase/util';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit, OnDestroy {
  private doc$: Subscription;
  public doc;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const docObservable = this.db.collection('posts').doc(id).valueChanges();
    this.doc$ = docObservable.subscribe(doc => {
      this.doc = doc;
    });
  }

  ngOnDestroy() {
    this.doc$.unsubscribe();
  }

}
