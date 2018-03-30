<template>

  <div class="homeRoot">

   <div class="coreContainer">

      <div class='menuTop'>

        <img src="../assets/redbuttonLogo.svg" alt="" class="appLogo">
        <h4>R.B.Alert {{ userID }}</h4>
        <div class="bmenuCont"><img src="../assets/bmenu.svg" alt="" class="bMenu"></div>

      </div>

      <div class="core">

        <div class="alerts" @click="isUserLogged(textSos)">

            <div class="imgAlertsCont"><img src="../assets/text.svg" alt=""></div>

        </div>


        <div class="alerts">

          <div class="sosCont" @click="isUserLogged(sos)"><img src="../assets/redbuttonLogo.svg" alt="" class="sos"></div>
          <div class="imgAlertsCont" @click="isUserLogged(cameraSos)"><img src="../assets/camera.svg" alt></div>

        </div>


        <div class="alerts" @click="isUserLogged(videoSos)">

           <div class="imgAlertsCont"><img src="../assets/video.svg" alt=""></div>

        </div>


      </div>

     </div>

      <div class="formsContainer">

         <div class="formBack">

         </div>


         <form class="loginOut" action="" method="">

           <img src="../assets/close.svg" alt="" @click="closeForm">

           <p v-if="account">Vul jouw inlog gegevens in...</p>
           <p v-if="!account">Maak een nieuw account aan...</p>

           <input type="text" name="" v-model="username" placeholder="Gebruikersnaam" v-if="!account">
           <input type="email" name="" v-model="email" placeholder="Email">
           <input type="password" name="" v-model="password" placeholder="password">
           <input type="submit" name="" value="Login" v-if="account" @click.prevent="login">
           <input type="submit" name="" value="Registreren" v-if="!account" @click.prevent="register">

           <h3 v-if="account" @click="registerForm">Registreren</h3>
           <h3 v-else @click="loginForm">Login</h3>

         </form>

      </div>

  </div>

</template>

<style rel="stylesheet" type="text/css" src="../css/home.css"></style>

<script>

import Animation from '../classes/animations'
import firebase from '../classes/db'
import Users from '../classes/users'

export default {

  name: 'Home',

   data (){

     return {

       //username: window.localStorage.getItem('userName'),
       userID: window.localStorage.getItem('userid'),
       username: "",
       email: '',
       password: '',
       account: true

     }

   },


   methods: {

       isUserLogged (sosType)
       {

          if(this.userID != null)
          {

            sosType();

          }else{

            Animation.displayForm();

          }

       },


       closeForm ()
       {

         Animation.hideForm();

       },


       registerForm ()
       {

           this.account = false;

       },


       loginForm ()
       {

          this.account = true;

       },


       register ()
       {

          firebase.initializeDb().auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {

            alert(`account created ${user.id}`);
            this.username = '';
            this.email = '';
            this.password = ''

            window.localStorage.setItem()

          },
        err => {

           alert(err.message);

        })

       },


       login ()
       {

          alert(this.email+' '+this.password);

       },


       sos ()
       {



       },


       textSos ()
       {



       },


       cameraSos ()
       {



       },


       videoSos ()
       {



       }

   }


}

</script>
