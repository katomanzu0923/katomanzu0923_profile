<template>
	<div class="vue">
    <div  class="design-header">
      Photoshop
    </div>
		<div class="design">
      <div class="design-body">
				<div class="design_main">
					<h3>学んだ理由</h3>
				</div>
				<div class="readmore">
          <div>
            <p>元々Photoshopに関しては趣味で写真撮影、動画編集を行っており、その時にフォトショップが使えるようになりました。</p><br>
          </div>
				</div>
			</div>
			<div class="design-body">
				<div class="design_main">
					Web制作に作成した作例
				</div>
				<div class="design_content">
					<div class="design_content_body">
            <div class="design-content-product01">
              <img src="@/assets/name2.png" alt="次へ" class="jpf">
                <div class="design-content-coment">
                  ・CSSだけでは不可能なボタンを作成。
                </div>
            </div>
            <div class="design-content-product02">
              <img src="@/assets/name3.png" alt="次へ" class="jpf">
                <div class="design-content-coment">
                  ・CSSだけでは不可能なバナーを作成。
                </div>
            </div>
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



<style scoped >
  .vue {
		position: absolute;
		color: black;
		text-align: center;
	}
  .design-header {
    display: inline-block;
    color: #4e60ff;
    background: #ffffff;
		padding: 1%;
    /*transform: rotate(-10deg);*/
    font-size: 2vw;
    margin-bottom: 5%;
    border: 1px solid #CCC;
    border-top: 3px solid #00d1ec;
		color: #00d1ec;
    width: 40%;
    height: 5%;
    left: 48%;
    top: 5%;
    z-index: 1;
		font-weight: bold;
  }

  .design-body {
		flex-basis: 40%;
		position: relative;
    display: block;
    padding: 0.5em 1em;
    margin-bottom: 5%;
    text-decoration: none;
    background: #f7f7f7;
    border-top: solid 6px #00d1ec;/*左線*/
    color: #029cb1;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
	}
	.design_main {
		background: transparent;
		color: #00d1ec;
	}

	.design_content{
    position: relative;
    box-sizing: border-box;
    /*以下お好み*/
    /* ボーダーを付ける場合 */
    padding: 10px;
    border: 1px solid #CCC;
		text-align: start;
		color: #7bd4e0;
}
  .design-content-product01 {
    display: inline-block;
    text-align: center;
    height: 100%;
  }
  .design-content-product02 {
    display: inline-block;
    text-align: center;
    height: 100%;
  }
  
  .jpf {
    width: 50%;
    height: 20%;
    background: transparent;
    border:solid 1px black;
  }
  .enf {
    width: 30%;
    height: 30%;
  }
  .zhf {
    width: 30%;
    height: 30%;
  }
  .design_content_body {
    position: relative;
    width: 100%;
    display: flex;
  }
  .design-content-coment {
    height: 100%;
  }
  h3 {
    text-align: center;
    background: transparent;
    border-bottom: 1px solid #7bd4e0;
  }
	p {
    font-size: 1rem;
  }
</style>