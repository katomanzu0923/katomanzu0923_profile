<template>
  <div>
    <div class="header">
      <div class="header_right">
        <div class="header_right_main">
          学びLog
        </div>
      </div>
      <div class="header_left">
        {{ message }}<span class="header_left-sub-bottom">日経過中....</span>
        <span class="header_left-sub-top">学習開始から</span>
      </div>
      <div class="left">
      </div>
      <div class="right">
      </div>
    </div> 
    <div class="menu_button">
      <button @click="currentComponet = 'Home'; change_home()"  class="home">{{ home }}</button>
      <button @click="currentComponet = 'Programing'; change_program(); " class="programing">{{ programing }}</button>
      <button @click="currentComponet = 'Products'; change_products()" class="products">{{ products }}</button>
      <button @click="currentComponet = 'WebDesign'; change_design()" class="webdesign">{{ design }}</button>
      <button @click="currentComponet = 'AndMore'; change_more()" class="more">{{ more }}</button>
    </div>  
    <div>
      <component :is="currentComponet" class="contents"></component>
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
      home: "Profile",
      programing: "Programing",
      products: "Products",
      design: "WebDesign",
      more: "And more",
      isActiveNone: false
    };
  },
  methods: {
    window:onload = function() {
      let today = new Date();
      let start = new Date( '2020/8/3 00:00');
      let ago = (today - start) / 86400000;
      let day = Math.ceil(ago);
      this.message = day;
    },
    change_home() {
      let today = new Date();
      let start = new Date( '2020/8/3 00:00');
      let ago = (today - start) / 86400000;
      let day = Math.ceil(ago);
      this.message = day;
      this.home ="選択中";
      this.programing ="Programing";
      this.products ="Products";
      this.design ="WebDesign";
      this.more ="And more";
    },

    change_program() {
      this.home ="Profile";
      this.programing = "選択中";
      this.products ="Products";
      this.design ="WebDesign";
      this.more ="And more";
    },
    change_products() {
      this.home ="Profile";
      this.programing = "Programing";
      this.products ="選択中";
      this.design ="WebDesign";
      this.more ="And more";
      
    },
    change_design() {
      this.home ="Profile";
      this.programing = "Programing";
      this.products ="Products";
      this.design ="選択中";
      this.more ="And more";
    },
    change_more() {
      this.home ="Profile";
      this.programing = "Programing";
      this.products ="Products";
      this.design ="Web Design";
      this.more ="選択中";
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
  .header_right {
    background: #f7f7f7;
    box-sizing: border-box;
    position: absolute;
    top: 0%;
    right: 0%;
    height: 10%;
    width: 75%;
    box-shadow:0px 0px 5px 0px rgb(88, 88, 88);
    font-weight: bold;
    text-align: center;
  }
  .header_right_main {
    position: absolute;
    width: 100%;
    right: 0;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
    color: rgb(80, 214, 255);
    background: transparent;
    font-size: 2vw;
    padding: 5px;
  }
  .header_right_main:after {
  content: '';
  position: absolute;
  left: 35%;
  bottom: 0;
  width: 30%;
  height: 3px;
  background: repeating-linear-gradient(45deg, rgb(250, 135, 82), #7bd4e0 2px, #7fe07b, #f691fa 4px);
}
  .header_left {
    display: inline-block;
    position: absolute;
    color: royalblue;
    background: #f7f7f7;
    /*transform: rotate(-10deg);*/
    font-size: 2.5vw;
    text-align: center;
    margin: 0 1%;
    padding: 10px;
    border: 1px solid #CCC;
    border-top: 3px solid red;
		color: #7bcce0;
    width: 10%;
    left: 6%;
    top: 80%;
  }
  .header_left-sub-top {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.5vw;
  }
  .header_left-sub-bottom {
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 0.5vw;
  }
  .header_title_home {
    color: royalblue;
    font-size:2vh;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
  }
  .left::before {
   content:"";
   display:inline-block;
   width:2px;
   height:300px;
   background-color: rgba(85, 82, 81, 0.514);
   position:absolute;
   top:-2px;
   left:10%;
   filter: drop-shadow(50%);
   z-index: -1;
 }
 .right::before {
   content:"";
   display:inline-block;
   width:2px;
   height:300px;
   background-color: rgba(85, 82, 81, 0.514);
   position:absolute;
   top:-2px;
   left:15%;
   filter: drop-shadow(50%);
   z-index: -1;
 }
  .menu_button {
    margin-left: 2.5%;
    position: fixed;
    background: #f7f7f7;
    width: 20%;
    top: 15%;
    padding: 2%;
    height: 60%;
    text-align: center;
    box-shadow:0px 0px 5px 0px rgb(88, 88, 88);
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }
  button {
    width: 100%;
  }
  button:focus {
    outline: 0;
  }
  .home {
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #919cff;/*左線*/
    color: #919cff;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  }
  .home:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .home:focus  {
    background: #919cff;
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
    border-left: solid 6px #7fe07b;/*左線*/
    color: #7fe07b;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  }
  .products:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .products:focus  {
    background: #7fe07b;
    border-left: solid 6px #f7f7f7;/*左線*/
    color: #f7f7f7;/*文字色*/
  }

  .webdesign {
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #7bd4e0;/*左線*/
    color: #7bd4e0;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  }
  .webdesign:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .webdesign:focus  {
    background: #7bd4e0;
    border-left: solid 6px #f7f7f7;/*左線*/
    color: #f7f7f7;/*文字色*/
  }

  .more {
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #f691fa;/*左線*/
    color: #f691fa;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
   }
  .more:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
  .more:focus  {
    background: #f691fa;
    border-left: solid 6px #f7f7f7;/*左線*/
    color: #f7f7f7;/*文字色*/
  }
  .contents {
    display: block;
    right: 5%;
    width: 65%;
    top: 15%;
  }
</style>
