<script lang="ts">
	type CodeProps = {
		content: string;
		disableLigatures?: boolean;
		isBlock?: boolean;
	};

	const { content, disableLigatures, isBlock }: CodeProps = $props();

	const trimmedContent = $derived(content.replace(/^[ \t]*\n/, "").replace(/\n[ \t]*$/, ""));
</script>

{#if isBlock}
	<pre class={["block", disableLigatures && "no-ligatures"]}><code>{trimmedContent}</code></pre>
{:else}
	<code class={["inline", disableLigatures && "no-ligatures"]}>{content}</code>
{/if}

<style lang="scss">
	@use "$lib/styles/color";

	.block,
	.inline {
		border-radius: 0.3rem;
		background-color: color.$gray;
		font-family: "Fira Code", monospace;
		overflow: scroll;

		&.no-ligatures {
			font-variant-ligatures: none;
		}
	}

	.inline {
		padding: 0 0.1rem;
	}

	.block {
		padding: 0.4rem 0.5rem;

		code {
			padding: 0;
			font-family: inherit;
		}
	}
</style>
