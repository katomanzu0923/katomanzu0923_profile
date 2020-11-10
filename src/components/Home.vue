<template>
	<div class="home_top">
		<h2>プロフィール</h2>
    <div class="home_main">
      <div class="home_title">
        自己紹介
      </div>
      <div class="home_profile">
        <div class="home_profile_left">
          <div class="en">
          </div>
          <div class="name">
            加藤貴大
          </div>
          <div class="home_profile_left_content">
            <div class="right">
              <a href="mailto:katomanzu86@gmail.com"><img src="@/assets/gmail-logo.png" class="ff"></a>
            </div>
            <div class="left">
              <a href="https://github.com/katomanzu0923"><img src="@/assets/download.png" alt="次へ" class="ff"></a>
            </div>
          </div>
        </div>
        <div class="home_profile_right">
          <div class="home_profile_right_top">
          </div>
          <div class="home_profile_right_content">
            昨年、既卒ながら新卒として就活を始めるも方向性が決めれず悩む日々。<br>
            そんな中webエンジニアとして活躍すべく、力をつけて就活に挑みたいと決意。<br>
            PProgate、TECH::CHANP、Udemyを経てフロントエンジニアを目指し就活中。
          </div>
        </div>
      </div>
		</div>
		<div class="home_main">
				<div class="home_title">
					学習歴
				</div>
				<div class="home_content">
          <h1>PProgate</h1>
          <div class="topic0">
            <div class="content1">
              HTMLとCSSがどのような働きも知らないという状態
            </div>
            <div class="a">
            </div>
            <div class="content2">
              環境が構築された状態で様々な言語がどういう働きをするか理解出来る状態でと成長
            </div>
          </div>
          <input id="check2" class="home_content-check" type="checkbox">
          <div class="home_content-content">
          <span class="aa" v-bind:class='{active:isActivePro}'>
          <div class="aa" v-bind:class='{sub:isActivePro}'>
            学ぶ際に工夫していた事
          </div> 
					</span>
          プログラミング言語で何が出来るのかという事を意識しながら学習を進めました。また、学習する過程で出来るようになった事を完成しているwebサイトと比較してこのサイトのここはこの言語が使われれているのだろうかと意識しながら学習を進めました。
          </div>
          <label v-on:click='isActivePro=!isActivePro' class="home_content-label" for="check2">
					</label>
				</div>	
        <div class="home_content">
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
          <input id="check３" class="home_content-check" type="checkbox">
          <div class="home_content-content">
          <span class="aa" v-bind:class='{active:isActiveTech}'>
          <div class="aa" v-bind:class='{sub:isActiveTech}'>
            学ぶ際に工夫していた事
          </div> 
					</span><br>
           曖昧な事をゼロにする事を意識しながら学習を進めました。常にわからない事はメンターに質問出来る環境にあったのでどんなことでも質問をしてわからない事を潰していきました。<br>
           また、質問がより自分のためになるようにわからない点に対してqiitaなどのwebサイトを用いてある程度答えを出して質問することによって自己解決能力を効率よく高めることに成功しました。
          </div>
          <label v-on:click='isActiveTech=!isActiveTech' class="home_content-label" for="check３">
					</label>
        </div>
        <div class="home_content">
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
          <input id="check4" class="home_content-check" type="checkbox">
          <div class="home_content-content">
          <span>
          <div class="aa" v-bind:class='{sub:isActive}'>
            学ぶ際に工夫していた事
          </div> 
					<br>
					</span>
          曖昧な事をゼロにする事を意識しながら学習を進めました。常にわからない事はメンターに質問出来る環境にあったのでどんなことでも質問をしてわからない事を潰していきました。<br>
           また、質問がより自分のためになるようにわからない点に対してqiitaなどのwebサイトを用いてある程度答えを出して質問することによって自己解決能力を効率よく高めることに成功しました。
          </div>
          <label v-on:click='isActive=!isActive' class="home_content-label" for="check4">
					</label>
        </div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isActivePro: false,
      isActiveTech: false,
      isActive: false
    }
  }
}
</script>

