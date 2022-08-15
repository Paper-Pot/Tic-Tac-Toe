<script>
  import Grids from "./lib/Grids.svelte";
  import PlayerScore from "./lib/PlayerScore.svelte";
  
  let player1Score = 0;
  let player2Score = 0;

</script>

<main>
    
  <h1>Tic Tac Toe</h1>

  <Grids />

  <PlayerScore 
    {player1Score}
    {player2Score}
  />

</main>

<style>
 
  main{
    position: relative;
    height: 100vh;   
    text-align: center; 
  }
  h1{
    padding-top: 5%;
    color: var(--textCol);
  }

</style>
