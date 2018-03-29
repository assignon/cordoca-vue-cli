<template>

  <h1 @click="goHome">je suis le login</h1>

</template>

<script>

import Animation from '../classes/animations'

export default {

    name: 'Signin',

    data (){

       return {}

    },

    methods: {

       goHome ()
       {

         this.$router.push('/');
         //Animation.pauseLauchScreen();
         Animation.displaySos();

       }

    }

}
</script>
