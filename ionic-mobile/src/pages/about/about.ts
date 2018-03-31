import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { File } from '@ionic-native/file';

import { Camera, Entry } from 'ionic-native';
import firebase from 'firebase';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Foto } from '../../entity/Foto';


declare var window: any

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  
}
