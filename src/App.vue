<template>
  <div>
    <div  class="open" v-if=" isOpen ===  'a'">
      <div  class="open-body">
          <h1 class="open-title">フロントエンドエンジニアを目指す、未経験者の</h1>
          <span class="open-main01">学</span><span class="open-main02">び</span><span class="open-main03">L</span><span class="open-main04">o</span><span class="open-main05">g</span>
          <div class="open-sub01">HTML</div><div class="open-sub02">SCSS</div><div class="open-sub03">Vue.js</div><div class="open-sub04">Ruby</div>
          <button  class="open-button" @click="isOpen = 'b'; day_calculation()">見にいく!</button>
      </div>
    </div>
    <div v-else>
    </div>
    <div class="header">
        <div v-if="isActive01 === 'a'">
          <div  class="header-right">
            Profile
          </div>
          <div  class="header_left_title">
            <span class="front1">学</span><span class="front">び</span><span class="middle">L</span><span class="back">o</span><span class="back1">g</span>
          </div>
          <div  class="header_left_home">
             <span class="day">{{ message }}</span><span class="header_left-sub-bottom">日</span>
             <span class="header_left-sub-top">学習開始から</span>
          </div>
        </div>
        <div v-else-if="isActive01 === 'b'">
          <div  class="header-right-programing">
            Programing
          </div>
          <div  class="header_left_title">
            <span class="programing-front1">学</span><span class="programing-front">び</span><span class="programing-middle">L</span><span class="programing-back">o</span><span class="programing-back1">g</span>
          </div>
          <div  class="header_left_programing">
             <span class="day">{{ message }}</span><span class="header_left-sub-bottom">日</span>
             <span class="header_left-sub-top">学習開始から</span>
          </div>
        </div>
        <div v-else-if="isActive01 === 'c'">
          <div  class="header-right-products">
            Products
          </div>
          <div  class="header_left_title">
            <span class="products-front1">学</span><span class="products-front">び</span><span class="products-middle">L</span><span class="products-back">o</span><span class="products-back1">g</span>
          </div>
          <div  class="header_left_products">
            <span class="day">{{ message }}</span><span class="header_left-sub-bottom">日</span>
            <span class="header_left-sub-top">学習開始から</span>
          </div>
        </div>
        <div v-else-if="isActive01 === 'd'">
          <div  class="header-right-design">
            Web  Design
          </div>
          <div  class="header_left_title">
            <span class="design-front1">学</span><span class="design-front">び</span><span class="design-middle">L</span><span class="design-back">o</span><span class="design-back1">g</span>
          </div>
          <div  class="header_left_design">
            <span class="day">{{ message }}</span><span class="header_left-sub-bottom">日</span>
            <span class="header_left-sub-top">学習開始から</span>
          </div>
        </div>
        <div v-else-if="isActive01 === 'e'">
          <div  class="header-right-more">
            And more
          </div>
          <div  class="header_left_title">
            <span class="more-front1">学</span><span class="more-front">び</span><span class="more-middle">L</span><span class="more-back">o</span><span class="more-back1">g</span>
          </div>
          <div  class="header_left_more">
            <span class="day">{{ message }}</span><span class="header_left-sub-bottom">日</span>
            <span class="header_left-sub-top">学習開始から</span>
          </div>
        </div>
        <div v-else >
          <div  class="header-right">
            Profile
          </div>
          <div  class="header_left_title">
            <span class="front1">学</span><span class="front">び</span><span class="middle">L</span><span class="back">o</span><span class="back1">g</span>
          </div>
          <div  class="header_left_home">
             <span class="day">{{ message }}</span><span class="header_left-sub-bottom">日</span>
             <span class="header_left-sub-top">学習開始から</span>
          </div>
        </div>
    </div> 
     <div>
      <component :is="currentComponet" class="contents"></component>
    </div>  
    
    <div class="menu_button">
      <button @click="currentComponet = 'Home'; change_home()"  class="home">{{ home }}</button>
      <button @click="currentComponet = 'Programing'; change_program(); " class="programing">{{ programing }}</button>
      <button @click="currentComponet = 'Products'; change_products()" class="products">{{ products }}</button>
      <button @click="currentComponet = 'WebDesign'; change_design()" class="webdesign">{{ design }}</button>
      <button @click="currentComponet = 'AndMore'; change_more()" class="more">{{ more }}</button>
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
      isActive01: "g",
      isOpen: "a",
    };
  },
  methods: {
    day_calculation() {
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
      this.isActive01 = "a"
    },

    change_program() {
      this.home ="Profile";
      this.programing = "選択中";
      this.products ="Products";
      this.design ="WebDesign";
      this.more ="And more";
      this.isActive01 = "b"
    },
    change_products() {
      this.home ="Profile";
      this.programing = "Programing";
      this.products ="選択中";
      this.design ="WebDesign";
      this.more ="And more";
      this.isActive01 = "c"
    },
    change_design() {
      this.home ="Profile";
      this.programing = "Programing";
      this.products ="Products";
      this.design ="選択中";
      this.more ="And more";
      this.isActive01 = "d"
    },
    change_more() {
      this.home ="Profile";
      this.programing = "Programing";
      this.products ="Products";
      this.design ="Web Design";
      this.more ="選択中";
      this.isActive01 = "e"
    }
  },
  components: {
    Programing,
    Products,
    WebDesign,
    AndMore,
    Home,
  }

};
</script>

