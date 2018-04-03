import firebase from '../classes/db'
class Users
{

   constructor ()
   {

      this.usersData = firebase.initializeDb().auth();
      this.userLogged =  window.localStorage.getItem('userEmail');

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
