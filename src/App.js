const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const randomColorArrangement = [];
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const randomNumberFrom0to5 = Math.floor(
        Math.random() * candyColors.length
      );
      const randomColor = candyColors[randomNumberFrom0to5];
      randomColorArrangement.push(randomColor);
    }
    console.log(randomColorArrangement);
  };
  createBoard();

  return <div>Hello</div>;
};

export default App;
