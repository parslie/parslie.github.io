<script lang="ts">
	import { page } from "$app/state";

	const responseBody = `The page '${page.url.host}${page.url.pathname}' doesn't exists...`;
	const contentLength = $derived(new Blob([responseBody]).size);
</script>

<!-- This page will only show on 404 errors -->

<article>
	<pre><code
			>HTTP/2 404 Not Found
Content-Length: {contentLength}
Content-Type: text/html; charset=utf-8

{responseBody}</code></pre>
</article>

<style lang="scss">
	@use "$lib/styles/color";

	article {
		margin: 0 auto;
		overflow-x: auto;

		pre {
			margin: 0;
		}
	}
</style>
