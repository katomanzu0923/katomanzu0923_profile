<template>
	<div class="home_message">
		<h2>and more</h2>
		<div>
			<button class="a" v-on:click='isActive01=!isActive01'>top</button>
			<div class="aa" v-bind:class='{active:isActive01}'>
				henka
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		data() {
			return {
				isActive01: false
			}
		}
	}
</script>
<style scoped>
  .aa {
		filter: opacity(30%);
	}
	.active {
		filter: opacity(100%);
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
		color: #f700ff;
	}
	h2::before {
		position: absolute;
    content: '';
    top: 0;
    right: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #f691fa;
    border-left: none;
	}
 h2::after {
		position: absolute;
    content: '';
    top: 0;
    left: 5px;
    width: 5px;
    height: 100%;
    border: 5px solid #f691fa;
    border-right: none;
		margin-bottom: 5%;
	}
</style>