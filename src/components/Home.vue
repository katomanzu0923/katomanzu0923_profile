<template>
	<div class="home_message">
		<h2>自己紹介</h2>
		<div class="html">
				<div class="html_main">
					学習歴
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
	</div>
</template>
<style scoped>
.readmore{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
    border: 1px solid #CCC;
		text-align: start;
		color: #919cff;
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
    background-color: #4e5fff;
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
  .programing_message {
		position: absolute;
		color: black;
		text-align: center;
	}

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
		color: #4e5fff;
	}
	h2::before {
		position: absolute;
    content: '';
    top: 0;
    right: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #919cff;
    border-left: none;
	}
 h2::after {
		position: absolute;
    content: '';
    top: 0;
    left: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #919cff;
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
    border-top: solid 6px #4e5fff;
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
	}
	.html_main {
		background: transparent;
		color: #4e5fff;
	}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
		color: #919cff;
	}
</style>