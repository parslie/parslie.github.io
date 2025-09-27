<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";

	type LinkProps = HTMLAnchorAttributes;

	const { children, ...restProps }: LinkProps = $props();
</script>

<a {...restProps}>{@render children?.()}</a>

<style lang="scss">
	@use "$lib/styles/color";

	a {
		color: color.$green;

		&:visited {
			color: color.$dark-green;
		}
	}
</style>
