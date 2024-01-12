<template>
  <div class="cont" >
     <div>
       <router-view></router-view>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   name: "App",
 };
 </script>
 
 <style>
  body {
  background-image: url('assets/cole.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* Otros estilos adicionales */
}
 
 </style>
 