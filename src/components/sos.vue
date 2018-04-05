<template>

  <div class="sosContainer">

     <h3>Wil u de sos sturen?</h3>
     <div class="confirmCont">

       <button class="yes" @click="sendSos">Sturen</button>
       <button class="no" @click="cancelsos">Annuleren</button>

     </div>

  </div>

</template>

<style rel="stylesheet" type="text/css" src="../css/sos.css"></style>

<script>

import Animation from '../classes/animations'
import firebase from '../classes/db'
import Users from '../classes/users'

export default {

name: 'sos',

data ()
{

   return {

     notifContent: 'SOS met succes gestuurd. We nemen zo spoedig mogelijk contact met u op',
     notifIcon: '../assets/notificationsIcons/sos.svg'

   }

},


methods:{

   cancelsos ()
   {

      Animation.hideSosConfirm();

   },


   sendSos ()
   {

     var sosData = {

       'date_sended': '03/04/2018 11:49:00 AM',
       'sosType': 'sos',
       'sosContent': 'Helppp!!!',
       'user': Users.usersData.currentUser.email

       }

       firebase.insert('sos', sosData, this.notifContent, this.notifIcon);

       Animation.hideSosConfirm();

    }

  }

}


</script>
