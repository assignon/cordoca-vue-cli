<template>

  <div class="homeRoot">

   <div class="coreContainer">

      <div class='menuTop'>

        <img src="../assets/redbuttonLogo.svg" alt="" class="appLogo">
        <h4>R.B.Alert {{ userID }}</h4>
        <div class="bmenuCont" v-if="userEmail"><img src="../assets/bmenu.svg" alt="" class="bMenu"></div>

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

     <notification></notification>

     <sos></sos>

     <textSos></textSos>

     <cameraSos></cameraSos>

      <div class="formsContainer">

         <div class="formBack">

         </div>


         <form class="loginOut" action="" method="">

           <img src="../assets/close.svg" alt="" @click="closeForm">

           <p v-if="account">{{ logMsg }}</p>
           <p v-if="!account">{{ logMsg }}</p>

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

import Vue from 'vue'
import Animation from '../classes/animations'
import firebase from '../classes/db'
import Users from '../classes/users'
import cordovaPlugins from '../classes/cordovaPlugins'
import Sos from '../components/sos'
import TextSos from '../components/textSos'
import cameraSos from '../components/cameraSos'
import Notifications from '../components/notification'

export default {

  name: 'Home',

   data (){

     return {

       //username: window.localStorage.getItem('userName'),
       userID: window.localStorage.getItem('userid'),
       username: "",
       email: '',
       password: '',
       account: true,
       logMsg: 'Vul jouw inlog gegevens in...',
       userEmail : window.localStorage.getItem('userEmail'),
       sosType: null,


     }

   },


   components :{

     'notification': Notifications,
     'sos': Sos,
     'textSos': TextSos,
     'cameraSos': cameraSos

   },


   created ()
   {


   },


   methods: {

       isUserLogged (sosType, e)
       {

          this.sosType = sosType;
          if(firebase.initializeDb().auth().currentUser)
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

           this.logMsg = 'Maak een nieuw account aan...';
           this.account = false;

       },


       loginForm ()
       {

          this.logMsg = 'Vul jouw inlog gegevens in...';
          this.account = true;

       },


       register ()
       {

          firebase.initializeDb().auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {

            this.logMsg = `account created ${user.email}`;
            window.localStorage.setItem('userName', this.username);
            this.username = '';
            this.email = '';
            this.password = ''

            this.login();

          },
        err => {

           this.logMsg = err.message;

        })

       },


       login ()
       {

          if(this.email != '' && this.password != '')
          {

            firebase.initializeDb().auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {

                window.localStorage.setItem('userEmail', this.email);
                this.logMsg = "U bent ingelogd";
                Animation.hideForm();
                Users.userLogged = !null;

                this.sosType();

            },

            err => {

              this.logMsg = err.message;

             }

            )

           }else{

             this.logMsg = 'Vul alle velden in...';

           }

        },


       sos ()
       {

          Animation.callSosConfirm();

        /*  firebase.fireStore().collection('sos').add({

            'date_sended': '29/03/2018 12:00:00 AM',
            'sosType': 'sos',
            'sosContent': 'Helppp!!!',
            'user': this.userEmail

          })
          .then(docRef =>{

            alert(`sos with id ${docRef.id} sended`);

          })
          .catch(error => {

            console.log(err);

          })*/

       },


       textSos ()
       {

          Animation.callSos('sosTextContainer');

       },


       cameraSos ()
       {

        /* Vue.cordova.on('deviceready', () => {
           console.log('Cordova : device is ready !');
         });*/
            cordovaPlugins.takePicture();
          /*  Vue.cordova.camera.getPicture((imageUri) => {

              cordovaPlugins.cameraSucces(imageUri)

            }, (message) => {

              cordovaPlugins.cameraErr(message)

            }, {

              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType: Camera.PictureSourceType.CAMERA,
              encodingType: Camera.EncodingType.JPEG,
              mediaType: Camera.mediaType.PICTURE,
              CAMERAdirection: Camera.Direction.BACK,
              allowEdit: true,
              correctOrientation: true,
              targetWidth: 500,
              targetHeight: 500

            })*/

       },


       videoSos ()
       {



       }

   }


}

</script>
