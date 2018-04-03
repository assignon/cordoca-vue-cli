import Firebase from 'firebase'
import 'firebase/firestore'
import Notifications from '../classes/notification'
class Db
{

   constructor ()
   {

      this.config = {
          apiKey: "AIzaSyCBsrELn5TShRC4CQ6_FMXJatd5WqX40fU",
          authDomain: "redbutton-alert.firebaseapp.com",
          databaseURL: "https://redbutton-alert.firebaseio.com",
          projectId: "redbutton-alert",
          storageBucket: "redbutton-alert.appspot.com",
          messagingSenderId: "554911665700"
        }


   }


   initializeDb ()
   {

    //  var db = Firebase.initializeApp(this.config);
        var firebase;

        if (!Firebase.apps.length) {

          firebase = Firebase.initializeApp(this.config);

        }else{

           firebase = Firebase;

        }
        return firebase;

   }


   fireStore ()
   {

      var firestore = this.initializeDb().firestore();
      return firestore;

   }


   insert (collectionName, data, notifContent, notifIcon)
   {

     this.fireStore().collection(collectionName).add({

        data

     })
     .then(docRef => {

       Notifications.notificationContent(notifContent, notifIcon);

     })
     .catch(error => {

        Notifications.notificationContent(error, '../assets/notificationsIcons/errormsg.svg');

     })

   }


}

export default new Db()
