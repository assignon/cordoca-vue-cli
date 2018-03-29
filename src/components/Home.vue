<template>

  <div class="homeRoot">

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

</template>

<style rel="stylesheet" type="text/css" src="../css/home.css"></style>

<script>


export default {

  name: 'Home',

   data (){

     return {

       username: window.localStorage.getItem('userName'),
       userID: window.localStorage.getItem('userid'),

     }

   },


   methods: {

       isUserLogged (sosType)
       {

          if(this.userID != null)
          {

            sosType();

          }else{

            this.$router.push('/signin');

          }

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
