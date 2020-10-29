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
		background: red;
		left: 0;
		top: 0;
	}
	
	
</style>