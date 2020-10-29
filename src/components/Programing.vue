<template>
	<div class="programing_message">
		<h1>フロントエンド</h1>
		<div class="furont">
			<div class="html"></div>
			<div class="css"></div>
			<div class="scss"></div>
			<div class="javascript"></div>
			<div class="jquery"></div>
			<div class="vue"></div>
		</div>
		<div class="server"> 
			<h1>サーバーサイド</h1>
			<div class="ruby">ruby</div>
			<div class="mysql">mysql</div>
		</div>
	</div>
</template>

<style scoped>
  .programing_message {
		position: absolute;
		color: black;
		text-align: center;
	}

	.furont {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 5%;
	}
	.html {
		background: rgb(172, 128, 97);
		padding: 15%;
	}
	.css {
		background: rgb(80, 255, 95);
		padding: 15%;
	}
	.scss {
		background: cornflowerblue;
		padding: 15%;
	}
	.javascript {
		background: cornsilk;
		padding: 15%;
	}
	.jquery {
		background: crimson;
		padding: 15%;
	}
	.vue {
		background: darkblue;
		padding: 15%;
	}


	.server {
		display: flex;
		/*display: block;*/
		flex-wrap: wrap;
		justify-content: center;
	}
	.ruby {
	
		background: coral;
	}
	.mysql {
	
		background: red;
	}
</style>