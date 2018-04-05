<template>

  <div class="cameraSos">

     <div class="fotoCont">

        <img src="" alt="" class="cameraFoto">

     </div>

     <form action="" method="">

       <textarea name="" rows="8" cols="80" placeholder="Beschrijving (niet verplicht)" v-model="cameraSosVal"></textarea>
       <input type="submit" name="" value="Sturen" @click.prevent="sendCameraSos">

     </form>

  </div>

</template>


<script>

export default {

   name: 'cameraSos',

   data ()
   {

      return {

        cameraSosVal: ''

      }

   },

   methods: {

      sendCameraSos ()
      {



      }

  }

}

</script>


<style media="screen">

   .cameraSos
   {

     width: 90%;
     height: 50%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-radius: 3px;
     background-color: #fc0e26;
     -webkit-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
     -moz-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
     box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
     z-index: 7;
     transform: scale(0,0);

   }


   .fotoCont
   {

     width: 95%;
     height: 60%;
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1px solid white;
     border-radius: 3px 3px 0px 0px;

   }


   .fotoCont img
   {

      width: 100%;
      height: 100%;

   }


   .cameraSos form
   {

     width: 94%;
     height: auto;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

   }


   .cameraSos form textarea
   {

     width: 100%;
     height: 70px;
     padding-top: 10px;
     font-size: 17px;
     text-align: left;
     border: 1px solid white;
     border-radius: 0px 0px 3px 3px;
     margin-bottom: 10px;

   }


   .cameraSos form input
   {

     width: 100%;
     height: 35px;
     color: white;
     text-align: center;
     border-radius: 3px;
     background-color: #fc0e26;
     -webkit-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
     -moz-box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
     box-shadow: -4px 1px 6px -2px rgba(0,0,0,0.75);
     border: 1px solid #fc0e26;
     border-radius: 3px;
     font-size: 20px;

   }

</style>
