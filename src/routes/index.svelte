<script context="module">
	export const prerender = true;
</script>

<script>
	import katex from 'katex';
	import evaluatex from "evaluatex";

	let expression = ""
	let rendered = "";
	let answer = "";
	
	$: expression, rendered = katex.renderToString(expression, {
		throwOnError: false,
		displayMode: true,
		output: "mathml"
	});

	function calculate() {
		answer = katex.renderToString(evaluatex(expression)().toString(), {
			throwOnError: false,
			output: "mathml"
		});
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="h-screen bg-navy p-4">
	<div class="grid overflow-hidden grid-cols-9 grid-rows-6 gap-4 w-full h-full">
		<div class="box display col-span-9 row-span-2">
			<input class="text-black" bind:value={expression} type="text">
			<button class="text-black bg-white" on:click={calculate}>Calculate</button>
			<p>{@html rendered }</p>
			<p>{@html answer}</p>
		</div>
		<div class="numbers grid overflow-hidden grid-cols-3 grid-rows-4 col-span-3 row-span-4 gap-4">
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
			<div class="box number"></div>
		</div>
		<div class="edit-buttons grid overflow-hidden grid-cols-3 grid-rows-2 col-span-3 row-span-2 gap-4">
			<div class="edit-button box"></div>
			<div class="edit-button box col-span-2 row-span-2"></div>
			<div class="edit-button box"></div>
		</div>
		<div class="operators grid overflow-hidden grid-cols-3 grid-rows-2 col-span-3 row-span-2 gap-4">
			<div class="shift box col-start-3 row-start-1"></div>
			<div class="trig-operator box"></div>
			<div class="trig-operator box"></div>
			<div class="trig-operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
		</div>
		<div class="operators grid overflow-hidden grid-cols-6 grid-rows-2 col-span-6 row-span-2 gap-4">
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
			<div class="operator box"></div>
		</div>
	</div>
</section>

<style>
	.box {
		@apply
			rounded-3xl;
	}

	.display {
		@apply
			bg-deep-navy
			text-white;
	}

	.number {
		@apply
			bg-lime
			text-black;
	}

	.edit-button {
		@apply
			bg-green
			text-black;
	}

	.operator {
		@apply
			bg-orange
			text-white;
	}
	
	.trig-operator {
		@apply
			bg-amber
			text-white;
	}

	.shift {
		@apply
			bg-pink
			text-white;
	}
</style>