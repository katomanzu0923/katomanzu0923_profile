<template>
	<div class="programing_message">
		<h1>フロントエンド</h1>
		<div class="front">
			<div class="html">
				<div class="html_main">
					HTML
				</div>
				<div class="html_content">
					私がHTMLで学んだことは以下のことです.<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします
				</div>
			</div>
			<div class="css">
				<div class="css_top">
					CSS
				</div>
				<div class="css_content">
					私がHTMLで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします
				</div>
			</div>
			<div class="scss">
				<div class="scss_top">SCSS</div>
				<div class="scss_content">
					私がscssで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします
				</div>
			</div>
			<div class="javascript">
				<div class="javascript_top">
					Javascript
				</div>
				<div class="javascript_content">
					私がjavascriptで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします				</div>
			</div>
			<div class="jquery">
				<div class="jquery_top">
					jQuery
				</div>
				<div class="jquery_content">
					私がjqueryで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします
				</div>
			</div>
			<div class="vue">
				<div class="vue_top">
					Vue.js
				</div>
				<div class="vue_content">
					私がvueで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします
				</div>
			</div>

		</div>
		<h2>サーバーサイド</h2>
		<div class="server"> 
			<div class="ruby">
				<div class="ruby_top">
					Ruby
				</div>
				<div class="ruby_content">
					私がRubyで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします
				</div>
			</div>
			<div class="mysql">
				<div class="mysql_top">
					mysql
				</div>
				<div class="mysql_content">
					私がmysqlで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
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
	}
	.mysql_content {
		background: transparent;
		padding: 10%;
		text-align: start;
	}
</style>