
const modules = [
  ["Market Scanner","Find research candidates.","⌕","scanner"],
  ["News Intelligence","Track company news.","▤","news"],
  ["Entry Confirmation","Study setup conditions.","↗","technical"],
  ["Exit Planner","Plan hypothetical exits.","↘","risk"],
  ["Historical Time Machine","Replay historical setups.","◷","strategy"],
  ["Risk Guardian","Check hypothetical risk.","⬡","risk"],
  ["Capital Manager","Calculate position sizes.","▦","risk"],
  ["Paper Execution","Record simulated orders.","⇄","journal"],
  ["Price Alerts","Plan price conditions.","♢","scanner"],
  ["Earnings Analyst","Review company results.","▥","research"],
  ["Disclosure Tracker","Track public filings.","◎","news"],
  ["Market Structure","Study BOS, CHOCH and FVG.","⌁","technical"],
  ["Strategy Laboratory","Test trading rules.","⚗","strategy"],
  ["Performance Intelligence","Review journal statistics.","▤","journal"],
  ["AI Research Director","Unify research findings.","✧","research"]
];

const pages = {
  overview: ["Trading Intelligence","Your personal market research workspace."],
  scanner: ["Market Scanner","Research candidates and market activity."],
  research: ["AI Research","Your central research workspace."],
  technical: ["Chart Analysis","Multi-timeframe technical research."],
  risk: ["Risk Control","Capital and hypothetical risk calculations."],
  strategy: ["Strategy Lab","Strategy rules and historical testing."],
  news: ["News Intelligence","Verified company and market developments."],
  journal: ["Trade Journal","Paper trading records and performance."]
};

function renderModules() {
  const grid = document.getElementById("moduleGrid");

  if (!grid) return;

  grid.innerHTML = modules.map((m,i) => `
    <button class="module-card" data-page="${m[3]}">
      <div class="module-icon">${m[2]}</div>
      <b>${String(i+1).padStart(2,"0")} · ${m[0]}</b>
      <small>${m[1]}</small>
    </button>
  `).join("");
}

function renderModules() {
  grid.innerHTML = modules.map((m,i) => `
    <button class="module-card" data-page="${m[3]}">
      <div class="module-icon">${m[2]}</div>
      <b>${String(i+1).padStart(2,"0")} · ${m[0]}</b>
      <small>${m[1]}</small>
    </button>
  `).join("");
}

function showOverview() {
  document.getElementById("pageContent").innerHTML = `
    <div class="stats-grid">
      <article class="stat-card"><span>Modules</span><strong>15</strong><small>Research departments</small></article>
      <article class="stat-card"><span>Market data</span><strong>OFF</strong><small>Not connected</small></article>
      <article class="stat-card"><span>Execution</span><strong>PAPER</strong><small>Simulation only</small></article>
      <article class="stat-card"><span>Risk control</span><strong>ON</strong><small>Research discipline</small></article>
    </div>
    <div class="section-heading"><div class="eyebrow">COMMAND CENTRE</div><h2>Intelligence Modules</h2></div>
    <div class="module-grid" id="moduleGrid"></div>
    <div class="bottom-grid">
      <article class="panel">
        <div class="eyebrow">QUICK RESEARCH</div><h2>Start an analysis</h2>
        <form id="researchForm">
          <label for="symbol">Stock symbol</label>
          <input id="symbol" placeholder="e.g. RELIANCE" required>
          <label for="style">Trading style</label>
          <select id="style"><option>Intraday</option><option>Swing</option><option>Long-term</option></select>
          <label for="approach">Research approach</label>
          <select id="approach"><option>Technical + Fundamental</option><option>Technical</option><option>Fundamental</option></select>
          <button class="primary-button">Create Research Brief →</button>
        </form>
        <div class="output" id="researchOutput">No live research is generated in this version.</div>
      </article>
      <article class="panel">
        <div class="eyebrow">SYSTEM STATUS</div><h2>Platform Readiness</h2>
        <div class="status-list">
          <div>Dashboard <b class="good">READY</b></div>
          <div>Navigation <b class="good">READY</b></div>
          <div>AI connection <b class="pending">PENDING</b></div>
          <div>Market data <b class="pending">PENDING</b></div>
          <div>Backtesting <b class="pending">PLANNED</b></div>
        </div>
      </article>
    </div>
  `;
  renderModules();
  bindResearch();
}

function openPage(page) {
  const info = pages[page] || pages.overview;

  document.getElementById("pageTitle").textContent = info[0];
  document.getElementById("pageSubtitle").textContent = info[1];
  document.getElementById("currentSection").textContent = info[0];

  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  if (page === "overview") {
    showOverview();
  } else {
    document.getElementById("pageContent").innerHTML = `
      <div class="module-detail">
        <button class="back-button" id="backButton">← Back to overview</button>
        <div class="eyebrow">NEXUS MODULE WORKSPACE</div>
        <h2>${info[0]}</h2>
        <p>${info[1]}</p>
        <p><b>Status:</b> Phase 1 interface foundation.</p>
        <ul>
          <li>Inputs and outputs will be developed for this module.</li>
          <li>Verified source data will be required for factual analysis.</li>
          <li>Calculations and AI functions will be added in later phases.</li>
        </ul>
        <p>This is not a live market analysis or trading signal.</p>
      </div>
    `;

    document.getElementById("backButton").onclick = () => openPage("overview");
  }

  document.getElementById("sidebar").classList.remove("open");
}

function bindResearch() {
  document.getElementById("researchForm").addEventListener("submit", event => {
    event.preventDefault();

    const symbol = document.getElementById("symbol").value.trim().toUpperCase();
    const style = document.getElementById("style").value;
    const approach = document.getElementById("approach").value;

    document.getElementById("researchOutput").innerHTML = `
      <b>${symbol}</b> · ${style} · ${approach}<br>
      Research request recorded locally. Verified market data and an AI provider are not connected yet.
    `;
  });
}

document.getElementById("navigation").addEventListener("click", event => {
  const button = event.target.closest("[data-page]");
  if (button) openPage(button.dataset.page);
});

document.getElementById("menuButton").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

showOverview();
