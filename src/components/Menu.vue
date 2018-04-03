<template>

    <div class="menuCore">

        <!--<div class="moreMenuItems">

           <div class="menuIconCont"><img src="../assets/user.svg" alt=""></div>
           <p>Gebruiker</p>

        </div>-->


        <div class="moreMenuItems">

           <div class="menuIconCont"><img src="../assets/new.svg" alt=""></div>
           <p>Nieuwigheid</p>

        </div>


        <div class="moreMenuItems">

           <div class="menuIconCont"><img src="../assets/info.svg" alt=""></div>
           <p>info</p>

        </div>


        <div class="moreMenuItems">

           <div class="menuIconCont"><img src="../assets/settings.svg" alt=""></div>
           <p>Instellingen</p>

        </div>


        <div class="moreMenuItems" v-if="userLogged == null" @click="logIn">

           <div class="menuIconCont"><img src="../assets/login.svg" alt=""></div>
           <p>Login</p>

        </div>


        <div class="moreMenuItems" v-if="userLogged != null" @click="logOut">

           <div class="menuIconCont"><img src="../assets/logout.svg" alt=""></div>
           <p>Uitlogen</p>

        </div>


        <!--<div class="moreMenuItems">

           <div class="menuIconCont"><img src="../assets/more.svg" alt=""></div>
           <p>Meer</p>

        </div>-->

    </div>

</template>


<style rel="stylesheet" type="text/css" src="../css/menu.css"></style>


<script>

import Users from '../classes/users'
import firebase from '../classes/db'
import Animation from '../classes/animations'

  export default {

     name: 'Menu',

     data ()
     {

        return {

          userLogged: Users.userLogged

        }

     },


     methods: {

       logIn ()
       {

          Animation.displayForm();

       },


       logOut ()
       {

         firebase.initializeDb().auth().signOut().then(() => {

           this.userLogged = null;
           window.localStorage.removeItem('userName');
           window.localStorage.removeItem('userEmail');

         })

       }

     }

  }

</script>
