<template>
  <div>
    <header class="header">
      プログミング  {{ message }}日の学習記！！
    </header>   
    <div class="top_button">
      <button @click="currentComponet = 'Home'; change_home()"  class="home">{{ home }}</button>
      <button @click="currentComponet = 'Programing'; change_program()" class="programing">{{ programing }}</button>
      <button @click="currentComponet = 'Products'; change_products()" class="products">{{ products }}</button>
      <button @click="currentComponet = 'WebDesign'; change_design()" class="webdesign">{{ design }}</button>
      <button @click="currentComponet = 'AndMore'; change_more()" class="more">{{ more }}</button>
    </div>  
    <div>
      <component :is="currentComponet" class="co"></component>
    </div>  
  </div>
</template>


<script>

import Programing from "./components/Programing"
import Products from "./components/Products"
import WebDesign from "./components/WebDesign"
import AndMore from "./components/AndMore"
import Home from "./components/Home"

export default {
  data() {
    return {
      currentComponet: "Home",
      message: "day",
      home: "Home",
      programing: "Programing",
      products: "Products",
      design: "WebDesign",
      more: "And more"
    };
  },
  methods: {
    change_home() {
      let today = new Date();
      let start = new Date( '2020/8/3 00:00');
      let ago = (today - start) / 86400000;
      let day = Math.ceil(ago);
      return this.message = day;
    },
    change_program() {
      return this.message = "学んだ言語！";
    },
    change_products() {
      return this.message = "作った作品";
    },
    change_design() {
      return this.message = "デザインスキル";
    },
    change_more () {
      return this.message = "and more!";
    },
    window:onload = function() {
      let today = new Date();
      let start = new Date( '2020/8/3 00:00');
      let ago = (today - start) / 86400000;
      let day = Math.ceil(ago);
      //alert(day);
      return this.message = day;
    }
  },
  components: {
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
    box-sizing: border-box;
  }

  .header {
		width: 100%;
    height: 80px;
   
    text-align: center;
    font-size: 3vw;
    padding: 2%;
	}
  .header::after {
    content: "";
    display: block;
    position: absolute;
    background: black;
    height: 1px;
    width: 60%;
    left: 20%;
  }

  .top_button {
    margin-top: 5%;
    margin-left: 1%;
    position: fixed;
  }

  button:focus {
    outline: 0;
  }
  .home {
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    
  }
  .home:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .home:focus  {
    background: #ff7c5c;
    border-left: solid 6px #f7f7f7;/*左線*/
    color: #f7f7f7;/*文字色*/
  }

  .programing {
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    margin-top: 50%;
  }

  .programing:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .programing:focus  {
    background: #ff7c5c;
    border-left: solid 6px #f7f7f7;/*左線*/
    color: #f7f7f7;/*文字色*/
  }
  .products {
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    margin-top: 5%;
    margin-top: 50%;
  }
  .products:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .products:focus  {
    background: #ff7c5c;
    border-left: solid 6px #f7f7f7;/*左線*/
    color: #f7f7f7;/*文字色*/
  }

  .webdesign {
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    margin-top: 5%;
    margin-top: 50%;
  }
  .webdesign:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .webdesign:focus  {
    background: #ff7c5c;
    border-left: solid 6px #f7f7f7;/*左線*/
    color: #f7f7f7;/*文字色*/
  }

  .more {
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    margin-top: 5%;
    margin-top: 50%;
  }
  .more:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .more:focus  {
    background: #ff7c5c;
    border-left: solid 6px #f7f7f7;/*左線*/
    color: #f7f7f7;/*文字色*/
  }

  .co {
    display: block;
    right: 5%;
    width: 70%;
    top: 80px;
    margin-top: 5%;
  }






</style>
