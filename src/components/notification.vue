<template>

  <div class="notificationCont">

     <div class="notificationIcon">

        <img src='' alt="" class="notifIcon">

     </div>

     <div class="notificationContent">

        <p class="notifContent">{{ notifContent }}</p>

     </div>

  </div>

</template>


<style media="screen">

.notificationCont
{

  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 7;
  /*margin-top: -120%;*/
  position: absolute;
  top: 70px;
  right: -300px;

}


.notificationIcon
{

  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 3px;
  background-color: #fc0e26;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 5px;
  -webkit-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
  box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);

}


.notificationIcon img
{

   width: 25px;
   height: 25px;

}


.notificationContent
{

   width: 95%;
   height: auto;
   padding-top: 15px;
   padding-bottom: 15px;
   background-color: #fc0e26;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 3px;
   -webkit-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
   -moz-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
   box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);

}


.notificationContent p
{

   text-align: center;
   color: white;
   font-size: 15px;
   width: 90%;
   height: auto;

}

</style>


<script>

import notificationCls from '../classes/notification'

export default {

  name: 'notification',

  data (){

     return {

       //notifIcon: notificationCls.notifIcon[0],
       notifContent: null


     }

  },

  created ()
  {



  }

}

</script>
