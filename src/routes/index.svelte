<script context="module">
	export const prerender = true;
</script>

<script>
	import katex from 'katex';
	import evaluatex from "evaluatex/dist/evaluatex";

	let expression = "1 + 3"
	let rendered;
	let answer;
	
	$: expression, rendered = katex.renderToString(expression, {
		throwOnError: false,
		displayMode: true,
		output: "mathml"
	});

	$: rendered, answer = evaluatex(expression)();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="h-screen bg-white p-4">
	<div class="grid overflow-hidden grid-cols-12 auto-rows-auto gap-2 w-full h-full">
		<div class="box col-span-8">
			<input class="text-black" bind:value={expression} type="text">
			<p>{@html rendered }</p>
			<p>{answer}</p>
		</div>
	</div>
</section>

<style>
	.box {
		@apply
			bg-white
			text-black
			min-w-full
			h-32
			min-h-full
			rounded-lg;
	}
</style>