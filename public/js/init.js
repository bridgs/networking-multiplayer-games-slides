(function() {
	function load() {
		try {
			Reveal.initialize({
				history: true,
				progress: false,
				transition: 'none',

				// More info https://github.com/hakimel/reveal.js#dependencies
				dependencies: [
					// { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					// { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					// { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					// { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
					// { src: 'plugin/zoom-js/zoom.js', async: true },
					// { src: 'plugin/notes/notes.js', async: true }
				]
			});
		}
		catch(err) {
			setTimeout(load, 200);
		}
	}
	load();
})(); 