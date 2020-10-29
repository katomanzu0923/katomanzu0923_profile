<template>
  <div>
    <Header></Header>
    <div class="top_button">
      <button @click="currentComponet = 'Home'" class="home">Home</button>
      <button @click="currentComponet = 'Programing'" class="programing">Programing</button>
      <button @click="currentComponet = 'Products'" class="products">Products</button>
      <button @click="currentComponet = 'WebDesign'" class="webdesign">WebDesign</button>
      <button @click="currentComponet = 'AndMore'" class="more">And more</button>
    </div>  
    <div>
      <component :is="currentComponet" class="co"></component>
    </div>  
  </div>
</template>

<script>
import Header from "./components/Header"
import Programing from "./components/Programing"
import Products from "./components/Products"
import WebDesign from "./components/WebDesign"
import AndMore from "./components/AndMore"
import Home from "./components/Home"
export default {
  data() {
    return {
      currentComponet: "Home"
    };
  },
  components: {
    Header,
    Programing,
    Products,
    WebDesign,
    AndMore,
    Home
  }
};
</script>

<style scoped>
  * {
    font-size: 2vh;
  }

  .home {
    background-color: red;
    display: block;
    margin-top: 5%;
    width: 20%;
  }
  .programing {
    background-color: red;
    display: block;
    margin-top: 5%;
    width: 20%;
  }
  .products {
    display: block;
    margin-top: 5%;
    width: 20%;
  }

  .webdesign {
    background-color: red;
    display: block;
    margin-top: 5%;
    width: 20%;
    
  }

  .more {
    background-color: red;
    display: block;
    margin-top: 5%;
    width: 20%;
  }

  .co {
    position: absolute;
    right: 5%;
    width: 70%;
    top: 80px;
  }






</style>
