import { Cell } from "../src/cell";

describe("Cell", () => {
  describe("Initialization", () => {
    it("Should initialize an empty cell with a null value", () => {
      const cell = new Cell();
      expect(cell.value).toBe(null);
    });
  });

  describe("Setting and retrieving values should be able to", () => {
    it("Set the cell value to X and retrieve it", () => {
      const cell = new Cell();
      cell.setValue("X");
      expect(cell.value).toBe("X");
    });

    it("Set the cell value to O and retrieve it", () => {
      const cell = new Cell();
      cell.setValue("O");
      expect(cell.value).toBe("O");
    });

    it("Not overwrite the cell value if it has already been set", () => {
      const cell = new Cell();
      cell.setValue("X");
      cell.setValue("O");
      expect(cell.value).toBe("X");
    });
  });

  describe("Cell status checks should return", () => {
    it("True when checking if an empty cell is empty", () => {
      const cell = new Cell();
      expect(cell.isEmpty()).toBe(true);
    });

    it("False when checking if a cell with value X is empty", () => {
      const cell = new Cell();
      cell.setValue("X");
      expect(cell.isEmpty()).toBe(false);
    });

    it("True when checking if a cell with value X has been played", () => {
      const cell = new Cell();
      cell.setValue("X");
      expect(cell.isPlayed()).toBe(true);
    });

    it("False when checking if an empty cell has been played", () => {
      const cell = new Cell();
      expect(cell.isPlayed()).toBe(false);
    });
  });
});
