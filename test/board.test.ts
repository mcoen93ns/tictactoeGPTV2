/* eslint-disable no-plusplus */
import { Board } from "../src/board";

describe("Board", () => {
  describe("Initialization", () => {
    it("should initialize an empty board with all cells being null", () => {
      const board = new Board();
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          expect(board.getCell(row, col)).toBeNull();
        }
      }
    });
  });

  describe("Cell Management", () => {
    it("should allow a cell value to be set and retrieved", () => {
      const board = new Board();
      board.setCell(1, 1, "X");
      expect(board.getCell(1, 1)).toBe("X");
    });
  });

  describe("Win Conditions", () => {
    describe("Horizontal Win", () => {
      it("detects a win for the top row", () => {
        const board = new Board();
        board.setCell(0, 0, "X");
        board.setCell(0, 1, "X");
        board.setCell(0, 2, "X");
        expect(board.checkWin("X")).toBe(true);
      });
    });

    describe("Vertical Win", () => {
      it("detects a win for the leftmost column", () => {
        const board = new Board();
        board.setCell(0, 0, "X");
        board.setCell(1, 0, "X");
        board.setCell(2, 0, "X");
        expect(board.checkWin("X")).toBe(true);
      });
    });

    describe("Diagonal Win", () => {
      it("detects a win for the main diagonal", () => {
        const board = new Board();
        board.setCell(0, 0, "X");
        board.setCell(1, 1, "X");
        board.setCell(2, 2, "X");
        expect(board.checkWin("X")).toBe(true);
      });

      it("detects a win for the counter-diagonal", () => {
        const board = new Board();
        board.setCell(0, 2, "X");
        board.setCell(1, 1, "X");
        board.setCell(2, 0, "X");
        expect(board.checkWin("X")).toBe(true);
      });
    });
  });
});
