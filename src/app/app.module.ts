import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCL7oODDQei8sTXOyDElVAV5y5mucZIfbQ",
      authDomain: "fir-angular-auth-3c087.firebaseapp.com",
      projectId: "fir-angular-auth-3c087",
      storageBucket: "fir-angular-auth-3c087.appspot.com",
      messagingSenderId: "163154154487",
      appId: "1:163154154487:web:65474a5f1afc2d604dd4f2"})
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
