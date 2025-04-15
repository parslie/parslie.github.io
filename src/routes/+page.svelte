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
