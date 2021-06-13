<script>
    import Highlight from "svelte-highlight";
    import python from "svelte-highlight/src/languages/python";
    import "svelte-highlight/src/styles/github-dark.css";
    
    const valueInference = `
    y = 2x + 3
    y = 5x - 3

    # y = 7
    `;

    const nonNumeric = `
    (5x + 2x) * 3

    # = 21x
    `;

    const recurringDecimal = `
    (41 + 1) / 14

    # = 22/7
    `;
</script>

<div id="content">
    <div id="features">
        <h2>Features</h2>
        <h3>Value Inferences</h3>
        <Highlight language="{python}" code="{valueInference}" />
        <h3>Equations with Non-Numeric Values</h3>
        <Highlight language="{python}" code="{nonNumeric}" />
        <h3>Natural Reccuring Decimal Representation</h3>
        <Highlight language="{python}" code="{recurringDecimal}" />
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

    #features {
        width: 100%;
        max-width: 800px;
    }
</style>