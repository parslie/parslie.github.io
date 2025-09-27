<script lang="ts">
	type PageHeadProps = {
		title: string;
		description: string;
	};

	const { title, description }: PageHeadProps = $props();

	const BASE_TITLE = "Viktor Holta";
	const effectiveTitle = $derived(title ? `${BASE_TITLE} - ${title}` : BASE_TITLE);
</script>

<svelte:head>
	<title>{effectiveTitle}</title>
	<meta name="description" content={description} />
</svelte:head>
