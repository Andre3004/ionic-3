import { Component, Input } from '@angular/core';
import firebase from 'firebase';
import { Foto } from '../../entity/Foto';
import { DataProvider } from '../../providers/data/data';
import { Loading, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  url: any;

  firestore = firebase.storage().ref();

  fotos: Foto[];

  /**
   * 
   */
  private loading: Loading;


  constructor(private data: DataProvider,
              private _loading: LoadingController) {
    
    this.loading = this._loading.create({
      content: 'Buscando fotos no servidor. Aguarde...'
    })

    this.loading.present();
    this.data.listAllFotos().subscribe(fotos => {
      this.fotos = fotos;
      this.baixarArquivo(fotos);
    }, err => console.log(err))
  }

  baixarArquivo(fotos: Foto[]) {
    if (fotos && fotos.length > 0) {
      fotos.forEach(foto => {
        let caminho = this.firestore.child('images/' + foto.arquivo);
        caminho.getDownloadURL().then(url => {
          foto.path = url;
        }, (err) => {
          console.log('Error', err);
        });
      })

      
    }
    this.loading.dismiss();
  }
}