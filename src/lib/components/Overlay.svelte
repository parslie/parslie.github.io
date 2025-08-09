<script lang="ts">
	import type { Snippet } from "svelte";

	const { children, enabled }: { children?: Snippet; enabled?: boolean } = $props();
</script>

<div class={["overlay", enabled && "enabled"]}>
	{@render children?.()}
</div>

<style lang="scss">
	@use "$lib/styles/color.scss";
	@use "$lib/styles/mixin.scss";

	$transition-settings: 100ms ease-in;

	:global(*:has(> .overlay)) {
		// Parent element has to be relative for the absolute position to work
		position: relative;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		// TODO: Elements in different places may need different background colors
		background-color: rgba(color.$black, 0.75);
		overflow: scroll;
		// TODO: Backdrop filter could be added to create better contrast between text
		opacity: 0;
		visibility: hidden;
		transition:
			opacity $transition-settings,
			visibility $transition-settings;

		:global {
			@include mixin.remove-edge-child-margins();
		}

		&.enabled {
			opacity: 1;
			visibility: visible;
		}
	}
</style>
