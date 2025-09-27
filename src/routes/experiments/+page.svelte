<script lang="ts">
	import { resolve } from "$app/paths";
	import Button from "$lib/components/Button.svelte";
	import Code from "$lib/components/Code.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import PageHead from "$lib/components/PageHead.svelte";
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
