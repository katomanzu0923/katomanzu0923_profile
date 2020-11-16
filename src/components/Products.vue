<template>
	<div class="vue">
    <div  class="products-header">
      動的アプリケーション
    </div>
		<div class="products-body">
			<div class="product-title">
					<h2>Train Matching</h2>
			</div>
			<div class="product_content">
          <div>
            <img src="@/assets/train.png" alt="次へ" class="main">
          </div>
          <div class="product-content-left">
            <ul>
              <h3>＜作成時に工夫した点＞</h3>
              <li>
                多言語化対応
              </li>
              <li>
                ユーザー視点にそったDB設計
              </li>
              <li>

              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div class="product-content-right">
            <h3>＜作成後の反省点＞</h3>
            <ul>
              <li>
                コード設計が疎かにした結果、可読性が著しく低下した事
              </li>
              <li>
                画像の多用にの結果、UXが著しく低下した事
              </li>
              <li>
                jQueryの多用の結果、コード量が膨大になった事
              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div class="product-readmore-body">	
            <input id="check1" class="readmore-check" type="checkbox">
            <div class="product-readmore">
              <div class="none" v-bind:class='{isActive:isActiveProduct01}'>
                各ページの詳細
              </div><br>
              <div>
              <div>
              </div>
              <div class="product_top">
                <img src="@/assets/915333465e0072b4b9412b3c48c4926b.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <h3 class="title_top">Topページ</h3>
                  <p>このサイトのTopページ。ユーザーに応じてクリックなど余分な動作をすることなく各言語使用者を適切なページへ誘導。<br>
                  テキストのフォントサイズは言語別に調整し、背景の写真は各言語利用者にマッチした写真をで誘導を促す。<br>
                  このページのコードはこちらから</p>
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/views/top/index.erb" target="_blank">HTML</a></span><span class="code_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/assets/stylesheets/top.scss" target="_blank">SCSS</a></span>
                    <span class="code_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/javascript/top.js" target="_blank">Javascript</a></span>
                  </div>
                </div>
              </div>
              <div class="product_login">
                <img src="@/assets/5c513750d58970280c3cea39f9ef16b2.gif" alt="次へ" class="product-gif">
                <div class="product_login_coment">
                  <h3 class="title_login">ログインページ</h3>
                  <p>リアルタイムバリデーション機能を実装。フォームの記述に応じてエラーがある場合はエラー理由表示、エラーがない場合はオッケーマークを表示。また、この時国籍の情報を取得し、以後それに応じた表示の多言語化を実装。<br>
                  このページのコードはこちらから</p>
                  <div class="product_link">
                    <span class="product_link" target="_blank"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/views/devise/registrations/new.html.erb" target="_blank">HTML</a></span><span class="product_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/assets/stylesheets/registrations.scss" target="_blank">SCSS</a></span>
                    <span class="product_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/javascript/registrations.js">Javascript</a></span>
                  </div>  
                </div>
              </div>
              <div class="product_area">
                <img src="@/assets/431a3eab6ad967fa7aaae871fb1b8e57.gif" alt="次へ" class="product-gif">
                <div class="product_login_coment">
                  <h3 class="title_login">エリアページ</h3>
                  <p>行き先に関して、写真は文字より情報量の多いという考えのもと画像を多用し行き先を誘導。<br>
                  このページのコードはこちらから</p>
                  <div class="product_link">
                    <span class="product_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/views/area/index.erb" target="_blank">HTML</a></span><span class="product_link" target="_blank"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/assets/stylesheets/area.scss" target="_blank">SCSS</a></span>
                    <span class="product_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/javascript/area.js" target="_blank">Javascript</a></span>
                  </div>
                </div>
              </div>
              <div class="product_info">
                <img src="@/assets/1c381f0e13da74e62c607421d8c94ab1.gif" alt="次へ" class="product-gif">
                <div class="product_login_coment">
                  <h3 class="title_login">チケットページ</h3>
                  <p>を用いてチケットの情報並べて表示。また、他のページにおいても共通であるが、ぼかしを導入してハンバーグメニューを強調。<p>
                  <div class="product_link">
                    <span class="product_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/views/kanto_info/index.erb" target="_blank">HTML</a></span><span class="product_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/assets/stylesheets/info.scss" target="_blank">SCSS</a></span>
                    <span class="product_link"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/javascript/info.js" target="_blank">Javascript</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label v-on:click='isActiveProduct01=!isActiveProduct01' class="products-label" for="check1">
					</label>
        </div>
			</div>
		</div>
    <div  class="products-header">
      静的アプリケーション
    </div>
		<div class="products-body">
			<div class="product-title">
					<h2>katomanzu0923_profile</h2>
			</div>
			<div class="product_content">
          <div>
            <img src="@/assets/profile_top.gif" alt="次へ" class="main">
          </div>
          <div class="product-content-left">
            <ul>
              <h3>＜作成して工夫した点＞</h3>
              <li>
                Vue.jsを用いたアプリケーションの作成
              </li>
              <li>
                動作を軽くするため画像の割合を極力減らすCSS設計
              </li>
              <li>
                統一した彩度でサイトを設計した事
              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div class="product-content-right">
            <h3>＜作成して反省すべき点＞</h3>
            <ul>
              <li>
                Vue.jsのコンポーネントをうまく活用できなかった事
              </li>
              <li>
                装飾をCSSのみと拘っていたため不自然なヘッダーになってしまった事
              </li>
              <li>
                
              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div class="product-readmore-body">	
            <input id="check2" class="readmore-check" type="checkbox">
            <div class="product-readmore">
              <div class="none" v-bind:class='{isActive:isActiveProduct02}'>
                各ページの詳細
              </div><br>
              <div>
              <div>
              </div>
              <div class="product_top">
                <img src="@/assets/profile_top.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <h3 class="title_top">Profileページ</h3>
                  基本情報や自身の説明を記載。<br>
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/katomanzu0923_profile/blob/master/src/App.vue" target="_blank">App.vue</a></span>
                    <span class="code_link"><a href="https://github.com/katomanzu0923/katomanzu0923_profile/blob/master/src/components/Home.vue" target="_blank">Home.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_login">
                <img src="@/assets/programing.gif" alt="次へ" class="product-gif">
                <div class="product_login_coment">
                  <h3 class="title_login">Programingページ</h3>
                  これまでに学んだ言語に関して記載<br>
                  ページ遷移を用いる事なく情報をコンパクトにした
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/katomanzu0923_profile/blob/master/src/components/Programing.vue" target="_blank">Programing.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_area">
                <img src="@/assets/products.gif" alt="次へ" class="product-gif">
                <div class="product_login_coment">
                  <h3 class="title_login">Productsページ</h3>
                  自身でゼロから考えた動的、静的アプリケーションに関して記載。<br>
                  各ページのコードを直接みれるように記述。その際はページ遷移の手間を防ぐために外部リンクとして遷移するようにした
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/katomanzu0923_profile/blob/master/src/components/Products.vue" target="_blank">Products.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_info">
                <img src="@/assets/web_design.gif" alt="次へ" class="product-gif">
                <div class="product_login_coment">
                  <h3 class="title_info">Web Designページ</h3>
                  Webデザインの領域で作ったパーツを記載<br>
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/katomanzu0923_profile/blob/master/src/components/WebDesign.vue" target="_blank">Web Design.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_info">
                <img src="@/assets/and_more.gif" alt="次へ" class="product-gif">
                <div class="product_login_coment">
                  <h3 class="title_info">And moreページ</h3>
                  上記以外でWeb開発、制作の力になるような技術に関して記載<br>
                  作成物はあまり必要ないと考えているが、その作成物が作れるようになるまでの成長過程に、価値があるであろう学びがあったため、その学びを記述
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/katomanzu0923_profile/blob/master/src/components/AndMore.vue" target="_blank">And More.vue</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label v-on:click='isActiveProduct02=!isActiveProduct02' class="products-label" for="check2">
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
      isActiveProduct01: false,
      isActiveProduct02: false,
      isActivePro: false
    }
  }
}
</script>
<style scoped>
  p {
    text-indent: 1em;
    background: transparent;
  }
  h2 {
		text-align: center;
    width: 60%;
		position: relative;
    display: inline-block;
    padding: 0 5px;
    color: #1bdf14;
    background: transparent;
	}
  h3 {
    text-align: center;
  }
  a {
  color: #1bdf14;
  border:1px solid #1bdf14;
  text-decoration: none;
  padding: 5px;
  margin: 1%;
}
  .vue {
		position: absolute;
		color: black;
		text-align: center;
	}
  .products-header {
    display: inline-block;
    background: rgba(253, 253, 253, 0.767);
		padding: 1%;
    /*transform: rotate(-10deg);*/
    font-size: 2vw;
    margin-bottom: 5%;
    border: 1px solid #CCC;
    border-top: 3px solid #1bdf14;
		color: #1bdf14;
    width: 40%;
    height: 5%;
    left: 48%;
    top: 5%;
    z-index: 1;
		font-weight: bold;
  }

  .products-body {
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
    margin-bottom: 5%;
	}
	.product-title {
		background: transparent;
		color: #1bdf14;
  }
  
  .main {
    width: 100%;
    border:solid 1px rgba(128, 128, 128, 0.658);
  }

  .product_content{
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #7fe07b;
		text-align: start;
		color: #7fe07b;
}

  .product-content-left {
    display: inline-block;
    left: 0;
    width: 40%;
    margin-left: 5%;
  }
  .product-content-right {
    display: inline-block;
    right: 0;
    width: 50%;
    margin-left: 2%;
  }
  
  .product-readmore-body{
    position: relative;
    box-sizing: border-box;
    padding: 10px;
		text-align: start;
		color: #7fe07b;
}
	
