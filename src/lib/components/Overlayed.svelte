<script lang="ts">
	import type { Snippet } from "svelte";

	type OverlayedProps = {
		children: Snippet;
		isDisabled?: boolean;
	};

	const { children, isDisabled }: OverlayedProps = $props();
</script>

<div class={[isDisabled && "disabled"]}>
	{@render children()}
</div>

<style lang="scss">
	@use "$lib/styles/animation";

	div {
		display: contents;

		> :global(*) {
			opacity: 0.5;
			filter: blur(0.2rem);

			transition-duration: animation.$overlay-duration;
			transition-timing-function: animation.$overlay-timing;
			transition-property: opacity filter;
		}

		&.disabled > :global(*) {
			opacity: 1;
			filter: blur(0);
		}
	}
</style>
