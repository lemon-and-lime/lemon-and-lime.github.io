<script context="module">
    export const prerender = true;
</script>

<script>
    import Cover from '$lib/Cover/index.svelte';
    import About from '$lib/About/index.svelte';
    import Image from '$lib/Image/index.svelte';
    import Features from '$lib/Features/index.svelte';
    import Credits from '$lib/Credits/index.svelte';
    import Footer from '$lib/Footer/index.svelte';
</script>

<svelte:head>
    <title>Lime</title>
</svelte:head>

<Cover />

<About />

<Image image="second.jpg" offset="2" />

<Features />

<Image image="third.jpg" offset="4" />

<Credits />

<Footer />
