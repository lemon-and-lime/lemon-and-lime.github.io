<script>
    export let image;
    export let offset;

    import { onMount } from "svelte";

    onMount(() => {
        window.addEventListener('scroll', throttle(parallax, 14));

        function throttle(fn, wait) {
            let time = Date.now();
            return function() {
                if ((time + wait - Date.now()) < 0) {
                    fn();
                    time = Date.now();
                }
            }
        };

        function parallax() {
            let scrolled = window.pageYOffset - (offset * window.innerHeight);
            let parallax = document.querySelector(`.image-${offset}`);
            let coords = (scrolled * 0.4) + 'px'
            parallax.style.transform = 'translateY(' + coords + ')';
        };
    });
</script>

<div class="body">
    <div class="image-{offset}" style="background-image: url('{image}'); background-size: cover; height: 100vh; width: 100%;">

    </div>
</div>

<style>
    .body {
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }
</style>