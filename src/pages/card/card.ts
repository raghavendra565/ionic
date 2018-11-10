import { AuthService } from './../../providers/auth/auth.service';
import { RatingPage } from './../rating/rating';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { database } from 'firebase';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http, Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  data :any;
  card_number:any;
  x :any;
  card_size :any;
  availed_coffees :any;
  remaining_coffees : any;
  rate = false;
  time = true;
  rating_enable : boolean;
  rate_flag :any;
  rated = false;
  t2 : any = new Date();
  a = [];
  b = [];
  c : any;
  timediff : any;
  scannedCode :any;
  result :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,private alertCtrl: AlertController,
    private auth : AuthService,private http: Http) {
    this.data = navParams.get('data');
    console.log(this.data);
    this.rating_enable = this.data.rating_en;
    this.card_size = this.data.card_size;
    this.rate_flag = this.data.rating;
    console.log(this.card_size);
    this.availed_coffees = this.data.coffees;
    console.log(this.availed_coffees);
    this.t2 = new Date(this.data.punch_time);
    let i = 0;
    let j = 0;
    for(i=1;i<=this.availed_coffees;i++){
      this.a[i-1] = i;
    }
    //console.log(this.a);
    this.c = i;
    //console.log(this.c);
    this.remaining_coffees = this.card_size - this.availed_coffees-1;
    console.log(this.remaining_coffees);
    for(j=1; j<=this.remaining_coffees; j++){
      this.b[j-1] = j;
    }
  }
  
  //card_size  = this.data.card_size;
  punch_time :any;
  retailer: any;
  retailer_id: any;
  //image = new URL("assets/images/logo/coffeefinal.png");
  ionViewDidLoad() {
    let today :any = new Date();
    this.timediff = (today - this.t2)/(3600 * 1000);
  }
  rating(x: any){
    this.navCtrl.push(RatingPage, {data: this.data, x: x});
    this.rated = true;
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      //alert(this.scannedCode);
      let headers = new Headers();
      let access_token_cookie = localStorage.getItem('access_token_cookie')
      headers.append("Authorization" , `Bearer ${this.auth.getToken()}`);
      headers.append('access_token_cookie', access_token_cookie);
      headers.append("Content-Type", "application/json");
      const requestOptions  = new RequestOptions({ headers : headers });
      var url = "http://183.82.112.165:5000/api/coffee/v1/qrscan";
      var body = JSON.stringify({"qr_code":this.scannedCode});
      this.http.post(url, body ,requestOptions).subscribe(data => {
        
        this.result=data.json();
        console.log(this.result);
        if(this.result.card.free_next == true){
          alert("WoooHoooo!!!    You have unlocked a free coffee!!!");
        }
        else if(this.result.card.card_size == this.result.card.coffees + this.result.card.card_size){
          alert("WoooHoooo!!!  it's a free coffee!!!");
        }
        //alert(this.result.msg);
        console.log(this.result.card,"home ")
        this.navCtrl.push(CardPage, {data: this.result.card});
      
      }, error => {alert("something went wrong... it may be network problem");})
    }, (err) => {
        console.log('Error: ', err);
    });
  }
  starRating(){
    let prompt = this.alertCtrl.create({
      title: 'Rate',
      inputs: [{
          name: 'review',
          placeholder: 'Review'
        },
      ],
      buttons: [
        {
          text:`<rating [(ngModel)]= 'rate'         
           readOnly = 'false'        
           max = 5        
           emptyStarIconName =star-outline       
           halfStarIconName = star-half       
           starIconName = star        
           nullable = false       
          (ngModelChange) = onModelChange($event)>
          </rating>`,
    
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  
}
