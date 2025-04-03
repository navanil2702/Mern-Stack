export default function EvenOddChecker() {
    const n = 7;
    const isEven = n % 2 === 0;
  
    return (
      <div>
        <h2>Even or Odd Checker</h2>
        <p>Number: {n}</p>
        <p>{isEven ? "Even" : "Odd"}</p>
      </div>
    );
  }
  