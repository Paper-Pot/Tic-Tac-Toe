<script>

    export let player1Score;
    export let player2Score;

</script>

<div class="scoreKeeperContainer">
    
    <h2>Scores</h2>
    <div class="scoreKeeper">

    <div class="player player1">
        <p class="score score1">{player1Score}</p>
        <p class="player">Player 1</p>
    </div>
    <div class="player player2">
        <p class="score score2">{player2Score}</p>
        <p class="player">Player 2</p>
    </div>
    </div>

</div>


<style>

    .scoreKeeperContainer{
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 500px;
    }
    h2{
        color: var(--textCol);
    }

    .scoreKeeper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .player{
        margin: 20px 30px;    
    }
    .scoreKeeper p {
        color: var(--scoreCol);
    }

</style>