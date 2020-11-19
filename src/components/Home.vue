<template>
	<div class="home_top">
    <div class="home_myself">
      <div class="home_title">
        自己紹介
      </div>
      <div class="home_profile">
        <div class="home_profile_left">
          <div class="en">
            h
          </div>
          <div class="name">
            加藤貴大
          </div>
        </div>  
        <div class="home-profile-right">
            <p>今年の2月まで既卒の状態で新卒就活を始めるも歩みたい道がわからず悩む日々。そんな中webエンジニアとして活躍したいと思いwebエンジニアを志す。まずは力をつけたい。このwebサイトはそんな学習中での気づきのログです。
            </p>
        </div>
      </div>
      <div class="home_profile">
        <div class="left">
          連絡はこちらから→<span><a href="mailto:katomanzu86@gmail.com"><img src="@/assets/gmail-logo.png" class="ff"></a></span>
        </div>
        <div class="right">
          GitHubはこちらから→<span><a href="https://github.com/katomanzu0923" target="_blank"><img src="@/assets/download.png" class="ff"></a></span>
        </div>
      </div>
		</div>
		<div class="home_main">
				<div class="home_title">
					学習歴
				</div>
				<div class="home_content">
          <h1>Progate</h1>
          <div class="topic0">
            <div class="content1">
              <p>HTMLって何？という状態。</p>
            </div>
            <div class="arrow">
            </div>
            <div class="content2">
              <p>様々な言語を使って表現の仕組みは理解したが、世の中にそれを実現させるためには何が必要かどの手段が最適なのかがわからない状態</p>
            </div>
          </div>
          <input id="check2" class="home_content-check" type="checkbox">
          <div class="home_content-content">
          <div class="none" v-bind:class='{sub:isActivePro}'>
            学ぶ際に工夫していた事
          </div> 
          <p class="re-content">プログラミング言語で何が出来るのかという事を意識しながら学習を進めました。また、学習する過程で出来るようになった事を完成しているwebサイトと比較してこのサイトのここはこの言語が使われれているのだろうかと意識しながら学習を進めました。</p>
          </div>
          <label v-on:click='isActivePro=!isActivePro' class="home_content-label" for="check2">
					</label>
				</div>	
        <div class="home_content">
          <h1 class="line">TECH::CHANP</h1>
          <div class="topic1">
            <div class="content1">
              <p>様々な言語を使って表現の仕組みは理解したが、世の中にそれを実現させるためには何が必要かどの手段が最適なのかがわからない状態</p>
            </div>
            <div class="arrow">
            </div>
            <div class="content2">
              <p>Ruby on rainls を用いてマークアップ言語からプログラミング言語を駆使して静的及び動的アプリケーションを開発できる状態へと成長。また、プログラミング言語だけでなく、slak,ターミナル、github,mysqlなどweb開発に必要な知識や武器を取得し使える状態へと成長</p>
            </div>
          </div>
          <input id="check３" class="home_content-check" type="checkbox">
          <div class="home_content-content">
          <div class="none" v-bind:class='{sub:isActiveTech}'>
            学ぶ際に工夫していた事
          </div> 
           <p class="re-content">曖昧な事をゼロにする事を意識しながら学習を進めました。常にわからない事はメンターに質問出来る環境にあったのでどんなことでも質問をしてわからない事を潰していきました。<br>
           また、質問がより自分のためになるようにわからない点に対してqiitaなどのwebサイトを用いてある程度答えを出して質問することによって自己解決能力を効率よく高めることに成功しました。</p>
          </div>
          <label v-on:click='isActiveTech=!isActiveTech' class="home_content-label" for="check３">
					</label>
        </div>
        <div class="home_content">
          <h1 class="line">Udemy</h1>
          <div class="topic2">
            <div class="content1">
              <p>Ruby on rails Web開発を行う中でできることが増えた反面自分に必要なことが、自分の現在地が明確にわかる状態</p>
            </div>
            <div class="arrow">
            </div>
            <div class="content2">
              <p>Scssを用いて差的な開発における最適css設計、現在多用されているモダンなjavascriptであるvueを用いた開発ができる状態へと成長</p>
            </div>
          </div>
          <input id="check4" class="home_content-check" type="checkbox">
          <div class="home_content-content">
          <span>
          <div class="none" v-bind:class='{sub:isActive}'>
            学ぶ際に工夫していた事
          </div> 
					</span>
          <p class="re-content">曖昧な事をゼロにする事を意識しながら学習を進めました。常にわからない事はメンターに質問出来る環境にあったのでどんなことでも質問をしてわからない事を潰していきました。<br>
           また、質問がより自分のためになるようにわからない点に対してqiitaなどのwebサイトを用いてある程度答えを出して質問することによって自己解決能力を効率よく高めることに成功しました。</p>
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
p {
  text-indent: 1em;
  background: transparent;
  font-size: 1.5vw;
}
a {
  background: transparent;
}
.re-content {
  margin: 1% 0;
  padding-bottom: 2%;
  padding: 2% 0;
  border-bottom: 2px double #919cff;
}

.home_profile {
  position: relative;
    box-sizing: border-box;
    border: 1px solid #4e60ff81;
		text-align: start;
		color: #919cff;
}
@media screen and (max-width:639px) {
  
}

.home_profile_left {
  display: inline-block;
  width: 40%;
  margin-top: 3%;
  text-align: center;
  vertical-align: auto;
}
.home-profile-right {
  display: inline-block;
  width: 50%;
  padding: 2% 5%;
  color: rgba(0, 0, 255, 0.603);
  text-align: start;
  vertical-align: top;
  
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
  font-size: 1.5vw;
}
.none {
  width: 40%;
  filter: opacity(0);
}
.right {
  text-align: center;
  display: inline-block;
  width: 50%;
  font-size: 2vw;
}

.left {
  text-align: center;
  display: inline-block;
  width: 50%;
  font-size: 2vw;
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
  width: 6%;
  margin-left: 4%;
}
.home_profile_right_content {
  display: inline-block;
  padding: 1%;
  text-indent: 1em;
}
h1 {
  text-align: center;
}
.a {
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
  border-bottom: 2px double #919cff;
}
.topic1 {
  display: flex;
  align-items: center;
  border-bottom: 2px double #919cff;
}

.topic2 {
  display: flex;
  align-items: center;
  border-bottom: 2px double #919cff;
}

.arrow {
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
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    margin: 0 auto;
    z-index: 2;
    padding: 0 10px;
    background-color: #4e5fff;
    border-radius: 10px;
		text-align: center;
		color: #f7f7f7;
    font-size: 1.5vw;
}
.home_content-label:before{
    content: '↓学びの際に工夫した事↓';
    font-size: 1.5vw;
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
    font-size: 1.5vw;
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
	.home_myself {
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
  @media screen and (max-width: 950px){
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
    margin-bottom: 20%;
  }
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
  @media screen and (max-width: 950px){
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
    margin-bottom: 30%;
  }
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
  .sub {
    filter: opacity(100%);
    padding-top: 2%;
    display: table;
    margin: 0 auto;
    z-index: 2;
    padding: 0 10px;
    background-color: #4e5fff;
    color: white;
    border-radius: 10px;
    margin-top: 1%;
    text-align: center;
    font-size: 1.5vw;
  }
  .sub::before {
  content:"";
   display:block;
   width: 550%;
   height:2px;
   background-color: #4e5fff;
   position:absolute;
   top:-10px;
   left: -200%;
}
  
</style>