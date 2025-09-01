<script lang="ts">
	const { title }: { title: string } = $props();

	const effectiveTitle = $derived(title ? `Viktor Holta - ${title}` : "Viktor Holta");
</script>

<svelte:head>
	<title>{effectiveTitle}</title>
</svelte:head>
