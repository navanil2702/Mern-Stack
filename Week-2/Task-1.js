export default function AgeCheck() {
    const age = 25;
    const isAdult = age >= 18;
  
    return (
      <div>
        <h2>Age Check</h2>
        <p>Age: {age}</p>
        <p>Is Adult: {isAdult ? "Yes" : "No"}</p>
      </div>
    );
  }
  