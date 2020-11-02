<template>
	<div class="home_message">
		<h2>動的アプリケーション</h2>
		<div class="html">
			<div class="html_main">
				yamada
			</div>
		</div>
		<h2>静的アプリケーション</h2>
		<div class="html">
			<div class="html_main">
				aaaa
			</div>
		</div>
		<h2>and more</h2>
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
		color: #1bdf14;
		margin-top: 5%;
	}
	h2::before {
		position: absolute;
    content: '';
    top: 0;
    right: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #7fe07b;
    border-left: none;
	}
 h2::after {
		position: absolute;
    content: '';
    top: 0;
    left: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #7fe07b;
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
    border-top: solid 6px #1bdf14;/*左線*/
    color: #1bdf14;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
	}
	.html_main {
		background: transparent;
		color: #1bdf14;
	}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
		color: #7fe07b;
	}
</style>