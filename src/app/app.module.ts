import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FirebaseResourceDirective } from './directives/firebase-resource.directive';
import { PostRowComponent } from './components/post-row/post-row.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RestoreHtmlPipe } from './pipes/restore-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    FirebaseResourceDirective,
    PostRowComponent,
    OrderByPipe,
    RestoreHtmlPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
