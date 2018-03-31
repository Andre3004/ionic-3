import { Observable } from 'rxjs/Observable';
import { Foto } from './../../entity/Foto';
import { Injectable, Input } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ToastController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';
import firebase from 'firebase';


@Injectable()
export class DataProvider 
{

  /**
   * 
   */
  public url = 'http://192.168.25.236:8080/foto/';

  /**
   * 
   */
  headers: Headers;

  /**
   * 
   */
  captureDataUrl: string;

  /**
   * 
   */
  @Input('useURI') useURI: Boolean = true;

  constructor(public http: Http, 
              private toastCtrl: ToastController,
              private alertCtrl: AlertController) 
  { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.alertCtrl = alertCtrl;
  }
 
  public insertFoto(foto: Foto): Observable<Response>
  {
    return this.http.post(this.url + 'insertFoto', JSON.stringify(foto), { headers: this.headers });
  }

  public listAllFotos(): Observable<Foto[]>
  {
    return this.http.get(this.url + 'listAllFotos').map(res => res.json());
  }

  public updateFile(file: FormData, id: Number): Observable<Response>
  {
    return this.http.post(this.url + 'uploadFile/' + id, file);
  }
  



  ////////FRONT-END///////////////////
  public toast(mensagem: string)
  {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000
    });
    toast.present();
  }

}