<style scoped>

  * {
    font-size: 1.5vw;
    box-sizing: border-box;
  }
  .day {
    font-size: 18px;
    text-align: center;
    position: absolute;
    bottom: 0;
    background: transparent;
    left: 20%;
  }
  @media screen and (max-width: 950px){
    .day {
      font-size: 2vw;
      bottom: 0;
      background: transparent;
    }
  }

  .open {
    position: absolute;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    font-family: arial black;
    background: transparent;
    backdrop-filter: blur(5px);
  }
  .open-body {
    position: absolute;
    position: fixed;
    left: 0;
    top: 15%;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #4e60ffb6;
    font-size: 3vw;
    z-index: 3;
    background: transparent;
    font-family: arial black;
  }
  
  
  .open-button {
    position: absolute;
    left: 45%;
    top: 25%;
    width: 10%;
    z-index: 4;
    font-weight: bold;
    text-shadow: 3px 3px 0 #4ec7ffd3;
    -webkit-text-stroke: 1px #888;
    color: rgb(218, 248, 255);
    font-size: 1.5vw;
    border-radius: 4px;
  }
   @media screen and (max-width: 950px){
     .open-button {
       top: 13%;
       width: 15%;
       left: 42.5%;
     }
  }
  button {
    background: #4ec7ffd3;
    border: none;
  }
  .open-title {
    position: absolute;
    left: 10%;
    width: 80%;
    color: rgba(0, 0, 255, 0.699);
  }
  @media screen and (max-width: 950px){
  }
  .open-sub01 {
    position: absolute;
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #4e60ffd3;
    -webkit-text-stroke: 1px #888;
    background: transparent;
    backdrop-filter: blur(1000px);
    font-size: 1.5vw;
    transform: rotate(-25deg);
    top: 23%;
    left: 58%;
  } @media screen and (max-width: 950px){
    .open-sub01 {
      top: 12%;
    }
  }
  .open-sub02 {
    position: absolute;
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #ff4ecad3;
    -webkit-text-stroke: 1px #888;
    background: transparent;
    font-size: 2vw;
    transform: rotate(5deg);
    top: 20%;
    left: 33%;
  }
  @media screen and (max-width: 950px){
    .open-sub02 {
      top: 11%;
    }
  }
  .open-sub03 {
    position: absolute;
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #54ff4ed3;
    -webkit-text-stroke: 1px #888;
    padding: 3px 0 10px;
    background: transparent;
    backdrop-filter: blur(1000px);
    font-size: 3vw;
    transform: rotate(10deg);
    top: 32%;
    left: 54%;
  }
   @media screen and (max-width: 950px){
     .open-sub03 {
       top: 15%;
     }
  }
  .open-sub04 {
    position: absolute;
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #f02727d3;
    -webkit-text-stroke: 1px #888;
    padding: 3px 0 10px;
    background: transparent;
    backdrop-filter: blur(1000px);
    font-size: 2vw;
    transform: rotate(-15deg);
    top: 30%;
    left: 40%;
  }
   @media screen and (max-width: 950px){
     .open-sub04 {
       top: 16%;
     }
  }
  .open-main01 {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #4e60ffd3;
    -webkit-text-stroke: 1px #888;
    padding: 3px 0 10px;
    background: transparent;
    backdrop-filter: blur(1000px);
    font-size: 6vw;
    transform: rotate(-25deg);
  }
  .open-main02 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #fa5252d5;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    display: inline-block;
    background: transparent;
    backdrop-filter: blur(2000px);
    font-size: 6vw;
    margin-top: 50px;
  }
  .open-main03 {
    display: inline-block;
    background: transparent;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #1bdf1483;
    -webkit-text-stroke: 1px rgb(116, 116, 116);
    padding: 0 0 10px;
    background: transparent;
    font-size: 9vw;
  }
  .open-main04 {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #00d0ec96;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    backdrop-filter: blur(10px);
    font-size: 7vw;
  }
  .open-main05 {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #f94eff8e;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    backdrop-filter: blur(10px);
    font-size: 5vw;
    transform: rotate(25deg);
    margin: 7px;
  }
  .header-right {
    display: inline-block;
    position: absolute;
    color: #4e60ff;
    background: #ffffff;
    font-size: 2vw;
    border: 1px solid #CCC;
    border-top: 6px solid rgba(98, 162, 235, 0.979);
		color: rgba(27, 120, 226, 0.89);
    width: 75%;
    height: 10%;
    left: 25%;
    text-align: center;
    top: 0;
		font-weight: bold;
    z-index: 2;
    padding: 1%;
    line-height: 75px;
  }
   @media screen and (max-width: 950px){
    .header-right {
    font-size: 5vw;
    width: 100%;
    left: 0;
    height: 10%;
    text-align: center;
  }
  }
  .header-right-programing {
    display: inline-block;
    position: absolute;
    color: #4e60ff;
    background: #ffffff;
    font-size: 2.5vw;
    border: 1px solid #CCC;
    border-top: 6px solid #fa52529c;
		color: #fa5252;
    width: 75%;
    height: 10%;
    right: 0;
    text-align: center;
    top: 0;
		font-weight: bold;
    z-index: 2;
    line-height: 75px;
  }
  @media screen and (max-width: 950px){
    .header-right-programing {
    font-size: 5vw;
    width: 100%;
    left: 0;
    height: 10%;
    text-align: center;
  }
  }
 
  .header-right-products {
    display: inline-block;
    position: absolute;
    background: #ffffff;
    font-size: 2.5vw;
    border: 1px solid #CCC;
    width: 75%;
    height: 10%;
    right: 0;
    text-align: center;
    top: 0;
		font-weight: bold;
    z-index: 2;
    line-height: 75px;
    border-top: 6px solid #1bdf1471;
		color: #1bdf14ec;
  }
  @media screen and (max-width: 950px){
    .header-right-products {
    font-size: 5vw;
    width: 100%;
    left: 0;
    height: 10%;
    text-align: center;
  }
  }
  .header-right-design {
    display: inline-block;
    position: absolute;
    color: #4e60ff;
    background: #ffffff;
    font-size: 2.5vw;
    border: 1px solid #CCC;
    border-top: 6px solid #fa52529c;
		color: #fa5252;
    width: 75%;
    height: 10%;
    right: 0;
    text-align: center;
    top: 0;
		font-weight: bold;
    z-index: 2;
    line-height: 75px;
    border-top: 6px solid #1fcde06c;
		color: #00d0ecf5;
  }
  @media screen and (max-width: 950px){
    .header-right-design {
    font-size: 5vw;
    width: 100%;
    left: 0;
    height: 10%;
    text-align: center;
  }
  }
  .header-right-more {
    display: inline-block;
    position: absolute;
    color: #4e60ff;
    background: #ffffff;
    font-size: 2.5vw;
    border: 1px solid #CCC;
    border-top: 6px solid #fa52529c;
		color: #fa5252;
    width: 75%;
    height: 10%;
    right: 0;
    text-align: center;
    top: 0;
		font-weight: bold;
    z-index: 2;
    line-height: 75px;
    border-top: 6px solid #f94eff70;
		color: #f94effef;
  }
  @media screen and (max-width: 950px){
    .header-right-more {
    font-size: 5vw;
    width: 100%;
    left: 0;
    height: 10%;
    text-align: center;
  }
  }

 .front1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:48px;
   border-radius: 10px;
   background-color: #4e60ff88;
   position:absolute;
   top:20px;
   left:50%;
   filter: drop-shadow(50%);
   z-index: 1;
   transform: rotate(-10deg);
 }
 @media screen and (max-width: 950px){
    .front1::before {
      display: none;
  }
  }
 .back1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:28px;
   border-radius: 10px;
   background-color: #4e60ff88;
   position:absolute;
   top:89%;
   left:30%;
   filter: drop-shadow(50%);
   z-index: -1;
   transform: rotate(18deg);
 }
 @media screen and (max-width: 950px){
    .back1::before {
      display: none;
  }
  }
  
  .header_left_title {
    position: absolute;
    width: 15%;
    left: 8%;
    top: 3.5%;
    text-align: ce1nter;
    transform: translateY(-50%);
    color: #4e60ffb6;
    z-index: 3;
    font-family: arial black;
  }
  @media screen and (max-width: 950px){
    .header_left_title {
      z-index: 2;
      background: transparent;
      top: 3%;
      width: 20%;
  }
  }
  .header_left_home {
    display: inline-block;
    position: absolute;
    background: #ffffff;
    font-size: 1.5vw;
    margin: 0 1%;
    padding: 10px;
    border: 1px solid #CCC;
    width: 6%;
    height: 5%;
    left: 8.5%;
    top: 77px;
    z-index: 3;
    font-weight: bold;
    border-top: 3px solid #4e60ff;
		color: #4e60ff7a;
  }
  @media screen and (max-width: 950px){
    .header_left_home {
      left: 80%;
      top: 3%;
      width: 10%;
    }
  }
  .front {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    background: transparent;
    font-size: 2vw;
    text-shadow: 3px 3px 0 #4e60ff88;
  }
  @media screen and (max-width: 950px){
    .front {
      font-size: 3vw;
  }
  }
  .front1 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    display: inline-block;
    background: transparent;
    font-size: 2vw;
    transform: rotate(-25deg);
    margin-top: 50px;
    text-shadow: 3px 3px 0 #4e60ff88;
  }
  @media screen and (max-width: 950px){
    .front1 {
      font-size: 3vw;
  }
  }
  .middle {
    display: inline-block;
    background: transparent;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #3c4eee9d;
    -webkit-text-stroke: 1px rgb(116, 116, 116);

    padding: 0 0 10px;
    background: transparent;
    font-size: 3.25vw;
  }
  @media screen and (max-width: 950px){
    .middle {
      font-size: 4.25vw;
  }
  }
  .back {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #4e60ff88;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
  }
  @media screen and (max-width: 950px){
    .back {
      font-size: 3vw;
  }
  }
  .back1 {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #4e60ff88;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
    transform: rotate(25deg);
    margin: 5px;
  }
  @media screen and (max-width: 950px){
    .back1 {
      font-size: 3vw;
  }
  }
  
