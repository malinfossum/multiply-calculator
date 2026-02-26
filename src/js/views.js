const app = document.getElementById("app");

let a = "";
let b = "";
let output = "";

updateView();
function updateView() {
	app.innerHTML = /*HTML*/ `
    <h1>Multiply Calculator</h1>

    <section>
      <label for="number">Enter number:</label>
      <input onchange="setA(this.value)" id="numberA" type="number" autocomplete="off" value="${a}">

      <span>*</span>

      <input onchange="setB(this.value)" id="numberB" type="number" autocomplete="off" value="${b}">

      <button onclick="calculate()">=</button>

      <p>Total: ${output}</p>
      </section>
  `;
}
