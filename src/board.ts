/* eslint-disable no-plusplus */
import { Cell } from "./cell";

export class Board {
  private grid: Cell[][] = [
    [new Cell(), new Cell(), new Cell()],
    [new Cell(), new Cell(), new Cell()],
    [new Cell(), new Cell(), new Cell()],
  ];

  getCell(row: number, col: number): "X" | "O" | null {
    return this.grid[row][col].value;
  }

  setCell(row: number, col: number, player: "X" | "O"): void {
    this.grid[row][col].value = player;
  }

  checkWin(player: "X" | "O"): boolean {
    return (
      this.checkHorizontalWin(player) ||
      this.checkVerticalWin(player) ||
      this.checkDiagonalWin(player)
    );
  }

  private checkHorizontalWin(player: "X" | "O"): boolean {
    for (let row = 0; row < 3; row++) {
      if (
        this.grid[row][0].value === player &&
        this.grid[row][1].value === player &&
        this.grid[row][2].value === player
      ) {
        return true;
      }
    }
    return false;
  }

  private checkVerticalWin(player: "X" | "O"): boolean {
    for (let col = 0; col < 3; col++) {
      if (
        this.grid[0][col].value === player &&
        this.grid[1][col].value === player &&
        this.grid[2][col].value === player
      ) {
        return true;
      }
    }
    return false;
  }

  private checkDiagonalWin(player: "X" | "O"): boolean {
    // Main diagonal check
    if (
      this.grid[0][0].value === player &&
      this.grid[1][1].value === player &&
      this.grid[2][2].value === player
    ) {
      return true;
    }

    // Counter-diagonal check
    if (
      this.grid[0][2].value === player &&
      this.grid[1][1].value === player &&
      this.grid[2][0].value === player
    ) {
      return true;
    }

    return false;
  }
}
