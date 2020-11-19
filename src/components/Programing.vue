<template>
	<div class="programing_message">
		<div  class="programing-header">
      フロントエンド
    </div>
		<div class="programing-body">
			<div class="html">
				<div class="html_main">
					HTML
				</div>
				<div class="readmore">
					<p>私はhtmlでは積み木の法則aタグやボタンタグなどを理解することができました</p>
					<div class="readmore_more">	
            <input id="check1" class="readmore-check" type="checkbox">
          <div class="readmore-content">
            <div class="sub-message-none" v-bind:class='{sub:isActiveHtml}'>
							工夫した点
						</div>
						<p class="re-content">HTMLを学ぶ際に工夫したことはコードの可読性を高めることです。属性名を後で別の人が読んでもわかるようにする記述することによって再現性の高いコードを記述することができました</p>
          </div>
          <label v-on:click='isActiveHtml=!isActiveHtml' class="programing-label" for="check1"></label>
        </div>
				</div>
			</div>
			<div class="css">
				<div class="css_top">
					CSS
				</div>
				<div class="readmore">
					<p>私はCSSで学んだことはhtmlの装飾方法です。特にその中でもブレイクポインを用いたモバイル対応や擬似要素を用いた発展的な手法も積極的に取り入れ学習しました</p>
					<div class="readmore_more">
          <input id="check2" class="readmore-check" type="checkbox">
          <div class="readmore-content">
						<div class="sub-message-none" v-bind:class='{sub:isActiveCss}'>
							工夫した点
						</div>
						<p class="re-content">を学ぶ際に工夫したことは記述を一つ一つ理解したことで。開発を行う中で複雑なcssを検索して見つけ記述していく中でこの記述はこの意味があると一つ一つコピペで終わらせずに理解に試みました。</p>
          </div>
          <label v-on:click='isActiveCss=!isActiveCss' class="programing-label" for="check2">
					</label>
        </div>
				</div>	
			</div>
			<div class="scss">
				<div class="scss_top">
					SCSS
				</div>
				<div class="readmore">
					<p>私がSCSSで学んだことは効率的なCSSの記述手法です。<br>変数を用いたコードの短縮などCSSでは手の届かない痒いところ記述する手法を身に付けました。</p>
					<div class="readmore_more">
          <input id="check3" class="readmore-check" type="checkbox">
          <div class="readmore-content">
            <div class="sub-message-none" v-bind:class='{sub:isActiveScss}'>
							工夫した点
						</div>
						<p class="re-content">SCSSを学ぶ際に工夫したことは必ずコンパイルされた後のcssを見返したことです。また、scssを学ぶ前のcssとscssを見比べることによってここがより可読性の高い設計ができると振り返りを多く行いました</p>
          </div>
          <label v-on:click='isActiveScss=!isActiveScss' class="programing-label" for="check3">
					</label>
        </div>
				</div>	
			</div>
			<div class="javascript">
				<div class="javascript_top">
					Javascript
				</div>
				<div class="readmore">
					<p>私がjavascriptで学んだことは変数の定義の仕方からdomという概念まで基本的なことから非同期通信など幅広く学びました。</p>
					<div class="readmore_more">
          <input id="check4" class="readmore-check" type="checkbox">
          <div class="readmore-content">
            <span class="aa" v-bind:class='{active:isActiveJavascript}'><div class="sub-message-none" v-bind:class='{sub:isActiveJavascript}'>工夫した点</div>
						<p class="re-content">Javascriptを学ぶ際に工夫したことは検証ツールを必ず用いたことです。イベントを発火するたびに要素が取れているかなど確認しJavascriptにおけるライサイクルを理解することに執着しました</p></span>
          </div>
          <label v-on:click='isActiveJavascript=!isActiveJavascript' class="programing-label" for="check4">
					</label>
        </div>
				</div>	
			</div>
			<div class="jquery">
				<div class="jquery_top">
					jQuery
				</div>
				<div class="readmore">
					<p>私はjqueryではjavascriptの簡易的で使いやすい運用を学び実践することができました</p>
					<div class="readmore_more">
          <input id="check5" class="readmore-check" type="checkbox">
          <div class="readmore-content">
            <span class="aa" v-bind:class='{active:isActiveJquery}'>
							<div class="sub-message-none" v-bind:class='{sub:isActiveJquery}'>
								工夫した点</div>
								<p class="re-content">jQueryを学ぶ際に工夫したことはJSFiddleを多用したことです。実装する前に毎回JSFiddleで動きを確認しどの要素に対してどのイベントを起こすのが適切か確認しながら導入を進めました</p>
						</span>
          </div>
          <label v-on:click='isActiveJquery=!isActiveJquery' class="programing-label" for="check5">
					</label>
        </div>
				</div>	
			</div>
			<div class="vue">
				<div class="vue_top">
					Vue.js
				</div>
				<div class="readmore">
					<p>私がVue.jsではモダンなフロント構築を学びました。componentや仮装dom、spaなど現在のフロント構築に必要な技術を学び、活かした記述を行いました</p>
					<div class="readmore_more"><input id="check6" class="readmore-check" type="checkbox">
          <div class="readmore-content">
					<div class="sub-message-none" v-bind:class='{sub:isActiveVue}'>
						工夫した点
					</div>
					<p class="re-content">Vue.jsを学ぶ際に工夫したことは仮想DOMの理解です。今後reactも学ぶ予定ですので両者に共通する仮想DOMの理解を徹底することに工夫しました</p>
          </div>
          <label v-on:click='isActiveVue=!isActiveVue' class="programing-label" for="check6">
					</label>
        </div>
				</div>
			</div>
		</div>
		<div  class="programing-header">
      サーバーサイド
    </div>
		<div class="programing-body"> 
			<div class="ruby">
				<div class="ruby_top">
					Ruby
				</div>
				<div class="readmore">
					<p>私がrubyで学んだことはobject思考のプログラム設計です。元々オブジェクト指向で作られrた言語であるためオブジェクト指向で理解しやすく、他のプログラミング言語にも考え方として応用できる考え方を学びました</p>
					<div class="readmore_more">
          <input id="check7" class="readmore-check" type="checkbox">
          <div class="readmore-content">
					<div class="sub-message-none" v-bind:class='{sub:isActiveRuby}'>
						工夫した点
					</div>
					<p class="re-content">Rubyを学ぶ際に私が工夫したことはエラーとの向き合い方です。サーバサイドの言語なのでエラーと向き合う場面が多く、一つづつ何が読み込めてないか徹底的にエラーと向き合いました</p>
          </div>
          <label v-on:click='isActiveRuby=!isActiveRuby' class="programing-label" for="check7">
					</label>
        </div>
				</div>	
			</div>
			<div class="mysql">
				<div class="mysql_top">
					Mysql
				</div>
				<div class="readmore">
					<p>私がmysqlで学んだことはdb設計です。sequelproを用いてdbを可視化しdbを適切に設計できるようになりました</p>
					<div class="readmore_more">
          <input id="check8" class="readmore-check" type="checkbox">
          <div class="readmore-content">
					<div class="sub-message-none" v-bind:class='{sub:isActiveMysql}'>
						工夫した点
					</div>
					<p class="re-content">私がmysqlで工夫したことは情報の洗い出しです。どうしても作り始める情報の修正を用いられました。そこであえて情報を広く取り修正を少なくすることを試みました</p>
          </div>
          <label @click='isActiveMysql=!isActiveMysql' class="programing-label" for="check8">
					</label>
        </div>
				</div>	
			</div>
		</div>
	</div>
