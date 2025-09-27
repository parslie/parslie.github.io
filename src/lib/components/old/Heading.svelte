<script lang="ts">
	type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
	const { level, content }: { level: HeadingLevels; content: string } = $props();

	const attributes = $derived({
		id: content
			.toLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, "")
			.replaceAll(" ", "-"),
	});
</script>

<a href={`#${attributes.id}`}>
	{#if level === 1}
		<h1 {...attributes}>{content}</h1>
	{:else if level === 2}
		<h2 {...attributes}>{content}</h2>
	{:else if level === 3}
		<h3 {...attributes}>{content}</h3>
	{:else if level === 4}
		<h4 {...attributes}>{content}</h4>
	{:else if level === 5}
		<h5 {...attributes}>{content}</h5>
	{:else}
		<h6 {...attributes}>{content}</h6>
	{/if}
</a>

<style lang="scss">
	@use "$lib/styles/color";

	a {
		color: color.$white;
		text-decoration: none;

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			&::after {
				content: " #";
				color: color.$gray;
			}
		}

		&:hover {
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				&::after {
					color: color.$white;
				}
			}
		}
	}
</style>
