<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import type { Pathname } from "$app/types";

	import "$lib/styles/default.scss";

	let { children } = $props();

	type NavEntry = { href: Pathname; label: string; iconClasses: string[] };
	const navEntries: NavEntry[] = [
		{ href: "/", label: "Home", iconClasses: ["fa-solid", "fa-home"] },
		{ href: "/experiments", label: "Experiments", iconClasses: ["fa-solid", "fa-flask"] },
	];
</script>

<header>
	<div class="content">
		<span class="title">Viktor Holta</span>

		<nav>
			<ul>
				{#each navEntries as navEntry (navEntry.href)}
					<li>
						<a
							href={resolve(navEntry.href)}
							class={[page.url.pathname === navEntry.href && "selected"]}>
							<i class={["fa-width-auto", ...navEntry.iconClasses]}></i>
							{navEntry.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<main>
	{@render children()}
</main>

<style lang="scss">
	@use "$lib/styles/color.scss";
	@use "$lib/styles/mixin.scss";

	$outer-padding: 1rem 2rem;

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: $outer-padding 0;

		.content {
			@include mixin.gradient-text(160deg, color.$green, color.$dark-green);

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.25rem;
			line-height: 1;

			.title {
				font-size: 3em;
				font-weight: 700;
			}

			nav ul {
				display: flex;
				flex-direction: row;
				gap: 1rem;
				margin: 0;
				padding: 0;
				list-style: none;

				a {
					color: rgba(color.$black, 0.6);
					text-decoration: none;

					&:hover,
					&.selected {
						color: transparent;
					}
				}
			}
		}
	}

	main {
		padding: $outer-padding;

		:global {
			@include mixin.remove-edge-child-margins();
		}
	}
</style>
