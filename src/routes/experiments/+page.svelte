<script lang="ts">
	import { resolve } from "$app/paths";
	import Button from "$lib/components/Button.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Link from "$lib/components/Link.svelte";
	import Overlay from "$lib/components/Overlay.svelte";
	import PageHead from "$lib/components/PageHead.svelte";

	let overlayEnabled = $state(false);
</script>

<PageHead title="Experiments" />

<Heading level={1} content="Experiments" />
<p>This is where I experiment with designing components and elements.</p>

<Heading level={2} content="Links" />
<p>There are multiple types of links: text links and button links.</p>

<Heading level={3} content="Text Links" />
<p>
	Text links are standard links that you see all over the web. Such as the link to the song
	<Link href="https://www.youtube.com/watch?v=SerTJpflwMM">Niko B - Why's this dealer?</Link>.
</p>

<Heading level={3} content="Button Links" />
<p>
	Button links have more specific use-cases. They draw more attention and are perfect for uses like
	linking to a sign-up form.
</p>
<p>
	Here's a link that opens in this tab and one that opens in a new tab:
	<Button type="link" href={resolve("/")}>Home Page</Button>
	<Button type="link" target="_blank" href="https://lithehax.se/events">LiTHe Hax Events</Button>
</p>

<Heading level={2} content="Inline Code" />
<p>The <code>&lt;code&gt;</code> tag is used to display computer code.</p>

<Heading level={2} content="Code Block" />
<p>The following is a rust macro that returns the max number of a set of numbers.</p>
<pre><code
		>macro_rules! max &lbrace;
    ($number:expr) =&gt; &lbrace;
        $number
    &rbrace;;
    ($first:expr, $($rest:expr),+) =&gt; &lbrace;
        std::cmp::max($first, max!($($rest),+))
    &rbrace;;
&rbrace;
</code></pre>

<Heading level={2} content="Font Awesome 7 Free Icons" />
<p>Font Awesome is a very useful icon pack, that also includes optional animations!</p>
<p>
	Firefox: <i class="fa-brands fa-firefox-browser"></i>
	<br />
	Check: <i class="fa-solid fa-check fa-beat-fade"></i>
	<br />
	Loading spinner: <i class="fa-solid fa-spinner fa-spin-pulse"></i>
	<br />
	PDF file: <i class="fa-regular fa-file-pdf fa-bounce"></i>
</p>

<Heading level={2} content="Overlays" />
<div>
	<Overlay enabled={overlayEnabled}>
		<p>Cool, right?</p>
		<p>
			Ut efficitur hendrerit tellus at fermentum. Nullam lacinia nisi sed orci sagittis, quis varius
			ligula pulvinar. Suspendisse non turpis erat. Vivamus tristique nisi at urna tempus porta. Sed
			neque nisi, varius nec libero eget, viverra tincidunt neque. Vestibulum et mauris nulla. Class
			aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam
			consectetur, elit eu blandit ultricies, magna ante sollicitudin lectus, et consectetur ex nibh
			non tortor. Mauris molestie nulla in sapien semper vulputate. Praesent varius erat sit amet
			nulla commodo convallis. Maecenas dictum diam sit amet ornare pharetra. Cras at massa
			ullamcorper, venenatis arcu eget, posuere ex. Nulla sodales tortor eu elit lacinia iaculis.
		</p>
	</Overlay>
	<p>
		Overlays are essentially elements that you can put atop other elements to fully cover them. Try
		them out below!
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet, ante at lacinia
		vehicula, magna ipsum aliquam nisi, non vestibulum turpis dui a turpis. Vivamus dapibus leo at
		nisi sollicitudin, viverra aliquet ipsum ullamcorper. Etiam sit amet mollis odio. Etiam vel
		hendrerit nibh. Mauris feugiat vehicula augue. Etiam ante ante, maximus eget sem in, varius
		pulvinar odio. Nullam mi orci, semper eu augue in, ullamcorper finibus libero. In elementum orci
		ligula, id fringilla justo consectetur cursus.
	</p>
</div>
<fieldset>
	<legend>Overlay settings</legend>
	<label>
		Enabled
		<input type="checkbox" bind:checked={overlayEnabled} />
	</label>
</fieldset>
