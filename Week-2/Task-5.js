export default function SquareCalculator() {
    function square(num) {
      return num * num;
    }
  
    return (
      <div>
        <h2>Square Calculator</h2>
        <p>Square of 4: {square(4)}</p>
      </div>
    );
  }
  