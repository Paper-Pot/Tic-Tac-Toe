// var origBoard = ['O',1 ,'X','X',4 ,'X', 6 ,'O','O'];

// // human
// var huPlayer = 'O';

// // ai
// var aiPlayer = 'X';

// // returns list of the indexes of empty spots on the board
// function emptyIndexies(board){
//   return  board.filter(s => s != "O" && s != "X");
// }

// // winning combinations using the board indexies
// function winning(board, player){
//  if (
//  (board[0] == player && board[1] == player && board[2] == player) ||
//  (board[3] == player && board[4] == player && board[5] == player) ||
//  (board[6] == player && board[7] == player && board[8] == player) ||
//  (board[0] == player && board[3] == player && board[6] == player) ||
//  (board[1] == player && board[4] == player && board[7] == player) ||
//  (board[2] == player && board[5] == player && board[8] == player) ||
//  (board[0] == player && board[4] == player && board[8] == player) ||
//  (board[2] == player && board[4] == player && board[6] == player)
//  ) {
//  return true;
//  } else {
//  return false;
//  }
// }
// function minimax(newBoard, player){
  
//     //available spots
//     var availSpots = emptyIndexies(newBoard);
//     if (winning(newBoard, huPlayer)){
//         return {score:-10};
//      }
//        else if (winning(newBoard, aiPlayer)){
//        return {score:10};
//        }
//      else if (availSpots.length === 0){
//          return {score:0};
//      }
//      var moves = [];

//   // loop through available spots
//   for (var i = 0; i < availSpots.length; i++){
//     //create an object for each and store the index of that spot 
//     var move = {};
//   	move.index = newBoard[availSpots[i]];

//     // set the empty spot to the current player
//     newBoard[availSpots[i]] = player;

//     /*collect the score resulted from calling minimax 
//       on the opponent of the current player*/
//     if (player == aiPlayer){
//       var result = minimax(newBoard, huPlayer);
//       move.score = result.score;
//     }
//     else{
//       var result = minimax(newBoard, aiPlayer);
//       move.score = result.score;
//     }

//     // reset the spot to empty
//     newBoard[availSpots[i]] = move.index;

//     // push the object to the array
//     moves.push(move);
//   }
//   var bestMove;
//   if(player === aiPlayer){
//     var bestScore = -10000;
//     for(var i = 0; i < moves.length; i++){
//       if(moves[i].score > bestScore){
//         bestScore = moves[i].score;
//         bestMove = i;
//       }
//     }
//   }
//   else{

//     // else loop over the moves and choose the move with the lowest score
//     var bestScore = 10000;
//     for(var i = 0; i < moves.length; i++){
//       if(moves[i].score < bestScore){
//         bestScore = moves[i].score;
//         bestMove = i;
//       }
//     }
//   }

// // return the chosen move (object) from the moves array
//   return moves[bestMove];
// }