.product-readmore{
    position: relative;
    overflow: hidden;
    height: 20px;
}
.product-readmore::before {
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

.product_top {
    position: relative;
    padding-top: 1%;
    margin: 0 1%;
  }
  .product_link {
    width: 100%;
    text-align: center;
    margin-top: 3%;
  }
  .product-gif {
    width: 70%;
    border: 1px solid rgba(0, 0, 0, 0.589);
  }
  .product_top_coment {
    display: inline-block;
    position: absolute;
    text-align: start;
    width: 30%;
    top: 0;
    height: 90%;
    padding-top: 3%;
    margin-left: 1%;
  }
  .title_top {
    text-align: center;
    background-color: #1bdf14;
    border-radius: 10px;
    text-align: center;
    color: white;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 2%;
  }
  .product_login {
    position: relative;
    padding-top: 1%;
    margin: 0 1%;
    border-top: solid 2px #7fe07b;
  }
  .product_login_coment {
    display: inline-block;
    position: absolute;
    text-align: start;
    width: 30%;
    top: 0;
    padding-top: 3%;
    margin-left: 1%;
  }
  .title_login {
    text-align: center;
    background-color: #1bdf14;
    border-radius: 10px;
    text-align: center;
    color: white;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 2%;
  }
  .product_area {
    position: relative;
    padding-top: 1%;
    margin: 0 1%;
    border-top: solid 2px #7fe07b;
  }
  .product_area_coment {
    display: inline-block;
    position: absolute;
    text-align: start;
    width: 30%;
    top: 0;
    padding-top: 3%;
  }
  .title_area {
    text-align: center;
    background-color: #1bdf14;
    border-radius: 10px;
    text-align: center;
    color: white;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 2%;
  }
  .product_info {
    position: relative;
    padding-top: 1%;
    margin: 0 1%;
    border-top: solid 2px #7fe07b;
    border-bottom: solid 2px #7fe07b;
  }
  .product_info_coment {
    display: inline-block;
    position: absolute;
    text-align: start;
    width: 30%;
    top: 0;
    padding-top: 5%;
    margin-left: 3%;
  }
  .title_info {
    text-align: center;
    background-color: #1bdf14;
    border-radius: 10px;
    text-align: center;
    color: white;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 2%;
  }


.products-label{
    display: table;
    bottom: 5px;
    position: absolute;
    left: 50%;
		width: 20%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    margin: 1% auto 0 auto;
    z-index: 2;
    padding: 0 10px;
    background-color: #1bdf14;
    border-radius: 10px;
		text-align: center;
		color: #f7f7f7;
}
.products-label:before{
    content: '↓作成したアプリの詳細↓';
}
.readmore-check{
    display: none;
}
.readmore-check:checked ~ .products-label{
    position: static;
    transform: translateX(0);
    -webkit-transform: translateX(0);
}
.readmore-check:checked ~ .products-label:before{
    content: '閉じる';
}
.readmore-check:checked ~ .product-readmore{
    height: auto;
}
.readmore-check:checked ~ .product-readmore::before {
    display: none;
}
.none {
	filter: opacity(0%);
}
.isActive {
	filter: opacity(100%);
	color: #1bdf14;
	text-align: center;
  padding-top: 2%;
  display: table;
  margin: 0 auto;
  z-index: 2;
  padding: 0 10px;
  background-color: #1bdf14;
  border-radius: 10px;
	text-align: center;
	color: #f7f7f7;
  margin-top: 1%;
}
.isActive::before {
  content:"";
  display:block;
  height:2px;
  width: 700%;
  background-color: #7fe07b;
  position: absolute;
  top: -10px;
  left: -300%;
}

</style>
