<script>
    import Highlight from "svelte-highlight";
    import python from "svelte-highlight/src/languages/python";
    import "svelte-highlight/src/styles/nord.css";
    
    const pythonCode = `
    from math import sqrt

    a = 2
    b = -16
    c = -130

    disc = sqrt(b*b-4*a*c)

    x1 = (-b+disc)/(2*a)
    x2 = (-b-disc)/(2*a)
    print(x1, x2)
    `;

    const limeCode = `
    2x^2 - 16x - 130 = 0
    `;
</script>

<div id="content">
    <div id="about">
        <h2>About</h2>
        <p>Lime has a very simple aim, purity. Rather than encompassing a wide range of data types, Lime focuses on numbers alone. This means that Lime is not a language that you will write a web server in, nor is it a langauge that you will write your next cryptocurrency in. Lime simply aims to fit into a niche market in the programming world, and provide simple, yet powerful tools for mathematics in programming.</p>
        <p>Perhaps the biggest difference between Lime and other languages is the way it handles variables. Rather than focussing on having variables that are always known, Lime can use multiple declarations and inferences to determine the value or values of a variable. This approach allows you to solve problems in Lime that would be very long and complex in other programming languages.</p>
        <h3>Solving Quadratic Equations in Python</h3>
        <Highlight language="{python}" code="{pythonCode}" />
        <h3>Solving Quadratic Equations in Lime</h3>
        <Highlight language="{python}" code="{limeCode}" />
    </div>
</div>

<style>
    #content {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
    }

    #about {
        width: 100%;
        max-width: 800px;
    }
</style>