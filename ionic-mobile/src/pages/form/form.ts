import { Component, OnInit, Input } from "@angular/core";
import { Foto } from "../../entity/Foto";
import { Loading, NavController, AlertController, LoadingController, ToastController } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
import { Camera, CameraOptions } from 'ionic-native';
import firebase from 'firebase';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage implements OnInit {
  /**
   * 
   */
  public foto: Foto; 

  /**
   * 
   */
  private loading: Loading;

  /**
   * 
   */
  captureDataUrl: string;

  /**
   * 
   */
  @Input('useURI') useURI: Boolean = true;
   

  constructor(public navCtrl: NavController, 
              private dataProvider: DataProvider, 
              private alertCtrl: AlertController, 
              private toastCtrl: ToastController,
              private _loading: LoadingController
              ) 
  {
    this.foto = new Foto();
  }

  ngOnInit(): void
  {
    this.loading = this._loading.create({
      content: 'Inserindo foto. Aguarde...'
    })
  }

  public insertFoto(sourceType)
  {
    this.loading.present();
    this.upload() 
    this.dataProvider.insertFoto(this.foto).subscribe(result =>{
      this.loading.dismiss();
    }, (error: Error) =>{ 
      console.log('error ' +  error.name)
      console.log(error)
      this.loading.dismiss()
    })
  }


  selecionarFoto(sourceType){
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      sourceType: sourceType
    };

    Camera.getPicture(cameraOptions)
     .then((captureDataUrl) => {
       this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
    }, (err) => {
        
        console.log(err);
    });
  }  

upload() {
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    this.foto.arquivo = `${filename}.jpg`;

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot)=> {
    });
  }
  

}
