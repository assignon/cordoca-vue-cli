<template>

<div id="app">

  <div class="appCore">

    <div class="main">

      <router-view class="vieuwHome" name="home"/>

    </div>

    <div class="menuContainer">

       <router-view class="vieuwMenu" name="menu"/>

    </div>

  </div>

  <div class="appIntro">

      <div class="lauchBody">

        <img src="assets/redbuttonLogo.svg" alt="" class="logo">

      </div>

      <div class="lauchFoot">


         <p>Red</p>
         <p>Button</p>
         <p>Alert</p>
         <img src="assets/alert.svg" alt="" class="alertIcon">

      </div>

    </div>

</div>

</template>


<style rel="stylesheet" type="text/css" src="./css/app.css"></style>


<script>

export default {
  name: 'App'
}

</script>
