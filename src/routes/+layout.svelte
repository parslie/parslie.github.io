<script lang="ts">
	import '$lib/styles/global.css'; // This stylesheet affects the entire site.

	let { children } = $props();
</script>

<header>
	<span class="title">Viktor Holta</span>
</header>

<main>
	{@render children()}
</main>

<style>
	.title {
		font-size: 2.5em;
		font-weight: 700;
	}
</style>
