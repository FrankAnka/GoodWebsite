<script>
	import '../app.postcss';
	import { base } from '$app/paths';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<nav class="navbar">
<a href="{base}/">Home</a>
<a href="{base}/photoapp">Photoapp</a>
<a href="{base}/register">Register</a>
<a href="{base}/login">Login</a>
<a href="{base}/shoppinglist">ShoppingList</a>
<a href="{base}/memory">Memory</a>
<a href="{base}/chat">ChatBot</a>
</nav>
<slot />
<style>
	
:global(body), :global(html){
  margin: 0%;
  padding: 0%;
  height: 100vh;
  width: 100vw;
}    
.navbar{
	display: flex;
	font-size: larger;
	align-items:center;
	justify-content: space-evenly;
	background-color:rgb(0, 0, 0);
	min-height: 30px;
}
.navbar a:hover{
	font-size: x-large;
	color: cornflowerblue;
	font-style: italic;
}
.navbar a:active{
	color:aqua ;
}
</style>