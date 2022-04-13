import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
 squares: any[] = [];
 isXNext: boolean = false;
 winner: string='';
 anyOneWins:boolean=false;

  ngOnInit(): void {
    this.newGame();
  }
  newGame(){
    this.squares=Array(9).fill(null);
    this.isXNext=true;
    this.winner='';
    this.anyOneWins=false;

  }
  get player() {
    return this.isXNext ? 'X' : 'O';
  }
  makeMove(index: number) {
    if (!this.squares[index] && !this.anyOneWins ) {
      this.squares.splice(index, 1, this.player);
      this.isXNext = !this.isXNext;
    }
    this.winner = this.calculateWinner();
    if(this.winner=='X' || this.winner=='O'){
      this.anyOneWins=true;
    }
  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    if(this.squares.includes(null)){
      return '';
    }else
      return 'draw';
  }

}
