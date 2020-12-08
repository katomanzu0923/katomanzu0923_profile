<template>
	<div class="more-ruot">
		<div class="more">
			<div class="more-body">
        <h2>Promire Pro及びAfter Effects</h2>
				<div class="more-content">
					<p>私は学生時代にPremire pro及びAfter effectsを用いて動画制作を行ってきました。Premire proでは動画の編集、音楽との組み合わせ、文字入れなどを行いました。After Effectsでは3Dやアニメーションの作成を行いました。※作例はプライベートの物を含む物のため載せれません。</p>
          <div class="more-content-comment">	
            <input id="check1" class="more-check" type="checkbox">
            <div class="more-readmore-body">
              <div class="none" v-bind:class='{isActive:isActivedesign01}'>
                エンジニアとして活かせる学び
              </div>
              <div class="more-readmore-content">
                <p>動画編集を行う中でプログラミンにも活かせる学びとして引き出しを鍛える重要性が挙げられます</p><br>
                <p>動画編集は場面に応じたエフェクトを加えて編集していきます。この時、ただ自分自身がエフェクトを知っているだけではうまくいかなく、このエフェクトは見る人にどのような意味があるのか、全体の中でどのような働きが起きるのかといった事を適切に引き出さなくてはいけません。つまり、適切な引き出しを所持し引き出せる能力が必要であるのです。そこで私はエフェクトである引き出しを学ぶたびにひきだしの機能や意義を意識しながら学でいました。</p><br>
                <p class="last-more-content">これはプログラミングに関しても大切な学びである思います。ある機能を実装したい。そこで引き出しを増やしていくなか、この引き出しはどんな機能があるのか、ユーザーにどのような影響を与えるのかを意識して引き出しを増やしていく。この動画編集で学んだ引き出しの増やし方を活かしてこれからエンジニアとして活躍していきたいと感じています。</p>
              </div>
            </div>
              <label v-on:click='isActivedesign01=!isActivedesign01' class="readmore-label" for="check1"></label>
          </div>
				</div>
			</div>
  
			<div class="more-body">
        <h2>写真撮影</h2>
				<div class="more-content">
					<p>私は趣味で写真撮影を行います。構図を独学で学び友人や撮りたいと感じた物に対して趣味として撮影を行なっています。</p>
          <div class="more-content-comment">	
          <input id="check２" class="more-check" type="checkbox">
          <div class="more-readmore-body">
            <div class="none" v-bind:class='{isActive:isActivedesign02}'>
              エンジニアとして活かせる学び
            </div>		  
            <div class="more-readmore-content">
              <p>写真撮影を行う中で理論と作例で力を鍛えていくという考え方がエンジニアに活かせる学びであると感じました。</p><br>
              <p>写真は基本的に構図の中でプラスアルファの要素を要素を加えて撮影していきます。例えば上記の写真は日の丸構図の中心点に群がる観光客という組み合わせでとっています。私は撮影技術を理論を学び作例に適応させていくという考え方で力を鍛えててきました。</p><br>
              <p class="last-more-content">この学習方法はエンジニアにも重要な学習方法であると考えています。例えば、ヘッダーではfパターン、zパターンで作られたデザインである事を意識してコーティングしていく鍛え方はを素早いコーティングを可能にしフロントエンドエンジニアとしてより力がつく練習方法であると感じます。現在の私の力では理論をもとに素早く正確な実装はまだ成長段階ですが、この考え方を用いてフロントエンドエンジニアとして成長していきたいと考えています。</p>
            </div>
            </div>
           <label v-on:click='isActivedesign02=!isActivedesign02' class="readmore-label" for="check２">
					</label>
        </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data(){
    return {
      isActivedesign01: false,
      isActivedesign02: false
    }
  }
}
</script>



<style  scoped>
  p {
  text-indent: 1em;
  font-size: 1rem;
  }

  h2 {
		text-align: center;
    width: 100%;
		position: relative;
    display: inline-block;
    padding: 0 5px;
		color: #f94eff;
    background: transparent;
    font-size: 2rem;
  }
  
  .more-ruot {
		position: absolute;
		color: black;
		text-align: center;
  }
  .more-body {
		flex-basis: 40%;
		position: relative;
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #f94eff;/*左線*/
    color: #029cb1;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    margin-bottom: 1%;
	}
  
	
	
	.html_main {
		background: transparent;
		color: #f94eff;
	}
	.html_content {
		background: transparent;
		padding: 10%;
		text-align: start;
		color: #f691fa;
	}
	.more-content{
    position: relative;
    box-sizing: border-box;
    margin-top: 1%;
    padding: 10px;
    border: 1px solid #CCC;
		text-align: start;
		color: #f691fa;
}
.more-content-comment {
  position: relative;
  box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
  padding: 10px;
	text-align: start;
	color: #f691fa;
}
.more-readmore-body{
    position: relative;
    overflow: hidden;
    /*以下お好み*/
    /*高さの初期値*/
    height: 20px;
}
.more-readmore-body::before {
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
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    margin: 0 auto;
    z-index: 2;
    padding: 0 10px;
    background-color: #f94eff;
    border-radius: 10px;
		text-align: center;
    font-size: 1rem;
		color: #f7f7f7;
    margin-top: 1%;
}
.more-readmore-content {
  position: relative;
  box-sizing: border-box;
  margin-top: 1%;
  padding: 10px;
	text-align: start;
	color: #f691fa;
}
.last-more-content {
  border-bottom: 2px solid #f94eff;
  padding-bottom: 3%;
}
.readmore-label:before{
    content: 'エンジニアとして活かせる学び';
    font-size: 1rem;
}
.more-check{
    display: none;
}
.more-check:checked ~ .readmore-label{
    position: static;
    transform: translateX(0);
    -webkit-transform: translateX(0);
}
.more-check:checked ~ .readmore-label:before{
    content: '閉じる';
    font-size: 1rem;
}
.more-check:checked ~ .more-readmore-body{
    height: auto;
}
.more-check:checked ~ .more-readmore-body::before {
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
  background-color: #f94eff;
  border-radius: 10px;
	text-align: center;
	color: #f7f7f7;
  margin-top: 1%;
  font-size: 1rem;
}
.isActive::before {
  content:"";
   display:block;
   width:450%;
   height:2px;
   background-color: #f94eff;
   position:absolute;
   top:-10px;
   left: -150%;
}
</style>