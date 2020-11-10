<template>
	<div class="home_message">
		<h2>動的アプリケーション</h2>
		<div class="product">
			<div class="product01">
					Train Matching
			</div>
			<div class="product01_content">
          <div>
            <img src="@/assets/train.png" alt="次へ" class="main">
          </div>
          <div class="content_left">
            <ul>
              <h3>＜作成して工夫した点＞</h3>
              <li>
                多言語化対応
              </li>
              <li>
                
              </li>
              <li>

              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div class="content_right">
            <h3>＜作成して反省すべき点＞</h3>
            <ul>
              <li>
                コード設計が煩雑になり可読性が著しく低下した事
              </li>
              <li>
                画像の多用によりUIが著しく低下した事
              </li>
              <li>
                jQueryの運用に際して、コード量が膨大になった事
              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div class="product01_content_more">	
            <input id="check1" class="readmore-check" type="checkbox">
            <div class="product01_content_more-content">
              <div class="sub-message-none" v-bind:class='{sub:isActiveProduct01}'>
                作成したアプリの詳細
              </div><br>
              <div>
              <div>
              </div>
              <div class="product_top">
                <img src="@/assets/915333465e0072b4b9412b3c48c4926b.gif" alt="次へ" class="ff">
                <div class="product_top_coment">
                  <h3 class="title_top">Topページ</h3>
                  多言語対応としてマウスオーバーで日本語、英語、中国語に対応。<br>
                  背景の写真は各言語利用者を想定して写真を選定
                </div>
              </div>
              <div class="product_login">
                <img src="@/assets/5c513750d58970280c3cea39f9ef16b2.gif" alt="次へ" class="ff">
                <div class="product_login_coment">
                  <h3 class="title_login">ログインページ</h3>
                  多言語対応としてマウスオーバーで日本語、英語、中国語に対応。<br>
                  背景の写真は各言語利用者を想定して写真を選定
                </div>
              </div>
              <div class="product_login">
                <img src="@/assets/431a3eab6ad967fa7aaae871fb1b8e57.gif" alt="次へ" class="ff">
                <div class="product_login_coment">
                  <h3 class="title_login">エリアページ</h3>
                  多言語対応としてマウスオーバーで日本語、英語、中国語に対応。<br>
                  背景の写真は各言語利用者を想定して写真を選定
                </div>
              </div>
              <div class="product_login">
                <img src="@/assets/1c381f0e13da74e62c607421d8c94ab1.gif" alt="次へ" class="ff">
                <div class="product_login_coment">
                  <h3 class="title_login">ログインページ</h3>
                  多言語対応としてマウスオーバーで日本語、英語、中国語に対応。<br>
                  背景の写真は各言語利用者を想定して写真を選定
                </div>
              </div>
            </div>
          </div>
          <label v-on:click='isActiveProduct01=!isActiveProduct01' class="readmore-label" for="check1">
					</label>
        </div>
			</div>
		</div>
		<h2>静的アプリケーション</h2>
		<div class="product">
			<div class="product01">
					Train Matching
			</div>
			<div class="product01_content">
          <div>
            <img src="@/assets/train.png" alt="次へ" class="main">
          </div>
          <div class="content_left">
            <ul>
              <h3>＜作成して工夫した点＞</h3>
              <li>
                多言語化対応
              </li>
              <li>
                
              </li>
              <li>

              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div class="content_right">
            <h3>＜作成して反省すべき点＞</h3>
            <ul>
              <li>
                コード設計が煩雑になり可読性が著しく低下した事
              </li>
              <li>
                画像の多用によりUIが著しく低下した事
              </li>
              <li>
                jQueryの運用に際して、コード量が膨大になった事
              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div class="product01_content_more">	
            <input id="check1" class="readmore-check" type="checkbox">
            <div class="product01_content_more-content">
              <div class="sub-message-none" v-bind:class='{sub:isActiveProduct01}'>
                作成したアプリの詳細
              </div><br>
              <div>
              <div>
              </div>
              <div class="product_top">
                <img src="@/assets/915333465e0072b4b9412b3c48c4926b.gif" alt="次へ" class="ff">
                <div class="product_top_coment">
                  <h3 class="title_top">Topページ</h3>
                  多言語対応としてマウスオーバーで日本語、英語、中国語に対応。<br>
                  背景の写真は各言語利用者を想定して写真を選定
                </div>
              </div>
              <div class="product_login">
                <img src="@/assets/5c513750d58970280c3cea39f9ef16b2.gif" alt="次へ" class="ff">
                <div class="product_login_coment">
                  <h3 class="title_login">ログインページ</h3>
                  多言語対応としてマウスオーバーで日本語、英語、中国語に対応。<br>
                  背景の写真は各言語利用者を想定して写真を選定
                </div>
              </div>
              <div class="product_login">
                <img src="@/assets/431a3eab6ad967fa7aaae871fb1b8e57.gif" alt="次へ" class="ff">
                <div class="product_login_coment">
                  <h3 class="title_login">エリアページ</h3>
                  多言語対応としてマウスオーバーで日本語、英語、中国語に対応。<br>
                  背景の写真は各言語利用者を想定して写真を選定
                </div>
              </div>
              <div class="product_login">
                <img src="@/assets/1c381f0e13da74e62c607421d8c94ab1.gif" alt="次へ" class="ff">
                <div class="product_login_coment">
                  <h3 class="title_login">ログインページ</h3>
                  多言語対応としてマウスオーバーで日本語、英語、中国語に対応。<br>
                  背景の写真は各言語利用者を想定して写真を選定
                </div>
              </div>
            </div>
          </div>
          <label v-on:click='isActiveProduct01=!isActiveProduct01' class="readmore-label" for="check1">
					</label>
        </div>
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
      isActiveProduct02: false,
      isActivePro: false
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
  
  .main {
    width: 100%;
  }
  .content_left {
    display: inline-block;
    left: 0;
    width: 40%;
    margin-left: 5%;
  }
  .content_right {
    display: inline-block;
    right: 0;
    width: 50%;
  }
  h3 {
    text-align: center;
  }
  .product_top {
    width: 100%;
    position: relative;
  }
  .ff {
    width: 70%;
  }
  .product_top_coment {
    display: inline-block;
    position: absolute;
    text-align: center;
    width: 30%;
    top: 0;
    border-left: solid1px #7fe07b;
  }
  .title-top {
    text-align: center;
  }
  .product_login {
    width: 100%;
    position: relative;
  }
  .product_login_coment {
    display: inline-block;
    position: absolute;
    text-align: center;
    width: 30%;
    top: 0;
    border-left: solid1px #7fe07b;
  }
  .title-login {
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
	.product {
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
	.product01 {
		background: transparent;
		color: #1bdf14;
	}
  .product01_content_more{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
		text-align: start;
		color: #7fe07b;
}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
		color: #7fe07b;
	}
	.product01_content{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
    border: 1px solid #7fe07b;
		text-align: start;
		color: #7fe07b;
}
.product01_content_more-content{
    position: relative;
    overflow: hidden;
    /*以下お好み*/
    /*高さの初期値*/
    height: 20px;
}
.product01_content_more-content::before {
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
.readmore-check:checked ~ .product01_content_more-content{
    height: auto;
}
.readmore-check:checked ~ .product01_content_more-content::before {
    display: none;
}
.sub-message-none {
	filter: opacity(0%);
}
.sub {
	filter: opacity(100%);
	color: #1bdf14;
	text-align: center;
  border-top: 3px solid #7fe07b;
  padding-top: 2%;
}

.aa {
  filter: opacity(0);
}
</style>
