import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  

  constructor(public firestore: AngularFirestore) {
  }


  updateServiceWorker() {
    var a = {user:{name:"test"}};
    if (Notification.permission == 'granted') {
    var interval = setInterval(function () {
        navigator.serviceWorker.getRegistration().then(function (reg) {
          if (reg) {
            reg.showNotification("Hello "+a.user?.name + ", WebEdu Welcomes you onboard");
            console.log("Firestore Service trying to update user to service worker", a.user);
            let message={type:"DATA",user:a.user};
            reg.active?.postMessage(message);
            clearInterval(interval);
          }
        });
    }, 1000);
    }
  }
}
