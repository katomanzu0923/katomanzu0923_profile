<template>
	<div class="programing_message">
		<h1>フロントエンド</h1>
		<div class="front">
			<div class="html">
				<div class="html_top">
					HTML
				</div>
				<div class="html_content">
					<h3>学んだ内容</h3>
					<p>私がHTMLで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします</p>
				</div>
			</div>
			<div class="css">
				<div class="css_top">
					CSS
				</div>
				<div class="css_content">
					<h3>学んだ内容</h3>
					<p>私がHTMLで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします</p>
				</div>
			</div>
			<div class="scss">
				<div class="scss_top">SCSS</div>
				<div class="scss_content">
					<h3>学んだ内容</h3>
					<p>私がscssで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします</p>
				</div>
			</div>
			<div class="javascript">
				<div class="javascript_top">
					Javascript
				</div>
				<div class="javascript_content">
					<h3>学んだ内容</h3>
					<p>私がjavascriptで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします</p>
				</div>
			</div>
			<div class="jquery">
				<div class="jquery_top">
					jQuery
				</div>
				<div class="jquery_content">
					<h3>学んだ内容</h3>
					<p>私がjqueryで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします</p>
				</div>
			</div>
			<div class="vue">
				<div class="vue_top">
					Vue.js
				</div>
				<div class="vue_content">
					<h3>学んだ内容</h3>
					<p>私がvueで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします</p>
				</div>
			</div>

		</div>
		<h1>サーバーサイド</h1>
		<div class="server"> 
			<div class="ruby">
				<div class="ruby_top">
					Ruby
				</div>
				<div class="ruby_content">
					<h3>学んだ内容</h3>
					<p>私がRubyで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします</p>
				</div>
			</div>
			<div class="mysql">
				<div class="mysql_top">
					mysql
				</div>
				<div class="mysql_content">
					<h3>学んだ内容</h3>
					<p>私がmysqlで学んだことは以下のことです<br>
					学んだ内容としては以下のようなことを学びました<br>
					詳しkは以下のgithubにて多くのhtmlコードがありますのでご確認お願いします</p>
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
	.html {
		flex-basis: 40%;
		position: relative;
	}
	.html_top {
		position: absolute;
		top: -4%;
		width: 30%;
		left: 35%;
	}
	.html_content {
		border:solid red;
	}
	.css {
		flex-basis: 40%;
		position: relative;
	}
	.css_top {
		position: absolute;
		top: -4%;
		width: 25%;
		left: 37.5%;
	}
	.css_content {
		border:solid rgb(0, 247, 255);
	}
	.scss {
		flex-basis: 40%;
		position: relative;
		margin-top: 5%;
	}
	.scss_top {
		position: absolute;
		top: -4%;
		width: 30%;
		left: 35%;
	}
	.scss_content {
		border:solid rgb(255, 80, 226);
	}
	.javascript {
		flex-basis: 40%;
		position: relative;
		margin-top: 5%;
	}
	.javascript_top {
		position: absolute;
		top: -4%;
		width: 50%;
		left: 25%;
	}
	.javascript_content {
		border:solid rgb(204, 255, 136);
	}
	.jquery {
		flex-basis: 40%;
		position: relative;
		margin-top: 5%;
	}
	.jquery_top {
		position: absolute;
		top: -4%;
		width: 40%;
		left: 30%;
	}
	.jquery_content {
		border:solid rgb(255, 230, 0);
	}
	.vue {
		flex-basis: 40%;
		position: relative;
		margin-top: 5%;
	}
	.vue_top {
		position: absolute;
		top: -4%;
		width: 30%;
		left: 35%;
	}
	.vue_content {
		border:solid rgb(7, 2, 75);
	}

	.server {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.ruby {
		flex-basis: 40%;
		position: relative;
		margin-top: 5%;
	}
	.ruby_top {
		position: absolute;
		top: -4%;
		width: 30%;
		left: 35%;
	}
	.ruby_content {
		border:solid rgb(7, 2, 75);
	}
	.mysql {
		flex-basis: 40%;
		position: relative;
		margin-top: 5%;
	}
	.mysql_top {
		position: absolute;
		top: -4%;
		width: 30%;
		left: 35%;
	}
	.mysql_content {
		border:solid rgb(7, 2, 75);
	}
</style>