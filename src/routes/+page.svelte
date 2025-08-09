<h1>Welcome to my site!</h1>
<p>
	I will put content here later. For now this page will just be filled with random stuff (i.e.
	components and elements to use on the site in the future).
</p>
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
