<script lang="ts">
	import "$lib/styles/global.scss";

	let { children } = $props();
</script>

<header>
	<span class="title">Viktor Holta</span>
</header>

<main>
	{@render children()}
</main>

<style lang="scss">
	@use "$lib/styles/color.scss";
	@use "$lib/styles/mixin.scss";

	$outer-padding: 1rem 2rem;

	header {
		padding: $outer-padding 0;
		text-align: center;
	}

	main {
		padding: $outer-padding;

		:global {
			@include mixin.remove-edge-child-margins();
		}
	}

	.title {
		@include mixin.gradient-text(160deg, color.$green-2, color.$green-1);

		// Centers the text vertically in the header
		display: inline-block;
		padding-top: 0.05em;

		line-height: 1;
		font-size: 3em;
		font-weight: 700;
	}
</style>
