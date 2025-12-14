/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-14
 * @fileOverview This program displays ASCII values and their characters.
 */

// Hardcoded test values
const startA5: number = 36;
const endA5: number = 40;

for (let i = startA5; i <= endA5; i++) {
  console.log(i + " = " + String.fromCharCode(i));
}

console.log("\nDone.");
