package game

class Cell {
    def value

    void reset() {
        value = null
    }

    boolean equals(Cell other) {
        this.value && other.value && value == other.value
    }
}