.header_right_programing{
    position: absolute;
    width: 15%;
    left: 8%;
    top: 3.5%;
    text-align: ce1nter;
    transform: translateY(-50%);
    color: #4e60ffb6;
    font-size: 7vw;
    z-index: 1;
    font-family: arial black;
}
  .header_left_programing {
    display: inline-block;
    position: absolute;
    background: #ffffff;
    font-size: 1.5vw;
    margin: 0 1%;
    padding: 10px;
    border: 1px solid #CCC;
    border-top: 3px solid hsla(0, 100%, 66%, 0.705);
		color: hsla(0, 100%, 66%, 0.533);
    width: 6%;
    height: 5%;
    left: 8.5%;
    top: 77px;
    z-index: 3;
    font-weight: bold;
  }
  @media screen and (max-width: 950px){
    .header_left_programing {
      left: 80%;
      top: 3%;
      width: 10%;
    }
  }
  .programing-front {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 hsla(0, 100%, 66%, 0.533);
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    background: transparent;
    font-size: 2vw;
  }
  @media screen and (max-width: 950px){
    .programing-front {
      font-size: 3vw;
  }
  }
  .programing-front1 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 hsla(0, 100%, 66%, 0.533);
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    display: inline-block;
    background: transparent;
    font-size: 2vw;
    transform: rotate(-25deg);
    margin-top: 50px;
  }
  @media screen and (max-width: 950px){
    .programing-front1 {
      font-size: 3vw;
  }
  }
  .programing-middle {
    display: inline-block;
    background: transparent;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 hsla(0, 94%, 50%, 0.603);
    -webkit-text-stroke: 1px rgb(116, 116, 116);

    padding: 0 0 10px;
    background: transparent;
    font-size: 3.25vw;
  }
   @media screen and (max-width: 950px){
    .programing-middle {
      font-size: 4.25vw;
  }
  }
  .programing-back {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 hsla(0, 100%, 66%, 0.533);
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
  }
   @media screen and (max-width: 950px){
    .programing-back {
      font-size: 3vw;
  }
  }
  .programing-back1 {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 hsla(0, 100%, 66%, 0.533);
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
    transform: rotate(25deg);
    margin: 5px;
  }
   @media screen and (max-width: 950px){
    .programing-back1 {
      font-size: 3vw;
  }
  }
  
  .programing-front1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:48px;
   border-radius: 10px;
   background-color: hsla(0, 100%, 66%, 0.533);
   position:absolute;
   top:20px;
   left:50%;
   filter: drop-shadow(50%);
   z-index: 1;
   transform: rotate(-10deg);
 }
 @media screen and (max-width: 950px){
    .programing-front1::before {
      display: none;
  }
  }
 .programing-back1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:28px;
   border-radius: 10px;
   background-color: hsla(0, 100%, 66%, 0.533);
   position:absolute;
   top:89%;
   left:30%;
   filter: drop-shadow(50%);
   z-index: -1;
   transform: rotate(18deg);
 }
 @media screen and (max-width: 950px){
    .programing-back1::before {
      display: none;
  }
  }

 .header_right_products{
    position: absolute;
    position: fixed;
    width: 15%;
    left: 8%;
    top: 3.5%;
    text-align: ce1nter;
    transform: translateY(-50%);
    color: #1bdf1471;
    font-size: 7vw;
    z-index: 1;
    font-family: arial black;
}
  .header_left_products {
    display: inline-block;
    position: absolute;
    color: #4e60ff;
    background: #ffffff;
    /*transform: rotate(-10deg);*/
    font-size: 1.5vw;
    margin: 0 1%;
    padding: 10px;
    border: 1px solid #CCC;
    border-top: 3px solid #1bdf1471;
		color: #1bdf14d8;
    width: 6%;
    height: 5%;
    left: 8.5%;
    top: 77px;
    z-index: 3;
    font-weight: bold;
  }
  @media screen and (max-width: 950px){
    .header_left_products {
      left: 80%;
      top: 3%;
      width: 10%;
    }
  }
  .products-front {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #1bdf1471;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    background: transparent;
    font-size: 2vw;
  }
  .products-front1 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #1bdf1471;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    display: inline-block;
    background: transparent;
    font-size: 2vw;
    transform: rotate(-25deg);
    margin-top: 50px;
  }
  .products-middle {
    display: inline-block;
    background: transparent;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #1bdf14ec;
    -webkit-text-stroke: 1px rgb(116, 116, 116);
    padding: 0 0 10px;
    background: transparent;
    font-size: 3.25vw;
  }
  .products-back {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #1bdf1471;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
  }
  .products-back1 {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #1bdf1471;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
    transform: rotate(25deg);
    margin: 5px;
  }
  
  .products-front1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:48px;
   border-radius: 10px;
   background-color: #1bdf1471;
   position:absolute;
   top:20px;
   left:50%;
   filter: drop-shadow(50%);
   z-index: 1;
   transform: rotate(-10deg);
 }
 @media screen and (max-width: 950px){
    .products-front1::before {
      display: none;
    }
  }
 .products-back1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:28px;
   border-radius: 10px;
   background-color: #1bdf1471;
   position:absolute;
   top:89%;
   left:30%;
   filter: drop-shadow(50%);
   z-index: -1;
   transform: rotate(18deg);
 }
 @media screen and (max-width: 950px){
    .products-back1::before {
      display: none;
    }
  }
 
 

