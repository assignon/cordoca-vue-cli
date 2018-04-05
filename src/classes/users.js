import firebase from '../classes/db'
class Users
{

   constructor ()
   {

      this.usersData = firebase.initializeDb().auth();
      this.userLogged =  window.localStorage.getItem('userEmail');

   }


   isUserLogged ()
   {

     var userState = false;
     firebase.initializeDb().auth().onAuthStateChanged(function(user){

       userState = user;

     })

     return userState;

   }


   userData ()
   {

       var userdatas;

       if(this.usersData)
       {

          userdatas = this.usersData;

       }else{

          userdatas = true;

       }

       return userdatas;

   }

}

export default new Users()
