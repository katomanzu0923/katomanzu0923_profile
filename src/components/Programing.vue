<template>
	<div class="programing_message">
		<h1>フロントエンド</h1>
		<div class="front">
			<div class="html">
				<div class="html_main">
					HTML
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>
				<div class="readmore">	
          <input id="check1" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActive01}'>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActive01=!isActive01' class="readmore-label" for="check1">
					</label>
        </div>
			</div>
			<div class="css">
				<div class="css_top">
					CSS
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>	
				<div class="readmore">
          <input id="check2" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActive01}'>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActive01=!isActive01' class="readmore-label" for="check2">
					</label>
        </div>
			</div>
			<div class="scss">
				<div class="scss_top">SCSS</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>	
				<div class="readmore">
          <input id="check3" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActive01}'>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActive01=!isActive01' class="readmore-label" for="check3">
					</label>
        </div>
			</div>
			<div class="javascript">
				<div class="javascript_top">
					Javascript
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>	
				<div class="readmore">
          <input id="check4" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{su:isActive01}'>
					<div class="sub-message-none" v-bind:class='{sub:isActive01}'>
						工夫した点
					</div>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActive01=!isActive01' class="readmore-label" for="check4">
					</label>
        </div>
			</div>
			<div class="jquery">
				<div class="jquery_top">
					jQuery
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>	
				<div class="readmore">
          <input id="check5" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActive01}'>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActive01=!isActive01' class="readmore-label" for="check5">
					</label>
        </div>
			</div>
			<div class="vue">
				<div class="vue_top">
					Vue.js
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>	
				<div class="readmore">
          <input id="check6" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActive01}'>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActive01=!isActive01' class="readmore-label" for="check6">
					</label>
        </div>
			</div>

		</div>
		<h2>サーバーサイド</h2>
		<div class="server"> 
			<div class="ruby">
				<div class="ruby_top">
					Ruby
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>	
				<div class="readmore">
          <input id="check7" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActive01}'>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActive01=!isActive01' class="readmore-label" for="check7">
					</label>
        </div>
			</div>
			<div class="mysql">
				<div class="mysql_top">
					mysql
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>	
				<div class="readmore">
          <input id="check8" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActive01}'>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActive01=!isActive01' class="readmore-label" for="check8">
					</label>
        </div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
			return {
				isActive01: false
			}
		}
}
</script>
  
</script>

<style scoped>
  .readmore{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
    border: 1px solid #CCC;
		text-align: start;
		color: #ff7d5c;
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
    background-color: #fa5252;
    border-radius: 10px;
		text-align: center;
		color: #f7f7f7;
}
.readmore-label:before{
    content: '↓工夫した点↓';
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
	color: #ff4618;
	text-align: center;
}
  .programing_message {
		position: absolute;
		color: black;
		text-align: center;
	}


	.front {
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
	}
	.html_main {
		background: transparent;
		color: #fa5252;
	}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
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
    border-top: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
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
    border: 5px solid #ff7c5c;
    border-right: none;
		margin-bottom: 5%;
	}
	h2 {
		font-size: 2rem;
		margin-top: 5%;
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
    border-top: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
		margin-top: 5%;
	}
	.mysql_top {
		background: transparent;
		color:#fa5252;
	}
	.mysql_content {
		background: transparent;
		padding: 10%;
		text-align: start;
	}
</style>