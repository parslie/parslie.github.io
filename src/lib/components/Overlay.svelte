<script lang="ts">
	import type { Snippet } from "svelte";

	type OverlayProps = {
		children: Snippet;
		isDisabled?: boolean;
	};

	const { children, isDisabled }: OverlayProps = $props();
</script>

<div class={[isDisabled && "disabled"]}>
	{@render children()}
</div>

<style lang="scss">
	@use "$lib/styles/animation";
	@use "$lib/styles/mixin";

	div {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		opacity: 1;
		visibility: visible;

		transition-duration: animation.$overlay-duration;
		transition-timing-function: animation.$overlay-timing;
		transition-property: opacity visibility;

		:global {
			@include mixin.remove-edge-child-margins();
		}

		&.disabled {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
