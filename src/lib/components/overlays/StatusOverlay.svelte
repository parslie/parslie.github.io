<script lang="ts">
	import type { Status } from "$lib/types";
	import Overlay from "$lib/components/Overlay.svelte";

	type StatusOverlayProps = {
		isDisabled?: boolean;
		message?: string;
		status: Status;
	};

	const { isDisabled, message, status }: StatusOverlayProps = $props();
</script>

<Overlay {isDisabled}>
	<div>
		{#if status === "loading"}
			<i class={["fa-solid", "fa-spinner", "fa-spin-pulse"]}></i>
		{:else if status === "error"}
			<i class={["error", "fa-solid", "fa-heart-crack"]}></i>
		{:else if status === "success"}
			<i class={["success", "fa-solid", "fa-heart"]}></i>
		{/if}
		{#if message}
			<span>{message}</span>
		{/if}
	</div>
</Overlay>

<style lang="scss">
	@use "$lib/styles/color";

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		i {
			font-size: 2em;

			&.error {
				color: color.$red;
			}

			&.success {
				color: color.$green;
			}
		}

		span {
			margin-top: 0.6rem;
			height: 1em;
			text-align: center;
		}
	}
</style>
