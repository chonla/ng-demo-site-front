import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FirebaseResourceDirective } from './directives/firebase-resource.directive';
import { PostRowComponent } from './components/post-row/post-row.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RestoreHtmlPipe } from './pipes/restore-html.pipe';
import { ExcerptPipe } from './pipes/excerpt.pipe';
import { PostListPageComponent } from './components/post-list-page/post-list-page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PostPageComponent } from './components/post-page/post-page.component';
import { ReadPageComponent } from './components/read-page/read-page.component';

const routes: Routes = [{
  path: '',
  component: PostListPageComponent
}, {
  path: 'post/:id',
  component: PostPageComponent
}, {
  path: 'read/:title',
  component: ReadPageComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    FirebaseResourceDirective,
    PostRowComponent,
    OrderByPipe,
    RestoreHtmlPipe,
    ExcerptPipe,
    PostListPageComponent,
    PostPageComponent,
    ReadPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
