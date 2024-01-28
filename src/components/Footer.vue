<template>
    <footer>
      <p>{{ fullName }} - {{ tpNumber }}</p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: "BONNEL NOAH",
        tpNumber: "TPD", 
      };
    },
  };
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    font-size: 300%;
    color : #880000;
    padding-top: 150px;
    background-image: url("../assets/img/banner.png");
    background-size: cover;
    position: relative;
    bottom: 0;
    width: 100%;
    font-family: 'Arial', sans-serif;
    text-shadow: 
    -1px -1px 1px black,  
    1px -1px 1px black,
    -1px 1px 1px black,
    1px 1px 1px black; 


  }
  </style>
  