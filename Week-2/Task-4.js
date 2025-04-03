export default function NumberArray() {
    const numbers = [];
    for (let i = 1; i <= 5; i++) {
      numbers.push(i);
    }
  
    return (
      <div>
        <h2>Number Array</h2>
        <p>{numbers.join(", ")}</p>
      </div>
    );
  }
  