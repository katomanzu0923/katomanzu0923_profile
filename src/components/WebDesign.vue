<template>
	<div class="home_message">
		<div class="design_top">
			<h2>photoshop</h2>
			<div class="html">
				<div class="html_main">
					バナー
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>
				<div class="readmore">	
          <input id="check1" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActivedesign01}'>
          <div class="sub-message-none" v-bind:class='{sub:isActivedesign01}'>
						工夫した点
					</div>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActivedesign01=!isActivedesign01' class="readmore-label" for="check1">
					</label>
        </div>
			</div>
			<h2>adobe xd</h2>
			<div class="html">
				<div class="html_main">
					Train Matching
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>
				<div class="readmore">	
          <input id="check2" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActivedesign02}'>
          <div class="sub-message-none" v-bind:class='{sub:isActivedesign02}'>
						工夫した点
					</div>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActivedesign02=!isActivedesign02' class="readmore-label" for="check2">
					</label>
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



<h1 class="line">TECH::CHANP</h1>
          <div class="topic1">
            <div class="content1">
              マークアップ言語、プログラミング言語の各種の働きは理解したがその言語の運用方法が理解できない状態
            </div>
            <div class="a">
            </div>
            <div class="content2">
              マークアップ及びプログラミング言語を用いたwebアプリの開発、自身のpcをサーバーとした開発環境、DBを用いた動的アプリケーション、githubを用いた開発環境、レンタルサーバーを用いた本番環境での運用が出来る状態へと成長。
            </div>
          </div>
          <h1 class="line">Udemy</h1>
          <div class="topic2">
            <div class="content1">
              ruby on rails を用いて一通りアプリケーションをゼロから開発出来るようになった状態
            </div>
            <div class="a">
            </div>
            <div class="content2">
              ただ作れる状態から開発に多く利用されている状態への成長へ学習。scssやモダンなjsであるvue.jsを取得し知識を広げる状態に至っています
            </div>
          </div>
<style scoped>
  .home_message {
		position: absolute;
		color: black;
		text-align: center;
	}
	h2 {
		text-align: center;
    width: 60%;
		position: relative;
    display: inline-block;
    padding: 0 5px;
		margin-bottom: 5%;
		color: #029cb1;
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
	.html {
		flex-basis: 40%;
		position: relative;
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #029cb1;/*左線*/
    color: #029cb1;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
	}
	.html_main {
		background: transparent;
		color: #029cb1;
	}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
		color: #7bd4e0;
	}
	.readmore{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
    border: 1px solid #CCC;
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
    background-color: #029cb1;
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
	color: #029cb1;
	text-align: center;
}
</style>