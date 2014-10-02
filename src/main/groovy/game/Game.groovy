package game

class Game {
    
    def size = 4
    def total = size * size
    def goal = 2048
    def initialNumbers = 2

    //  0 .  1 .  2 .  3
    //  4 .  5 .  6 .  7
    //  8 .  9 . 10 . 11
    // 12 . 13 . 14 . 15

    List<Cell> cells
    def rows
    def columns

    Game() {
    	cells = []
        rows = []
        columns = []
        total.times {
            cells << new Cell()
        }
        size.times { number ->
            def row = []
            def column = []
            size.times {
                row << cells[number * size + it]
                column << cells[ it * size + number]
            }
            rows[number] = row
            columns[number] = column
        }
        initialNumbers.times {
	        addRandomNumber()
        }
    }

    def processLine(List<Cell> line) {
        compressLine(line)
        joinLine(line)
        compressLine(line)
    }
    
    boolean isDone() {
        cells.any { it.value >= goal }
    }

    boolean isFull() {
	    cells.every { it.value }
    }

    void addRandomNumber() {
        def empties = cells.findAll { !it.value }
        empties[new Random().nextInt(empties.size())].value = 2	
    }

    void moveRight() {
        rows.each {
            processLine it.reverse()
        }
    }

    void moveLeft() {
        rows.each {
            processLine it
        }
    }

    void moveUp() {
        columns.each {
            processLine it
        }
    }

    void moveDown() {
        columns.each {
            processLine it.reverse()
        }
    }

    private joinLine(List<Cell> line) {
        (size - 1).times { number ->
             if (line[number] == line[number + 1]) {
                 line[number].value = line[number].value * 2
                 line[number + 1].reset()
	     }
        }
    }

    private compressLine(List<Cell> line) {
        def lineCompressed = line.findAll { it.value }
        line.eachWithIndex { cell, i ->
            if (i < lineCompressed.size()) {
                cell.value = lineCompressed[i].value
            } else {
                cell.reset()
            }
        }
    }
}
