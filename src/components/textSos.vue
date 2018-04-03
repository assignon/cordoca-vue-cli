<template>

  <div class="sosTextContainer">

    <img src="../assets/close.svg" alt="" @click="hideTextSos">

     <form class="" action="" method="">

       <textarea name="" rows="8" cols="80" v-model="textSos" placeholder="beschrijf uw probleem..."></textarea>
       <input type="submit" name="" value="Sturen" @click.prevent="sendTextSos">

     </form>

  </div>

</template>


<style media="screen">

.sosTextContainer
{

   width: 90%;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: absolute;
   border-radius: 3px;
   background-color: #fc0e26;
   -webkit-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
   -moz-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
   box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
   padding-top: 10px;
   transform: scale(0,0);

}


.sosTextContainer img
{

   width: 20px;
   height: 20px;
   margin-bottom: 20px;

}


.sosTextContainer form
{

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}


.sosTextContainer form textarea
{

  width: 90%;
  height: 200px;
  padding-top: 10px;
  padding-left: 10px;
  background-color: white;
  color: black;
  text-align: left;
  font-size: 17px;
  border-radius: 3px;
  border: 1px solid white;
  margin-bottom: 10px;

}


.sosTextContainer form input
{

   width: 93%;
   height: 35px;
   text-align: center;
   color: white;
   background-color: #fc0e26;
   -webkit-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
   -moz-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
   box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
   margin-bottom: 10px;
   border: 1px solid #fc0e26;
   border-radius: 3px;
   font-size: 20px;

}

</style>



<script>

import Animation from '../classes/animations'
import firebase from '../classes/db'
import Users from '../classes/users'

export default {

name: 'textSos',

data ()
{

   return {

      textSos: '',
      notifContent: 'TEXT-SOS met succes gestuurd. We nemen zo spoedig mogelijk contact met u op',
      notifIcon: '../assets/notificationsIcons/sos.svg'

   }

},


methods:{


   sendTextSos ()
   {

     var sosTextData = {

       'date_sended': '03/04/2018 11:49:00 AM',
       'sosType': 'sosText',
       'sosContent': this.textSos,
       'user': Users.usersData.currentUser.email

       }

       if(this.textSos != '')
       {

         firebase.insert('sos', sosTextData, this.notifContent, this.notifIcon);

         this.hideTextSos();

         this.textSos = '';

       }else{

          alert('De text veld is leeg...')

       }

   },


   hideTextSos ()
   {

     Animation.hideSos('sosTextContainer');

   }

  }

}


</script>
