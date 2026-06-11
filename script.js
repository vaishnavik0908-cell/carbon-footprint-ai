function calc() {
  let km = document.getElementById("km").value;
  let carbon = km * 0.21;
  document.getElementById("result").innerText =
    "Estimated CO2: " + carbon + " kg";
}