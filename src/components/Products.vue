<template>
	<div class="vue">
    <div  class="products-header">
      Ruby on railsを用いプロダクト
    </div>
		<div class="products-body01">
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
                <p>多言語化対応</p>
              </li>
              <li>
                <P>ユーザー視点にそったDB設計</P>
              </li>

            </ul>
          </div>
          <div class="product-content-right">
            <h3>＜作成後の反省点＞</h3>
            <ul>
              <li>
                <p>jQueryの多用による可読性の低下</p>
              </li>
              <li>
                <p>画像の多様によるアクセススピードの低下</p>
              </li>
              <li>
                <p></p>
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
                <h3 class="title_top">Topページ</h3>
                <img src="@/assets/915333465e0072b4b9412b3c48c4926b.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>このサイトのTopページ。ユーザーに応じてクリックなど余分な動作をすることなく各言語使用者を適切なページへ誘導。<br>
                  テキストのフォントサイズは言語別に調整し、背景の写真は各言語利用者にマッチした写真をで誘導を促す。<br>
                  </p>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/views/top/index.erb" target="_blank">HTML</a></span><span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/assets/stylesheets/top.scss" target="_blank">SCSS</a></span>
                    <span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/javascript/top.js" target="_blank">Javascript</a></span>
                  </div>
                </div>
              </div>
              <div class="product_top">
                <h3 class="title_top">ログインページ</h3>
                <img src="@/assets/5c513750d58970280c3cea39f9ef16b2.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>リアルタイムバリデーション機能を実装。フォームの記述に応じてエラーがある場合はエラー理由表示、エラーがない場合はオッケーマークを表示。また、この時国籍の情報を取得し、以後それに応じた表示の多言語化を実装。<br>
                  </p>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span  class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/views/devise/registrations/new.html.erb" target="_blank">HTML</a></span><span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/assets/stylesheets/registrations.scss" target="_blank">SCSS</a></span>
                    <span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/javascript/registrations.js">Javascript</a></span>
                  </div>  
                </div>
              </div>
              <div class="product_top">
                <h3 class="title_top">エリアページ</h3>
                <img src="@/assets/431a3eab6ad967fa7aaae871fb1b8e57.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>行き先に関して、写真は文字より情報量の多いという考えのもと画像を多用し行き先を誘導。<br>
                  </p>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/views/area/index.erb" target="_blank">HTML</a></span><span class="code_link01" target="_blank"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/assets/stylesheets/area.scss" target="_blank">SCSS</a></span>
                    <span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/javascript/area.js" target="_blank">Javascript</a></span>
                  </div>
                </div>
              </div>
              <div class="product_top">
                <h3 class="title_top">チケットページ</h3>
                <img src="@/assets/1c381f0e13da74e62c607421d8c94ab1.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>を用いてチケットの情報並べて表示。また、他のページにおいても共通であるが、ぼかしを導入してハンバーグメニューを強調。<p><br>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/views/kanto_info/index.erb" target="_blank">HTML</a></span><span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/assets/stylesheets/info.scss" target="_blank">SCSS</a></span>
                    <span class="code_link01"><a href="https://github.com/katomanzu0923/train_ticket/blob/master/app/javascript/info.js" target="_blank">Javascript</a></span>
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
      Vue.jsを用いたProducts
    </div>
		<div class="products-body02">
			<div class="product-title">
					<h2>富有柿ファーム</h2>
			</div>
			<div class="product_content">
          <div>
            <img src="@/assets/top.png" alt="次へ" class="main">
          </div>
          <div class="product-content-left">
            <ul>
              <h3>＜作成して工夫した点＞</h3>
              <li>
                <p>ユーザーの視点にそったページ構成</p>
              </li>
              <li>
                <p>web用とmobile用と画像を使い分けた点</p>
              </li>
              <li>
                <p>ScSSを導入した点</p>
              </li>
            </ul>
          </div>
          <div class="product-content-right">
            <h3>＜作成して反省すべき点＞</h3>
            <ul>
              <li>
                <p>vue.routerを構想段階で考えていなかったため、大幅な変更が生じた点</p>
              </li>
              <li>
                <p>Web用とモバイル用のメニューを初期から考えずにデザインを決めてしまった点</p>
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
                <h3 class="title_top">Topページ</h3>
                <img src="@/assets/ec-top.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <div class="product_link">
                    <p>ヘッダーは擬似要素でボーダーラインを作り、vue.jsを用いて要素に応じた遷移を実現しました。また、top画面はcssのアニメーションではなくて、Vue.jsのtransitionを用いて画像を滑らかに切り替わるようにしました。<br></p>
                    <h4 class="center">このページのコードは下記から</h4>
                    <span class="code_link"><a href="https://github.com/katomanzu0923/ec-persimmon/blob/master/src/components/Top.vue" target="_blank">Top.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_top">
                <h3 class="title_top">商品説明ページ</h3>
                <img src="@/assets/ec-about.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>画像の遷移の際に今どこにいるのかに関しては、v-バインドを用いてclassの変更によって実現しました。また、コンテンツ全体で柿が表現できるようにカラーとボーターを調整してあります。<br></p>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/ec-persimmon/blob/master/src/components/About.vue" target="_blank">About.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_top">
                <h3 class="title_top">商品一覧ページ</h3>
                <img src="@/assets/ec-buy.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>V-modelでデータのバインディングを行い購入ページへデータをpropsに渡しています。また、選択した購入数に応じた処理による購入制限やリアルタイムで購入数が判断できるようになっています。
                    <br>
                  </p>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/ec-persimmon/blob/master/src/components/Buy.vue" target="_blank">Buy.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_top">
                <h3 class="title_top">購入ページ１</h3>
                <img src="@/assets/ec-perches01.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>それぞれの記述に対してによるバリデーションや 未入力で入力が進むのを防ぐ処理をリアルタイムで行っています。また、購入方法によって異なる購入金額になるようになっています。<br></p>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/ec-persimmon/blob/master/src/components/Perches.vue" target="_blank">Perches.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_top">
                <h3 class="title_top">購入ページ２</h3>
                <img src="@/assets/ec-perches02.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>子コンポーネントから親コンポーネントのデータの引き継ぎや時間差で関数を発生させることによって購入後のに元に戻るようになっています。<br></p>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/ec-persimmon/blob/master/src/components/Perches.vue" target="_blank">Perches.vue</a></span>
                  </div>
                </div>
              </div>
              <div class="product_top">
                <h3 class="title_top">お問い合わせページ</h3>
                <img src="@/assets/ec-contact.gif" alt="次へ" class="product-gif">
                <div class="product_top_coment">
                  <p>現在の入力位置がわかりやすいようにリアルタイムで記述内容を処理しています。また、送信が完了したら最初の状態に戻るようになっています。<br></p>
                  <h4 class="center">このページのコードは下記から</h4>
                  <div class="product_link">
                    <span class="code_link"><a href="https://github.com/katomanzu0923/ec-persimmon/blob/master/src/components/Contact.vue" target="_blank">Contact.vue</a></span>
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
    font-size: 1rem;
  }
  .center {
    text-align: center;
    font-size: 1rem;
  }
  .code_link01 {
    display: inline-block;
    margin: 1%;
    text-align: center;
  }
  .code_link {
    display: inline-block;
    text-align: center;
    width: 100%;
  }
  h2 {
		text-align: center;
    width: 60%;
		position: relative;
    display: inline-block;
    padding: 0 5px;
    color: #1bdf14;
    background: transparent;
    font-size: 3vw;
	}
  h3 {
    text-align: center;
  }
  a {
  color: #1bdf14;
  border:1px solid #1bdf14;
  text-decoration: none;
  width: 50%;
  padding: 3px;
  margin: 1%;
}
li {
  margin-bottom: 1%;
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

  .products-body01 {
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
  .products-body02 {
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
  @media screen and (max-width: 950px){
		.products-body02 {
		margin-bottom: 30%;
	}
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
    display: inline-block;
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
    top: 0;
    width: 40%;
    margin-left: 5%;
    font-size: 1.5vw;
    margin: none;
    vertical-align: top;
  }
  .product-content-right {
    display: inline-block;
    right: 0;
    width: 50%;
    margin-left: 2%;
    font-size: 1.5vw;
    vertical-align: top;
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
    margin-bottom: 1%;
  }
  .product_link {
    margin-top: 3%;
    font-size: 1vw;
    margin: 1%;
    padding-bottom: 3%;
  }
  .product-gif {
    width: 60%;
    margin-left: 3%;
    border: 1px solid rgba(0, 0, 0, 0.589);
  }
  @media screen and (max-width: 950px){
		.product-gif {
      display: block;
      width: 90%;
      margin: 0 auto;
	}
	}
  .product_top_coment {
    display: inline-block;
    text-align: start;
    width: 30%;
    top: 0;
    padding-top: 3%;
    font-size: 1.5vw;
    top: 15%;
    padding: 1%;
    vertical-align: top;
  }
  @media screen and (max-width: 950px){
		.product_top_coment {
			display: block;
      position: unset;
    width: 100%;
    height: 90%;
    top: 50%;
    padding-top: 3%;
    font-size: 1.5vw;
    background: transparent;
	}
	}
  .title_top {
    text-align: center;
    background-color: #1bdf14;
    border-radius: 10px;
    color: white;
    margin-bottom: 2%;
    font-size: 1.5vw;
  }
  .product_login {
    position: relative;
    padding-top: 1%;
    margin: 0 1%;
    border-top: solid 2px #7fe07b;
    font-size: 1.5vw;
  }
  .product_login_coment {
    display: inline-block;
    position: absolute;
    text-align: start;
    width: 30%;
    top: 0;
    padding-top: 3%;
    margin-left: 1%;
    font-size: 1.5vw;
  }
  .title_login {
    text-align: center;
    background-color: #1bdf14;
    border-radius: 10px;
    text-align: center;
    color: white;
    margin-left: 10%;
    margin-bottom: 2%;
    font-size: 1.5vw;
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
    font-size: 1.5vw;
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
    font-size: 1.5vw;
}
.products-label:before{
    content: '↓作成したアプリの詳細↓';
    font-size: 1.5vw;
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
    font-size: 1.5vw;
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
