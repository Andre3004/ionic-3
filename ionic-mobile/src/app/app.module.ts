import { FormPage } from './../pages/form/form';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { InicioPage } from '../pages/inicio/inicio';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Camera } from 'ionic-native';

import firebase from 'firebase';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';

var fireBaseConfig = {
  apiKey: "AIzaSyCXSCGBtnd8s6o9qD_1BP5peHFSir8wUWE",
  authDomain: "ionic-82283.firebaseapp.com",
  databaseURL: "https://ionic-82283.firebaseio.com",
  projectId: "ionic-82283",
  storageBucket: "ionic-82283.appspot.com",
  messagingSenderId: "535829109563"

};
firebase.initializeApp(fireBaseConfig);
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FormPage,
    InicioPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FormPage,
    InicioPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    InAppBrowser,
    Camera,
    FileTransfer,
    File
  ]
})
export class AppModule {}
