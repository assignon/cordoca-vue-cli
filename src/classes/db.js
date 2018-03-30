import Firebase from 'firebase'
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

      var db = Firebase.initializeApp(this.config);
      return db;

   }


}

export default new Db()