</template>
<script>
  export default {
	data() {
			return {
				isActiveHtml: false,
				isActiveCss: false,
				isActiveScss: false,
				isActiveJavascript: false,
				isActiveJquery: false,
				isActiveVue: false,
				isActiveRuby: false,
				isActiveMysql: false
			}
		}
}
</script>

<style scoped>
p {
	text-indent: 1em;
	font-size: 1.5vw;
	padding-bottom: 2%;
	border-bottom: 1px double rgba(255, 0, 0, 0.329);
	margin-bottom: 2%;
}
@media screen and (max-width: 950px){
		p {
			margin-bottom: 0;
		}
	}


h2 {
		text-align: center;
    width: 60%;
		position: relative;
    display: inline-block;
    padding: 0 5px;
		margin-bottom: 5%;
		color: #ff4618;
	}
	h2::before {
		position: absolute;
    content: '';
    top: 0;
    right: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #ff7c5c;
    border-left: none;
	}
 h2::after {
		position: absolute;
    content: '';
    top: 0;
    left: 5px;
    width: 5px;
    height: 100%;
    border: 3px solid #ff7c5c;
    border-right: none;
		margin-bottom: 5%;
	}
	h2 {
		font-size: 2rem;
		margin-top: 5%;
	}
.re-content {
	padding: 3% 0; 
	margin-bottom: 2%;
}
.programing-header {
    display: inline-block;
    color: #4e60ff;
    background: #ffffff;
		padding: 1%;
    font-size: 2vw;
    border: 1px solid #CCC;
    border-top: 3px solid #fa5252;
		color: #fa5252;
    width: 40%;
    height: 5%;
    left: 48%;
    top: 5%;
    z-index: １;
		font-weight: bold;
	}
	.programing-body {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	@media screen and (max-width: 950px){
		.programing-body {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			flex-direction:column;
	}
	}
  
  .programing_message {
		position: absolute;
		color: black;
		text-align: center;
	}


	.programing-body {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		/*padding: 5%;*/
	}
	h1 {
		text-align: center;
    width: 60%;
		position: relative;
    display: inline-block;
    padding: 0 5px;
		margin-bottom: 5%;
		color: #ff4618;
	}
	h1::before {
		position: absolute;
    content: '';
    top: 0;
    right: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #ff7c5c;
    border-left: none;
	}
 h1::after {
		position: absolute;
    content: '';
    top: 0;
    left: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #ff7c5c;
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
    border-top: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
		margin-bottom: 5%;
	}
	.html_main {
		background: transparent;
		color: #fa5252;
	}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
		font-size: 2vw;
	}
	.css {
		flex-basis: 40%;
		position: relative;
		display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top:5% ;
	}
	@media screen and (max-width: 950px){
		.css {
			margin-top: 0;
		}
	}

	.css_top {
		background: transparent;
		color: #fa5252;
	}
	.css_content {
		background: transparent;
		padding: 10%;
		text-align: start;
	}
	.scss {
		flex-basis: 40%;
		position: relative;
		display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
	}

	.scss_top {
		background: transparent;
		color:#fa5252;
	}
	.scss_content {
		background: transparent;
		padding: 10%;
		text-align: start;
	}
	.javascript {
		flex-basis: 40%;
		position: relative;
		display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
	}
	.javascript_top {
		background: transparent;
		color:#fa5252;
	}
	.javascript_content {
		background: transparent;
		padding: 10%;
		text-align: start;
	}
	.jquery {
		flex-basis: 40%;
		position: relative;
		display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #ff7c5c;
    color: #ff7c5c;
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
		margin-bottom: 5%;
	}
	.jquery_top {
		background: transparent;
		color:#fa5252;
	}
	.jquery_content {
		background: transparent;
		padding: 10%;
		text-align: start;
	}
	.vue {
		flex-basis: 40%;
		position: relative;
		display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
		margin-bottom: 5%;
	}
	.vue_top {
		background: transparent;
		color:#fa5252;
	}
	.vue_content {
		background: transparent;
		padding: 10%;
		text-align: start;
	}
	
	.server {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.ruby {
		flex-basis: 40%;
		position: relative;
		display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
		margin-bottom: 5%;
	}
	.ruby_top {
		background: transparent;
		color:#fa5252;
	}
	.ruby_content {
		background: transparent;
		padding: 10%;
		text-align: start;
	}
	.mysql {
		flex-basis: 40%;
		position: relative;
		display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #ff7c5c;
    color: #ff7c5c;
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
		margin-bottom: 5%;
	}
	@media screen and (max-width: 950px){
		.mysql {
		margin-bottom: 30%;
	}
	}
	
	.mysql_top {
		background: transparent;
		color:#fa5252;
	}
	.mysql_content {
		background: transparent;
		padding: 10%;
		text-align: star
	}

.readmore{
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #ff7d5c;
		text-align: start;
		color: #ff7d5c;
		margin-bottom: 5%;
}
.readmore_more{
    position: relative;
    box-sizing: border-box;
    padding: 10px;
		text-align: start;
		color: #ff7d5c;
}
.readmore-content{
    position: relative;
    overflow: hidden;
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
.programing-label{
    display: table;
    bottom: 5px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    margin: 0 auto;
    z-index: 2;
    padding: 0 10px;
    background-color: #fa5252;
    border-radius: 10px;
		text-align: center;
		color: #f7f7f7;
		font-size: 1.5vw;
}
.programing-label:before{
    content: '↓工夫した点↓';
		font-size: 1.5vw;
}
.readmore-check{
    display: none;
}
.readmore-check:checked ~ .programing-label{
    position: static;
    transform: translateX(0);
    -webkit-transform: translateX(0);
}
.readmore-check:checked ~ .programing-label:before{
    content: '閉じる';
		font-size: 1.5vw;
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
    padding-top: 2%;
    display: table;
    margin: 0 auto;
    z-index: 2;
    padding: 0 10px;
    background-color: #fa5252;
    color: white;
    border-radius: 10px;
    text-align: center;
		font-size: 1.5vw;
  }
</style>