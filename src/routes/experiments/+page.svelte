<script>
	import Overlay from "$lib/components/Overlay.svelte";
	import PageHead from "$lib/components/PageHead.svelte";

	let overlayEnabled = $state(false);
</script>

<PageHead title="Experiments" />

<h1>Experiments</h1>
<p>This is where I experiment with designing components and elements.</p>

<h2>Links</h2>
<p>
	This is a regular link: <a href="https://www.youtube.com/watch?v=SerTJpflwMM">
		Niko B - Why's this dealer?
	</a>
</p>

<h2>Inline Code</h2>
<p>The <code>&lt;code&gt;</code> tag is used to display computer code.</p>

<h2>Code Block</h2>
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

<h2>Font Awesome 7 Free icons</h2>
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

<h2>Overlays</h2>
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
