<template>

<div id="app">

  <div class="appCore">

    <div class="main">

      <router-view/>

    </div>

    <div class="menuContainer">

       <router-view class="viewMenu" name="menu"/>

    </div>

  </div>

  <div class="appIntro">

      <div class="lauchBody">

        <img src="./assets/redbuttonLogo.svg" alt="" class="logo">

      </div>

      <div class="lauchFoot">


         <p>Red</p>
         <p>Button</p>
         <p>Alert</p>
         <img src="./assets/alert.svg" alt="" class="alertIcon">

      </div>

    </div>

</div>

</template>


<style rel="stylesheet" type="text/css" src="./css/app.css"></style>

<script>

import Animation from './classes/animations'

export default {

  name: 'App',

  mounted(){

    Animation.lauchScreen();
    console.log(this.$route);

  }

}

</script>