.header_right_design{
    position: absolute;
    position: fixed;
    width: 15%;
    left: 8%;
    top: 3.5%;
    text-align: ce1nter;
    transform: translateY(-50%);
    color: #00d0ec7a;
    font-size: 7vw;
    z-index: 1;
    font-family: arial black;
}
  .header_left_design {
    display: inline-block;
    position: absolute;
    background: #ffffff;
    font-size: 1.5vw;
    margin: 0 1%;
    padding: 10px;
    border: 1px solid #CCC;
    border-top: 3px solid #00d0ec7a;
		color: #00d0ece7;
    width: 6%;
    height: 5%;
    left: 8.5%;
    top: 77px;
    z-index: 3;
    font-weight: bold;
  }
  @media screen and (max-width: 950px){
    .header_left_design {
      left: 80%;
      top: 3%;
      width: 10%;
    }
  }
  .design-front {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #00d0ec7a;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    background: transparent;
    font-size: 2vw;
  }
  .design-front1 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #00d0ec7a;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    display: inline-block;
    background: transparent;
    font-size: 2vw;
    transform: rotate(-25deg);
    margin-top: 50px;
  }
  .design-middle {
    display: inline-block;
    background: transparent;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #00d0ecf5;
    -webkit-text-stroke: 1px rgb(116, 116, 116);
    padding: 0 0 10px;
    background: transparent;
    font-size: 3.25vw;
  }
  .design-back {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #00d0ec7a;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
  }
  .design-back1 {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #00d0ec7a;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
    transform: rotate(25deg);
    margin: 5px;
  }
  
  .design-front1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:48px;
   border-radius: 10px;
   background-color: #7395997a;
   position:absolute;
   top:20px;
   left:50%;
   filter: drop-shadow(50%);
   z-index: 1;
   transform: rotate(-10deg);
 }
 @media screen and (max-width: 950px) {
   .design-front1::before {
     display: none;
   }
 }
 .design-back1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:28px;
   border-radius: 10px;
   background-color: #7395997a;
   position:absolute;
   top:89%;
   left:30%;
   filter: drop-shadow(50%);
   z-index: -1;
   transform: rotate(18deg);
 }
 @media screen and (max-width: 950px) {
   .design-back1::before {
     display: none;
   }
 }

