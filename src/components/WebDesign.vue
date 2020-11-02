<template>
	<div class="home_message">
		<div class="design_top">
			<h2>photoshop</h2>
			<div class="html">
				<div class="html_main">
					バナー
				</div>
				<div class="html_content">
					趣味の範囲でこれまで写真撮影や動画編集を行ってきており、そのなかで取得したのでフォトショップの技術です。<br>
			その技術を活かして、web制作ではバナーやコンテンツの作成など行ってきました。
				</div>
			</div>
			<h2>adobe xd</h2>
			<div class="html">
				<div class="html_main">
					adobe xd
				</div>
				<div class="html_content">
					web制作を行う上で必要であると考え、adobexdの習得に取り組みました
				</div>
			</div>
		</div>
	</div>
</template>

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
</style>