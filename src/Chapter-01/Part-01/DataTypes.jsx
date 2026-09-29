const name = "Rohan";
const age = 25;
const active = true;
const address = null;
const company = undefined;

const skills = ["React", "JS"];

const user = {
  id: 101,
  name: "Rohan"
};

//In APIs, we can use the above data types to send and receive data from the server. For example, we can send a JSON object containing user information to the server, and the server can respond with a JSON object containing the user's profile information.
// In company will got this type of misxed date.
const user2 = {
  id: 101,
  name: "Aman",
  active: true,
  phone: null,
  skills: ["React", "JavaScript"]
};

function DataTypes() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial", textAlign: "left" }}>
      <header style={{ marginBottom: "20px" }}>
        <hr/>
        <h2>📄 JavaScript Data Types</h2>
        <p style={{ color: "gray" }}>A quick overview with examples</p>
      </header>

      <section style={{ marginBottom: "20px" }}>
        <h2>Available Data Types</h2>
        <ul>
          <li>String</li>
          <li>Number</li>
          <li>Boolean</li>
          <li>Undefined</li>
          <li>Null</li>
          <li>Object</li>
          <li>Symbol</li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Examples</h2>
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th>Type</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>String</td><td>{name}</td></tr>
            <tr><td>Number</td><td>{age}</td></tr>
            <tr><td>Boolean</td><td>{active.toString()}</td></tr>
            <tr><td>Null</td><td>{address === null ? "null" : address}</td></tr>
            <tr><td>Undefined</td><td>{company === undefined ? "undefined" : company}</td></tr>
            <tr><td>Array</td><td>{skills.join(", ")}</td></tr>
            <tr><td>Object</td><td>ID: {user.id}, Name: {user.name}</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Object Example</h2>
        <p>ID: {user2.id}, Name: {user2.name}, Active: {user2.active.toString()}, Phone: {user2.phone === null ? "null" : user2.phone}, Skills: {user2.skills.join(", ")}</p>
      </section>

      <section>
        <h2>Interactive Links</h2>
        <p>
          👉 Learn more about
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" target="_blank" rel="noreferrer">
            JavaScript Data Types
          </a>
        </p>
        <p>
          👉 Explore
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            React Documentation
          </a>
        </p>
      </section>
    </div>
  );
}

export default DataTypes;
