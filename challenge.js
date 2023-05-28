// Good Luck! You got this 💪🏾


function calculatePoints(win, draw, loss) {
    const points = {
      win: 3,
      draw: 1,
      loss: 0,
    };

    const total = points.win * win + points.draw * draw + points.loss * loss;

    return total;
  }

  // Example usage:
  console.log(calculatePoints(2, 2, 5)); // Output: 8
