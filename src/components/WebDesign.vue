<template>
	<div class="home_message">
    <div  class="header_left">
      Photoshop
    </div>
		<div class="design_top">
      <div class="design">
				<div class="design_main">
					<h3>学んだ理由</h3>
				</div>
				<div class="readmore">
          <div>
            元々Photoshopに関しては趣味で写真撮影、動画編集を行っており、その時にフォトショップが使えるようになりました。<br>
            adobe xdに関してデザイン領域にも関心があり、プロトタイプを作成してからの方がフロントへの理解が深まるのではないかと思いadob xo を学びました。
          </div>
				</div>
			</div>
			<div class="design">
				<div class="design_main">
					Web制作に利用した作例
				</div>
				<div class="design_content">
					<div class="design_content_body">
            <div class="a01">
              <img src="@/assets/name2.png" alt="次へ" class="jpf">
                <div class="design_content_coment">
                  ・CSSだけでは不可能なボタンを作成。
                </div>
            </div>
            <div class="a02">
              <img src="@/assets/name3.png" alt="次へ" class="jpf">
                <div class="design_content_coment">
                  ・CSSだけでは不可能なバナーを作成。
                </div>
            </div>
          </div>
          <div class="readmore_more">	
          <input id="check1" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <div class="sub-message-none" v-bind:class='{sub:isActivedesign01}'>
						他の作例
					</div>
            <img src="@/assets/login_en_path.png" alt="次へ" class="enf">
            <img src="@/assets/login_zh_path.png" alt="次へ" class="zhf">
          </div>
          <label v-on:click='isActivedesign01=!isActivedesign01' class="readmore-label" for="check1">
					</label>
        </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data(){
    return {
      isActivedesign01: false,
      isActivedesign02: false
    }
  }
}
</script>



<style scoped >
  .a01 {
    display: inline-block;
    text-align: center;
    height: 100%;
  }
  .a02 {
    display: inline-block;
    text-align: center;
    height: 100%;
  }
  .home_message {
		position: absolute;
		color: black;
		text-align: center;
	}
  .header_left {
    display: inline-block;
    color: #4e60ff;
    background: #ffffff;
		padding: 1%;
    /*transform: rotate(-10deg);*/
    font-size: 2vw;
    margin-bottom: 5%;
    border: 1px solid #CCC;
    border-top: 3px solid #00d1ec;
		color: #00d1ec;
    width: 40%;
    height: 5%;
    left: 48%;
    top: 5%;
    z-index: 1;
		font-weight: bold;
  }
  .day_left::before {
   content:"";
   display:inline-block;
   width:3px;
   height:90px;
   background-color: rgba(85, 82, 81, 0.514);
   position:absolute;
   top:-5%;
   left:35%;
   filter: drop-shadow(50%);
   z-index: -1;
 }
 .day_right::before {
   content:"";
   display:inline-block;
   width:3px;
   height:90px;
   background-color: rgba(85, 82, 81, 0.514);
   position:absolute;
   top:-5%;
   left:65%;
   filter: drop-shadow(50%);
   z-index: -11;
 }
 .header_left01 {
    display: inline-block;
    color: #4e60ff;
    background: #ffffff;
		padding: 1%;
    /*transform: rotate(-10deg);*/
    font-size: 2vw;
    margin-bottom: 3%;
    border: 1px solid #CCC;
    border-top: 3px solid #00d1ec;
		color: #00d1ec;
    width: 40%;
    height: 5%;
    left: 38%;
    top: 5%;
    font-weight: bold;
    z-index: 3;
  }
 .day_left01::before {
   content:"";
   display:inline-block;
   width:3px;
   height:60px;
   background-color: rgba(85, 82, 81, 0.514);
   position:absolute;
   top:100%;
   left:40%;
   filter: drop-shadow(50%);
   z-index: 1;
 }
 .day_right01::before {
   content:"";
   display:inline-block;
   width:3px;
   height:60px;
   background-color: rgba(85, 82, 81, 0.514);
   position:absolute;
   top:100%;
   left:60%;
   filter: drop-shadow(50%);
   z-index: 0;
 }
  .jpf {
    width: 50%;
    height: 20%;
    background: transparent;
    border:solid 1px black;
  }
  .enf {
    width: 30%;
    height: 30%;
  }
  .zhf {
    width: 30%;
    height: 30%;
  }
  .design_content_body {
    position: relative;
    width: 100%;
    display: flex;
  }
  .design_content_coment {
    height: 100%;
  }
  h3 {
    text-align: center;
    background: transparent;
    border-bottom: 1px solid #7bd4e0;
  }
	h2 {
		text-align: center;
    width: 60%;
		position: relative;
    display: inline-block;
    padding: 0 5px;
		margin-bottom: 5%;
		color: #08d5f0;
		margin-top: 5%;
	}
	h2::before {
		position: absolute;
    content: '';
    top: 0;
    right: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #7bd4e0;
    border-left: none;
	}
 h2::after {
		position: absolute;
    content: '';
    top: 0;
    left: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #7bd4e0;
    border-right: none;
		margin-bottom: 5%;
	}
	.design {
		flex-basis: 40%;
		position: relative;
    display: block;
    padding: 0.5em 1em;
    margin-bottom: 5%;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #00d1ec;/*左線*/
    color: #029cb1;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
	}
	.design_main {
		background: transparent;
		color: #00d1ec;
	}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
		color: #7bd4e0;
	}
	.design_content{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
    border: 1px solid #CCC;
		text-align: start;
		color: #7bd4e0;
}
.design_content_content_messe {
  display: inline-block;
}
.readmore_more {
  position: relative;
  box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
  padding: 10px;
	text-align: start;
	color: #7bd4e0;
}
.readmore-content{
    position: relative;
    overflow: hidden;
    /*以下お好み*/
    /*高さの初期値*/
    height: 20px;
}
.readmore-content::before {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    content: "";
    height: 50px;
    background: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.8) 10%, #fff 100%);
    background: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.8) 10%, #fff 10%);
}
.readmore-label{
    display: table;
    bottom: 5px;
    position: absolute;
    bottom: 5px;
    left: 50%;
		width: 60%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    margin: 0 auto;
    z-index: 2;
    padding: 0 10px;
    background-color:#00d1ec;
    border-radius: 10px;
		text-align: center;
		color: #f7f7f7;
}
.readmore-label:before{
    content: '↓作例↓';
}
.readmore-check{
    display: none;
}
.readmore-check:checked ~ .readmore-label{
    position: static;
    transform: translateX(0);
    -webkit-transform: translateX(0);
}
.readmore-check:checked ~ .readmore-label:before{
    content: '閉じる';
}
.readmore-check:checked ~ .readmore-content{
    height: auto;
}
.readmore-check:checked ~ .readmore-content::before {
    display: none;
}
.sub-message-none {
	filter: opacity(0%);
}
.sub {
	filter: opacity(100%);
	color: #00d1ec;
	text-align: center;
  border-top: 3px solid #00d1ec;
  padding-top: 1%;
}
</style>