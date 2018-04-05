<template>

    <div class="menuCore">

        <div class="messages" v-if="useremail != null">

           <router-link to="/sos"><div class="sosAlert" v-if="useremail == 'yanick@redbutton.com' && sosCount > 0"><img src="../assets/notificationsIcons/sos.svg" alt=""></div></router-link>

           <div class="msgNotif" v-if="useremail != 'yanick@redbutton.com'">

              <img src="../assets/msgs.svg" alt="">
            <span v-if="msgsCount > 0">{{ msgsCount }}</span>

           </div>

        </div>

        <div class="menuCont">

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


          <div class="moreMenuItems" @click="msgCount" v-if="useremail != 'yanick@redbutton.com'">

             <div class="menuIconCont"><img src="../assets/settings.svg" alt=""></div>
             <p>Instellingen</p>

          </div>


          <div class="moreMenuItems" v-if="useremail == 'yanick@redbutton.com'">

             <div class="menuIconCont"><img src="../assets/users.svg" alt=""></div>
             <p>Gebruikers</p>

          </div>


          <div class="moreMenuItems" v-if="useremail == null" @click="logIn">

             <div class="menuIconCont"><img src="../assets/login.svg" alt=""></div>
             <p>Login</p>

          </div>


          <div class="moreMenuItems" v-else @click="logOut">

             <div class="menuIconCont"><img src="../assets/logout.svg" alt=""></div>
             <p>Uitlogen</p>

          </div>


          <!--<div class="moreMenuItems">

             <div class="menuIconCont"><img src="../assets/more.svg" alt=""></div>
             <p>Meer</p>

          </div>-->

        </div>

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

          userLogged: Users.userLogged,
          useremail: window.localStorage.getItem('userEmail'),
          //messagesNotif: this.msgCount(),
          msgsCount: null,
          sosCount: null

        }

     },

     mounted ()
     {

       firebase.prepareQuery('messages', snapshot => {

           this.msgsCount = snapshot.docs.length;

       }),

       Animation.sosAlarm(),

       firebase.query('sos', snapshot => {

           this.sosCount = snapshot.docs.length;

       })

     },


     methods: {

       logIn ()
       {

          Animation.displayForm();

       },


       logOut ()
       {

         firebase.initializeDb().auth().signOut().then(() => {

           this.useremail = null;
           window.localStorage.removeItem('userName');
           window.localStorage.removeItem('userEmail');

         })

       },


       msgCount ()
       {

          var count;
          firebase.prepareQuery('messages', snapshot => {

              count = snapshot.docs.length;

          })
          console.log(count);
          //return count;

       }

     }

  }

</script>