.header_right_more{
    position: absolute;
    position: fixed;
    width: 15%;
    left: 8%;
    top: 3.5%;
    text-align: ce1nter;
    transform: translateY(-50%);
    color: #f94eff70;
    font-size: 7vw;
    z-index: 1;
    font-family: arial black;
}
  .header_left_more {
    display: inline-block;
    position: absolute;
    background: #ffffff;
    font-size: 1.5vw;
    margin: 0 1%;
    padding: 10px;
    border: 1px solid #CCC;
    border-top: 3px solid #f94eff70;
		color: #f94effd0;
    width: 6%;
    height: 5%;
    left: 8.5%;
    top: 77px;
    z-index: 3;
    font-weight: bold;
  }
  @media screen and (max-width: 950px){
    .header_left_more {
      left: 80%;
      top: 3%;
      width: 10%;
    }
  }
  .more-front {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #f94eff70;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    background: transparent;
    font-size: 2vw;
  }
  .more-front1 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #f94eff70;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 10px;
    display: inline-block;
    background: transparent;
    font-size: 2vw;
    transform: rotate(-25deg);
    margin-top: 50px;
  }
  .more-middle {
    display: inline-block;
    background: transparent;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #f94effef;
    -webkit-text-stroke: 1px rgb(116, 116, 116);
    padding: 0 0 10px;
    background: transparent;
    font-size: 3.25vw;
  }
  .more-back {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #f94eff70;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
  }
  .more-back1 {
    display: inline-block;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    text-shadow: 3px 3px 0 #f94eff70;
    -webkit-text-stroke: 1px #888;
    padding: 0 0 1%;
    background: transparent;
    font-size: 2vw;
    transform: rotate(25deg);
    margin: 5px;
  }
  
  .more-front1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:48px;
   border-radius: 10px;
   background-color: #f94eff70;
   position:absolute;
   top:20px;
   left:50%;
   filter: drop-shadow(50%);
   z-index: 1;
   transform: rotate(-10deg);
 }
 @media screen and (max-width: 950px){
    .more-front1::before {
      display: none;
    }
  }
 .more-back1::before {
   content:"";
   display:inline-block;
   width:2px;
   height:28px;
   border-radius: 10px;
   background-color: #f94eff70;
   position:absolute;
   top:89%;
   left:30%;
   filter: drop-shadow(50%);
   z-index: -1;
   transform: rotate(18deg);
 }
 @media screen and (max-width: 950px){
     .more-back1::before {
      display: none;
    }
  }

  .header_right_home:after {
  content: '';
  position: absolute;
  left: 35%;
  bottom: 0;
  width: 30%;
  height: 3px;

}
.active:after {
  content: '';
  position: absolute;
  left: 35%;
  bottom: 0;
  width: 30%;
  height: 3px;
  background: repeating-linear-gradient(45deg, rgb(250, 135, 82), #7bd4e0 2px, #7fe07b, #f691fa 4px);
}
  .header_left02 {
    display: inline-block;
    position: absolute;
    color: #4e60ff;
    background: #ffffff;
    /*transform: rotate(-10deg);*/
    font-size: 1.5vw;
    margin: 0 1%;
    padding: 10px;
    border: 1px solid #CCC;
    border-top: 3px solid #4e60ff;
		color: #ffb24e;
    width: 25%;
    height: 70%;
    left: 35%;
    top: 20%;
    z-index: 1;
  }
  .header_left-sub-top {
    display: inline-block;
    position: absolute;
    background: transparent;
    left: 0;
    top: 0;
    font-size: 0.1vw;
  }
  .header_left-sub-bottom {
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 0.1vw;
    z-index: -1;
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
  
  .menu_button {
    margin-left: 2.5%;
    position: fixed;
    background: #f7f7f7;
    width: 20%;
    top: 20%;
    padding: 2%;
    height: 60%;
    text-align: center;
    box-shadow:0px 0px 5px 0px rgb(88, 88, 88);
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }
  @media screen and (max-width: 950px){
		.menu_button {
    position: fixed;
    display: block;
    background: #f7f7f7;
    width: 95%;
    left: 0;
    top: 90%;
    height: 10%;
    text-align: center;
    box-shadow:0px 0px 5px 0px rgb(88, 88, 88);
    display: flex;
    flex-direction:row;
    z-index: 2;
  }
	}
  button {
    width: 100%;
  }
  button:focus {
    outline: 0;
  }
  .home {
    display: inline-block;
    padding: 0.5em 0.5%;
    text-decoration: none;
    background: white;
    border-left: solid 6px #919cff;/*左線*/
    color: #919cff;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    font-size: 1.5vw;
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
    background: white;
    border-left: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    font-size: 1.5vw;
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
    background: white;
    border-left: solid 6px #7fe07b;/*左線*/
    color: #7fe07b;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    font-size: 1.5vw;
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
    padding: 0.5em 1%;
    text-decoration: none;
    background: white;
    border-left: solid 6px #7bd4e0;/*左線*/
    color: #7bd4e0;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    font-size: 1.5vw;
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
    padding: 0.5em 1%;
    text-decoration: none;
    background: white;
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
    top: 20%;
  }
  @media screen and (max-width: 950px){
		.contents {
    display: inline-block;
    right: 5%;
    width: 90%;
    top: 20%;
    height: 50%;
    margin-bottom: 30%;
  }
	}
</style>