<style scoped>
.home_profile {
  position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    border: 1px solid #4e60ff81;
		text-align: start;
		color: #919cff;

}
.home_profile_left {
  display: inline-block;
  left: 0;
  top: 0;
  width: 40%;
  text-align: center;
}
.en {
  top: 0;
  width: 40%;
  margin-top: 2%;
  margin-left: 30%;
  height: 100px;
  border-radius: 50%;
  background-image: url("../assets/n_icon_info.png");
  background-size: cover;
}
.name {
  margin-bottom: 3%;
  font-size: 1vw;
}

.home_profile_left_content {
  display: flex;
  justify-content: space-around;
}
.right {
  width: 50%;
}
.home_profile_left_content::after {
  content:"";
   display:inline-block;
   width:1px;
   height:29%;
   bottom: 1%;
   background-color:#4e60ff81;
   position: absolute;
}
.left::before {
  content:"連絡はこちらへ";
   display:block;
   width:18%;
   height:1px;
   background-color:#4e60ff81;
   position:absolute;
   top:69%;
   left:1%;
}
.left {
  width: 50%;
}
.right::before {
  content:"Githubは下から";
   display:block;
   width:16%;
   height:1px;
   background-color:#4e60ff81;
   position:absolute;
   top:69%;
   left: 21%;
}
.home_profile_right {
  display: inline-block;
  position: absolute;
  top: 5%;
  right: 0;
  width: 60%;
  height: 90%;
  padding-left: 2%;
  border-left: 1px solid #4e60ff81;
}


.home_profile_right_top {
  display: inline-block;
  position: absolute;
  right: 0;
  width: 100%;
  text-align: center;
}
.f {
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
}
.ff {
  width: 10%;
  margin-top: 10%;
}
.home_profile_right_content {
  display: inline-block;
  padding: 1%;
  text-indent: 1em;
}
h1 {
  text-align: center;
}
.aa {
  filter: opacity(0);
}
.sub {
	filter: opacity(100%);
	color: #4e5fff;
	text-align: center;
  border-top: 1px solid #4e60ff81;
  padding-top: 2%;
}
.line {
  text-align: center;
}
.topic0 {
  display: flex;
  align-items: center;
}
.topic1 {
  display: flex;
  align-items: center;
  
}

.topic2 {
  display: flex;
  align-items: center;
}

.a {
  height: 0;
  border-left: 15px solid #4e5fff;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  margin: 1% 10%;
}
.content1 {
  display: inline-block;
  width: 40%;
  text-align: start;
  margin-bottom: 1%; 
  background: rgba(222, 244, 247, 0.664);
  padding: 1%;
  margin: 1%;
}
.content2 {
  display: inline-block;
  width: 40%;
  margin-bottom: 1%;
  background: rgb(212, 250, 255);
  padding: 1%;
  margin: 1%;
}
.home_content{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
    border: 1px solid #4e60ff81;
		text-align: start;
		color: #919cff;
    margin-top: 1%;
}
.home_content-content{
    position: relative;
    overflow: hidden;
    /*以下お好み*/
    /*高さの初期値*/
    height: 20px;
}
.home_content-content::before {
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
.home_content-label{
    display: table;
    bottom: 5px;
    position: absolute;
    bottom: 5px;
    left: 50%;
		width: 10%;
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
.home_content-label:before{
    content: '↓学びの際に工夫した事↓';
}
.home_content-check{
    display: none;
}
.home_content-check:checked ~ .home_content-label{
    position: static;
    transform: translateX(0);
    -webkit-transform: translateX(0);
}
.home_content-check:checked ~ .home_content-label:before{
    content: '閉じる';
}
.home_content-check:checked ~ .home_content-content{
    height: auto;
}
.home_content-check:checked ~ .home_content-content::before {
    display: none;
}
  .programing_message {
		position: absolute;
		color: black;
		text-align: center;
	}

  .home_top {
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
	.home_main {
		flex-basis: 40%;
		position: relative;
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #4e5fff;
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    margin-bottom: 1%;
	}
	.home_title {
		background: transparent;
		color: #4e5fff;
    text-align: center;
	}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
		color: #919cff;
	}
</style>