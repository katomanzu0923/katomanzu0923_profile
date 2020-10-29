<template>
	<div>
		プログラミングを初めて{{ day }}日
	</div>
</template>

<script>
export default {
	data() {
		return {
			day: 5
		};
	}
};
</script>

<style scoped>
  div {
		position: absolute;
		width: 100%;
		height: 50px;
		background: rgba(255, 0, 0, 0.418);
		left: 0;
		top: 0;
		text-align: center;

	}
	
	
</style>