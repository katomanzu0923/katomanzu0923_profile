<template>
	<div class="home_message">
		<h2>動的アプリケーション</h2>
		<div class="html">
			<div class="html_main">
					Train Matching
				</div>
				<div class="readmore">
					私がHTMLで学んだことは以下のことです。<br>
					そのため此のときに此のようなことに苦労しました<br>
				</div>
				<div class="readmore">	
          <input id="check1" class="readmore-check" type="checkbox">
          <div class="readmore-content">
          <span class="aa" v-bind:class='{active:isActiveProduct01}'>
          <div class="sub-message-none" v-bind:class='{sub:isActiveProduct01}'>
						
					</div>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActiveProduct01=!isActiveProduct01' class="readmore-label" for="check1">
					</label>
        </div>
		</div>
		<h2>静的アプリケーション</h2>
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
          <span class="aa" v-bind:class='{active:isActiveProduct02}'>
          <div class="sub-message-none" v-bind:class='{sub:isActiveProduct02}'>
						工夫した点
					</div>
					<br>
					また、HTMLを学んだ理由としては</span><br>
					そのため此のときに此のようなことに苦労しました<br>
					頑張ろうと思いました。<br>
					また、HTMLを学んだ理由としては
          </div>
          <label v-on:click='isActiveProduct02=!isActiveProduct02' class="readmore-label" for="check2">
					</label>
        </div>
		</div>
		<h2>and more</h2>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isActiveProduct01: false,
      isActiveProduct02: false
    }
  }
}
</script>
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
	.readmore{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
    border: 1px solid #CCC;
		text-align: start;
		color: #7fe07b;
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
    background-color: #1bdf14;
    border-radius: 10px;
		text-align: center;
		color: #f7f7f7;
}
.readmore-label:before{
    content: '↓作成したアプリの詳細↓';
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
	color: #1bdf14;
	text-align: center;
}
</style>


<img src="@/assets/n_icon_info.png" class="f">
          <div class="home_profile_left_content">
            <div class="right">
              <a href="mailto:katomanzu86@gmail.com"><img src="@/assets/download.png" class="ff"></a>
            </div>
            <div class="left">
              <a href="https://github.com/katomanzu0923"><img src="@/assets/download.png" alt="次へ" class="ff"></a>
            </div>
          </div>