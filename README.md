<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
    <h1>Simon Says Game</h1>

  <h2>Overview</h2>
    <p>The <strong>Simon Says Game</strong> is a simple memory-based web application where players replicate a sequence of colors generated randomly. The sequence grows longer with each round, challenging the player's memory. The game uses HTML, CSS, and JavaScript for implementation.</p>

  <hr>

  <h2>Features</h2>
    <ul>
        <li><strong>Responsive Design:</strong> The site dynamically adjusts to different screen sizes using CSS Flexbox.</li>
        <li><strong>Random Sequences:</strong> Each round generates a random color sequence that the player must replicate.</li>
        <li><strong>Real-time Input Validation:</strong> The player's input is checked at each step to ensure correctness.</li>
        <li><strong>Interactive Feedback:</strong> Visual cues indicate active elements, and messages guide the player throughout the game.</li>
        <li><strong>Score Tracking:</strong> Tracks the score based on successfully completed rounds.</li>
    </ul>

  <hr>

  <h2>How It Works</h2>

  <h3>Random Sequences:</h3>
    <ol>
        <li>At the start of each round, the game appends a random color to the sequence.</li>
        <li>The sequence is displayed one step at a time with visual cues (opacity changes).</li>
        <li>The player must repeat the sequence by clicking the colored boxes.</li>
    </ol>

   <h3>Input Validation:</h3>
    <ol>
        <li>Each click is recorded and compared with the corresponding element in the sequence.</li>
        <li>If the input is correct, the game continues; otherwise, the game ends, displaying the final score.</li>
    </ol>

  <h3>Responsiveness:</h3>
    <ul>
        <li><strong>CSS Flexbox</strong> ensures the layout adjusts to different screen sizes.</li>
        <li>Hover effects on buttons enhance interactivity.</li>
        <li>Box sizes and margins are dynamically scaled based on viewport dimensions.</li>
    </ul>

   <hr>

  <h2>Code Structure</h2>
  <ul>
        <li><strong>HTML:</strong> Provides the structure and layout of the game.</li>
        <li><strong>CSS:</strong> Handles styling and responsiveness.</li>
        <li><strong>JavaScript:</strong> Implements game logic, sequence generation, and user input validation.</li>
    </ul>

   <hr>

  <h2>Installation</h2>
    <ol>
        <li>Clone the repository:</li>
        <pre><code>git clone https://github.com/username/simon-says-game.git</code></pre>
        <li>Open the <code>prr.html</code> file in your browser.</li>
    </ol>

   <hr>

   <h2>Files</h2>
    <ul>
        <li><strong><code>prr.html</code></strong> - Main HTML file for the game's interface.</li>
        <li><strong><code>css.css</code></strong> - Stylesheet for design and responsiveness.</li>
        <li><strong><code>console.js</code></strong> - JavaScript logic for the game.</li>
    </ul>

   <hr>

  <h2>Usage</h2>
    <ul>
        <li>Open the game in any modern browser.</li>
        <li>Start the game by pressing any key.</li>
        <li>Follow the sequence displayed and click the boxes in the correct order.</li>
        <li>Progress through rounds to achieve a higher score.</li>
    </ul>
</body>
</html>
