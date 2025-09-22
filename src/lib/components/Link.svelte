<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";

	import { deriveAnchorRel } from "$lib/utils/derive";

	const { children, ...restProps }: HTMLAnchorAttributes = $props();

	const effectiveRel = $derived(deriveAnchorRel(restProps.rel, restProps.target));
</script>

<a {...restProps} rel={effectiveRel}>
	{@render children?.()}
</a>

<style lang="scss">
	@use "$lib/styles/color";

	a {
		color: color.$green-2;

		&:visited {
			color: color.$green-1;
		}
	}
</style>
