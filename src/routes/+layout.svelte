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
	@font-face {
		font-family: 'Signika Negative';
		src: url('$lib/fonts/SignikaNegative-VariableFont_wght.ttf');
	}

	:root {
		--outer-pad-x: 2rem;
		--outer-pad-y: 1rem;
	}

	header {
		display: flex;
		justify-content: center;
		padding: var(--outer-pad-y) var(--outer-pad-x) 0;
	}

	main {
		padding: var(--outer-pad-y) var(--outer-pad-x);
	}

	.title {
		/* Centers the text vertically in the header */
		padding-top: 0.05em;
		line-height: 1;

		background: linear-gradient(160deg, var(--green), var(--dark-green));
		background-clip: text;
		color: transparent;
		font-size: 3em;
		font-weight: 700;
	}
</style>
