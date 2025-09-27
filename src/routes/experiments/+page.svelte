<script lang="ts">
	import { resolve } from "$app/paths";
	import Button from "$lib/components/Button.svelte";
	import Code from "$lib/components/Code.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Link from "$lib/components/Link.svelte";
	import Overlay from "$lib/components/Overlay.svelte";
	import Overlayed from "$lib/components/Overlayed.svelte";
	import PageHead from "$lib/components/PageHead.svelte";

	let showOverlay = $state(true);
</script>

<PageHead title="Experiments" />

<Heading level={1} content="Experiments" />
<p>This is where I experiment with designing components and elements.</p>

<Heading level={2} content="Headings" />

<Heading level={3} content="Linkable Heading" />
<p>This heading has an ID, so it has a link attached to it.</p>

<Heading level={3} content="Non-linkable Heading" disableLink />
<p>This heading doesn't have an ID, so it doesn't have a link attached to it.</p>

<Heading level={2} content="Links" />
<p>
	This is a good song I found a while ago:
	<Link href="https://www.youtube.com/watch?v=SerTJpflwMM">Niko B - Why's this dealer?</Link>
</p>

<Heading level={2} content="Buttons" />
<p>There are four types of buttons:</p>
<div>
	<Button type="button">Button</Button>
	<Button type="submit">Submit</Button>
	<Button type="reset">Reset</Button>
	<Button type="link" href={resolve("/")}>Link</Button>
</div>

<Heading level={2} content="Code" />
<p>
	Code can either be inline like this:
	<Code
		disableLigatures
		content="----[-->+++++<]>-.---.[-->+++++<]>+++.+[->+++<]>.-[--->+<]>-.-.+++[->+++<]>." />
</p>
<p>It can also be a block like this:</p>
<Code
	isBlock
	content={`
macro_rules! max {
    ($number:expr) => {
        $number
    };
    ($first:expr, $($rest:expr),+) => {
        std::cmp::max($first, max!($($rest),+))
    };
}
	`} />

<Heading level={2} content="Overlay" />
<div style:position="relative">
	<Overlayed isDisabled={!showOverlay}>
		<p>
			Lorem ipsum dolor sit amet. Aut earum culpa ut saepe optio ab autem voluptate qui beatae
			saepe? In similique recusandae est velit omnis a officiis iste aut aliquid fugit qui natus
			debitis sit voluptate deserunt id blanditiis odio! A cupiditate eveniet ex ipsum sequi eum
			vitae magni qui placeat cumque eos impedit minima sit odio amet.
		</p>
		<p>
			Qui molestiae sint ut sunt quia vel aliquam earum aut veritatis maxime. Et quod repudiandae
			eos voluptatum facilis sit tenetur aliquam aut quod voluptatem rem odio aspernatur vel
			voluptas quis!
		</p>
		<p>
			Et harum doloremque ad recusandae minus eum eaque alias est nesciunt repellat non similique
			eveniet sed nemo quia vel explicabo necessitatibus. Sed ullam magni ea quia dolor et nisi
			nihil eum voluptatem numquam id consequatur inventore qui iste laborum ut consequuntur
			dignissimos. Qui beatae dolores ut officiis maiores vel quae quod rem quas nobis vel velit
			quia quo voluptate maxime qui dolorem porro.
		</p>
	</Overlayed>
	<Overlay isDisabled={!showOverlay}>
		<p>It's pretty nifty to have overlay components, huh?</p>
	</Overlay>
</div>
<Button type="button" onclick={() => (showOverlay = !showOverlay)}>Toggle Overlay</Button>
