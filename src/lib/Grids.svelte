<script>

    let cellCount = [3,3];

    let src='';

</script>

<div class="container">
    {#each {length:cellCount[0]} as col}
        {#each {length:cellCount[1]} as row}
            <div class="cell"></div>
        {/each}
    {/each}
</div>

<style>

    :root{
        --cellBgColor : #444;
    }

    .container {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-40%);
        margin: auto;
        /* width: 80%;
        max-width: 500px; */

        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 20px;
    } 
    .cell{
        height: 90px;
        width: 100px;
        background-color: var(--cellBgColor);
        border-radius: 20px;
    }

</style>