# n-queen-Visualizer
This repository is a simple N-Queens visualizer that you can use to demonstrate the steps of a backtracking algorithm in solving the problem. This implementation uses HTML, CSS, and JavaScript, with a focus on interactivity for students to follow along with each placement and backtracking step.
Here’s a GitHub README template for the **N-Queens Problem Visualizer** project:

```markdown
# N-Queens Problem Visualizer

A visual tool to demonstrate the classic N-Queens problem using a backtracking algorithm. This project helps students and developers understand the process of placing N queens on an N x N chessboard such that no two queens attack each other.

## Demo

![N-Queens Demo](demo/demo.mp4)

## Features

- Interactive visualization of each step in the backtracking algorithm
- Adjustable board size (N), allowing sizes from 4x4 to 12x12
- Real-time placement and removal of queens on the chessboard

## Tech Stack

- **HTML** for structure
- **CSS** for styling the chessboard and queens
- **JavaScript** for implementing the backtracking algorithm with visualization

## Getting Started

### Prerequisites

To run this project locally, you'll need a modern web browser (Chrome, Firefox, Safari, etc.).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/n-queens-visualizer.git
   cd n-queens-visualizer
   ```

2. Open the `index.html` file in your browser:
   ```bash
   open index.html  # MacOS
   start index.html # Windows
   ```

### Usage

1. Select the desired board size (between 4 and 12) using the input field.
2. Click on **Start Visualization** to begin the backtracking algorithm.
3. Watch as the queens are placed and removed in real-time until a solution is found!

### How It Works

The N-Queens Visualizer uses a **backtracking algorithm** to place queens on the board one row at a time. If a safe position is found for a queen, it is placed; otherwise, the algorithm backtracks and tries the next position. This process continues until a solution is found.

Each placement and removal of queens is visualized, making it easy to follow the algorithm's thought process.

## Project Structure

```plaintext
n-queens-visualizer/
├── index.html         # Main HTML file
├── style.css          # CSS for board styling
└── script.js          # JavaScript for visualization and backtracking algorithm
```

## Customization

- **Change Visualization Speed**: Adjust the `delay` variable in `script.js` to control the speed of the visualization (in milliseconds).
- **Board Size**: The board size can be adjusted in the UI, but the code supports sizes between 4x4 and 12x12.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project is inspired by the classic N-Queens problem.
- Thanks to all the contributors who improve and maintain this project!

## Connect with Me

Feel free to connect with me on my other platforms for updates, queries, or collaborations!


- **GitHub**: [paul-srijan](https://github.com/paul-srijan)
- **LinkedIn**: [Srijan Paul](https://www.linkedin.com/in/srijan-paul-547354260/)
- **Email**: iampaulsrijan@gmail.com
```

