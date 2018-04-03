<template>

  <h1><router-link to='/'>Home</router-link></h1>

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

         //this.$router.push('/');
         //Animation.pauseLauchScreen();
         Animation.displaySos();

       }

    }

}
</script>
