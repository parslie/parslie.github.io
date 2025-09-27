<script lang="ts">
	import { resolve } from "$app/paths";
	import Button from "$lib/components/Button.svelte";
	import OldHeading from "$lib/components/old/Heading.svelte";
	import PageHead from "$lib/components/PageHead.svelte";
</script>

<PageHead title="Experiments" />

<OldHeading level={1} content="Experiments" />
<p>This is where I experiment with designing components and elements.</p>

<OldHeading level={2} content="Headings" />

<OldHeading level={2} content="Links" />

<OldHeading level={2} content="Buttons" />
<p>There are four types of buttons:</p>
<div>
	<Button type="button">Button</Button>
	<Button type="submit">Submit</Button>
	<Button type="reset">Reset</Button>
	<Button type="link" href={resolve("/")}>Link</Button>
</div>

<OldHeading level={2} content="Code" />

<OldHeading level={2} content="Overlay" />
