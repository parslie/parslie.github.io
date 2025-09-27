<script lang="ts">
	type HeadingProps = {
		content: string;
		disableLink?: boolean;
		level: 1 | 2 | 3 | 4 | 5 | 6;
	};

	const { content, disableLink, level }: HeadingProps = $props();
	const uid = $props.id();

	const id = $derived.by(() => {
		if (disableLink) {
			return undefined;
		}

		const contentId = content
			.toLowerCase()
			.replace(/[^A-Za-z0-9 -]/g, "")
			.replace(/ /g, "-");
		return `${uid}-${contentId}`;
	});
</script>

{#snippet headingElement()}
	{#if level === 1}
		<h1 {id}>{content}</h1>
	{:else if level === 2}
		<h2 {id}>{content}</h2>
	{:else if level === 3}
		<h3 {id}>{content}</h3>
	{:else if level === 4}
		<h4 {id}>{content}</h4>
	{:else if level === 5}
		<h5 {id}>{content}</h5>
	{:else}
		<h6 {id}>{content}</h6>
	{/if}
{/snippet}

{#if disableLink}
	{@render headingElement()}
{:else}
	<a href={`#${id}`}>
		{@render headingElement()}
	</a>
{/if}

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
