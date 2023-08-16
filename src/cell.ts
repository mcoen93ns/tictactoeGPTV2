export class Cell {
  value: "X" | "O" | null = null;

  setValue(value: "X" | "O" | null): void {
    if (this.value === null) {
      this.value = value;
    }
  }

  isEmpty(): boolean {
    return this.value === null;
  }

  isPlayed(): boolean {
    return this.value !== null;
  }
}
