# Tic-Tac-Toe: Human vs AI (Minimax Algorithm)

A command-line implementation of the classic Tic-Tac-Toe game, featuring a human player competing against an AI opponent powered by the **Minimax algorithm**.

---

## Features

- Object-oriented design with clearly defined classes (`Board`, `Player`, `AIPlayer`, `Game`)
- Unbeatable AI utilizing the Minimax decision-making algorithm
- Includes input validation, undo functionality, and clear game logic
- Typed Python 3.9+ code with full docstrings for maintainability and clarity

---

## Getting Started

### Prerequisites

- Python 3.9 or higher (due to use of advanced type hints like `list[list[str]]`)

### Running the Game

Clone the repository and run the main script:

```bash
git clone https://github.com/ArsuMinSo/oxogame.git
cd tic-tac-toe-ai
python main.py
```

---

## How to Play

The game board is represented as a 3x3 grid of numbered positions:
```
1 | 2 | 3
4 | 5 | 6
7 | 8 | 9
```
On your turn, enter a number between 1–9 to place your symbol.
The AI will calculate and execute the optimal counter move.
The game ends when either player wins or the board is full (draw).

---

## Project Structure

```
.
├── board.py       # Board and human player logic
├── aiplayer.py    # Human player
├── aiplayer.py    # AI player implementing the minimax algorithm
├── main.py        # Game loop and application entry point
```

[Full documentation](https://github.com/ArsuMinSo/OXOgame/wiki/Tic‐Tac‐Toe-with-AI-(Minimax))

---

## AI Implementation

The `AIPlayer` class implements the **Minimax algorithm**, which simulates all possible game states to choose the optimal move. The AI always plays optimally and cannot be beaten — at best, the human player can achieve a draw.

Minimax evaluation:
- Win: +1  
- Loss: -1  
- Draw: 0

---

## Example Output

```
1 2 3
4 5 6
7 8 9
Enter a number between 1 and 9: 5
1 2 3
4 O 6
7 8 9
Computer thinking...
1 2 3
X O 6
7 8 9
```