<script lang="ts">
	const { title }: { title: string } = $props();

	const BASE_TITLE = "Viktor Holta";
	const effectiveTitle = $derived(title ? `${BASE_TITLE} - ${title}` : BASE_TITLE);
</script>

<svelte:head>
	<title>{effectiveTitle}</title>
</svelte:head>
