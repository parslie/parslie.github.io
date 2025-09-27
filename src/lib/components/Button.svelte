<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	type InputButtonProps = HTMLButtonAttributes & {
		type: "button" | "submit" | "reset";
	};

	type LinkButtonProps = HTMLAnchorAttributes & {
		type: "link";
	};

	type ButtonProps = InputButtonProps | LinkButtonProps;

	const { children, ...restProps }: ButtonProps = $props();
</script>

{#snippet label()}
	{#if restProps.type === "link"}
		<i class={["fa-solid", "fa-link", "fa-width-auto"]}></i>
	{/if}
	{@render children?.()}
{/snippet}

{#snippet inner()}
	<span style:visibility="hidden">{@render label()}</span>
	<span class="top">{@render label()}</span>
{/snippet}

{#if restProps.type === "link"}
	<a {...restProps}>{@render inner()}</a>
{:else}
	<button {...restProps}>{@render inner()}</button>
{/if}

<style lang="scss">
	@use "$lib/styles/color";

	$base-raise: 0.3rem;
	$hover-extra-raise: 0.1rem;

	a,
	button {
		all: unset;
		font-family: inherit;

		display: inline-block; // Removes space underneath link button
		position: relative;
		padding: 0.3rem 0.5rem;
		border-radius: 0.2rem;
		background-color: color.$gray;
		line-height: 1;
		cursor: pointer;
		user-select: none;

		.top {
			position: absolute;
			top: calc($base-raise * -1);
			left: 0;
			padding: inherit;
			width: 100%;
			height: 100;
			border-radius: inherit;
			box-sizing: border-box;
			background-color: color.$light-gray;
			transition: 100ms ease top;
		}

		&:hover .top {
			top: calc($base-raise * -1 - $hover-extra-raise);
		}

		&:active .top {
			top: 0;
		}
	}
</style>
