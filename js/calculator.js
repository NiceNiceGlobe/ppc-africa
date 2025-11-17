// assets/js/calculator.js

document.addEventListener("DOMContentLoaded", function () {
  const calcTabs = document.querySelectorAll(".calc-tab");
  const calcType = { type: "Concrete" };
  const results = {
    volume: document.getElementById("volumeResult"),
    cement: document.getElementById("cementResult"),
    sand: document.getElementById("sandResult"),
    stone: document.getElementById("stoneResult"),
  };
  const calculateBtn = document.getElementById("calculateBtn");
  const disclaimer = document.getElementById("acceptDisclaimer");

  // Mix ratios (Cement : Sand : Stone) and yield (m³ per 50kg bag)
  const ratios = {
    Concrete: { cement: 1, sand: 2, stone: 3, yield: 0.09 },
    Mortar: { cement: 1, sand: 5, stone: 0, yield: 0.025 },
    Plaster: { cement: 1, sand: 4, stone: 0, yield: 0.02 },
    Screed: { cement: 1, sand: 3, stone: 0, yield: 0.018 },
  };

  // Handle tab switching
  calcTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      calcTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      calcType.type = tab.dataset.type;
      clearResults();
    });
  });

  // Calculate button
  calculateBtn.addEventListener("click", () => {
    if (!disclaimer.checked) {
      alert("Please accept the disclaimer before calculating.");
      return;
    }

    const length = parseFloat(document.getElementById("length").value) || 0;
    const width = parseFloat(document.getElementById("width").value) || 0;
    const thickness = parseFloat(document.getElementById("thickness").value) || 0;

    if (length <= 0 || width <= 0 || thickness <= 0) {
      alert("Please enter valid positive dimensions.");
      return;
    }

    const volume = length * width * thickness; // m³
    const mix = ratios[calcType.type];
    const cementBags = volume / mix.yield;
    const totalParts = mix.cement + mix.sand + mix.stone;
    const sandVol = (mix.sand / totalParts) * volume;
    const stoneVol = (mix.stone / totalParts) * volume;

    // Update results
    results.volume.textContent = volume.toFixed(2);
    results.cement.textContent = Math.ceil(cementBags).toLocaleString();
    results.sand.textContent = sandVol.toFixed(2);
    results.stone.textContent = stoneVol > 0 ? stoneVol.toFixed(2) : "—";
  });

  function clearResults() {
    results.volume.textContent = "—";
    results.cement.textContent = "—";
    results.sand.textContent = "—";
    results.stone.textContent = "—";
  }
});