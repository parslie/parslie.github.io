<script lang="ts">
	import { deriveAnchorRel } from "$lib/utils/derive";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	type LinkButtonProps = HTMLAnchorAttributes & { type: "link" };
	type InputButtonProps = HTMLButtonAttributes & { type: "button" | "submit" | "reset" };
	type ButtonProps = LinkButtonProps | InputButtonProps;

	const { children, ...restProps }: ButtonProps = $props();

	const effectiveRel = $derived.by(() => {
		if (restProps.type === "link") {
			return deriveAnchorRel(restProps.rel, restProps.target);
		} else {
			return undefined;
		}
	});
</script>

{#if restProps.type === "link"}
	<a {...restProps} rel={effectiveRel}>
		{#if restProps.target === "_blank"}
			<i class={["fa-solid", "fa-arrow-up-right-from-square", "fa-width-auto"]}></i>
		{:else}
			<i class={["fa-solid", "fa-link", "fa-width-auto"]}></i>
		{/if}
		{@render children?.()}
	</a>
{:else}
	<button {...restProps}>
		{@render children?.()}
	</button>
{/if}

<style lang="scss">
	@use "$lib/styles/color";

	a,
	button {
		// TODO: fully style the <button> variant
		display: inline-block;
		gap: 0.3em;
		padding: 0.5rem 0.6rem;
		background-color: color.$gray;
		color: color.$green-2;
		text-decoration: none;
		line-height: 1;

		&:hover {
			background-color: color.$green-2;
			color: color.$gray;
		}
	}
</style>
