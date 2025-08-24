# 🎰 Project-Based Learning: Terminal Slot Machine (Node.js)

A small **terminal slot machine** built in **JavaScript (Node.js)** to practice input handling, data modeling, randomization, and game loops. The game lets you deposit money, pick the number of lines to bet on, place a per-line bet, spin the reels, and receive winnings based on matching symbols. (Core logic lives in `javaproject.js`.)

---

## 📌 Features
- Deposit balance and **validate** user input via loops (`deposit()`).
- Choose **1–3 lines** to bet on (`getnumberoflines()`).
- Place a **per-line bet** constrained by current balance (`getbet()`).
- **Randomized reels** with weighted symbols (`spin()`).
- Payouts based on **matching lines** and symbol values (`getwinnings()`).
- Play **multiple rounds** until you quit or your balance reaches zero (`game()` loop).

---

## 🛠 Tech Stack
- **Language:** JavaScript (Node.js)
- **Package:** [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) for terminal input

---

## 🚀 How to Run
1. Install dependencies:
   ```bash
   npm install prompt-sync

Run the game:
```bash
node javaproject.js
```
## 🧠 Step-by-Step: How I Built It & Why
1) Model the Game

- Defined a 3×3 grid (rows = 3, cols = 3) to represent reels.

- Created symbol frequency (SYMBOLS_COUNT) to weight randomness.

- Defined payout values (SYMBOL_VALUES) for calculating winnings.

2) Input & Validation

- Deposit: loops until a valid positive number is entered.

- Number of lines: only accepts values 1–3.

- Bet per line: ensures bet * lines ≤ balance.

- Purpose: avoids invalid inputs and prevents over-betting.

3) Spin Mechanics

- Built a pool of symbols based on their weights.

- For each reel (column), sampled symbols without replacement.

- Ensures fairness and proper distribution of symbols.

4) Board Presentation

- Used transpose(reels) to flip columns into rows.

- Printed board neatly (A | B | C) using printRows(rows).

5) Winnings Calculation

- For each active line, checked if all three symbols matched.

- Winnings = bet * SYMBOL_VALUES[symbol] if line matches.

- Purpose: reward aligned lines, simulate slot payouts.

6) Game Loop

- Show current balance.

- Get inputs → deduct bet → spin → print board → compute winnings → update balance.

- Ask if player wants to continue.

- End if player chooses "n" or balance reaches 0.

## 🎯 Learning Outcomes

- Through this project, I practiced:

- User input handling with validation

- Modeling randomness with weighted sampling

- Writing modular functions for reusability

- Implementing a stateful game loop with balance management

- Working with 2D arrays (reels ↔ rows)
