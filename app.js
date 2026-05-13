const units = [
  { level: "PB", type: "FRUTOS", model: "DEPTO 2R", key: "A-05", totalM2: 100.5, price: 3605000 },
  { level: "PB", type: "FRUTOS", model: "DEPTO 2R", key: "A-06", totalM2: 100.5, price: 3605000 },
  { level: "PB", type: "FRUTOS", model: "DEPTO 2R", key: "A-07", totalM2: 100.5, price: 3605000 },
  { level: "PB", type: "FLORES", model: "DEPTO 3R Comp.", key: "A-08", totalM2: 102, price: 3755000 },
  { level: "PB", type: "FLORES", model: "DEPTO 3R Comp.", key: "B-09", totalM2: 106.77, price: 3755000 },
  { level: "N1", type: "RAMA", model: "DEPTO 2R Comp.", key: "A-11", totalM2: 79.1, price: 2835600 },
  { level: "N1", type: "FRUTOS", model: "DEPTO 2R", key: "A-15", totalM2: 100.5, price: 3465000 },
  { level: "N1", type: "FRUTOS", model: "DEPTO 2R", key: "A-16", totalM2: 100.5, price: 3465000 },
  { level: "N1", type: "FRUTOS", model: "DEPTO 2R", key: "A-17", totalM2: 100.5, price: 3465000 },
  { level: "N1", type: "FLORES", model: "DEPTO 3R Comp.", key: "A-18", totalM2: 102, price: 3615000 },
  { level: "N1", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-11", totalM2: 79.1, price: 2835600 },
  { level: "N1", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-15", totalM2: 79.1, price: 2835600 },
  { level: "N1", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-16", totalM2: 79.1, price: 2835600 },
  { level: "N1", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-17", totalM2: 79.1, price: 2835600 },
  { level: "N1", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-18", totalM2: 79.1, price: 2835600 },
  { level: "N1", type: "FLORES", model: "DEPTO 3R Comp.", key: "B-19", totalM2: 102, price: 3615000 },
  { level: "N2", type: "RAMA", model: "DEPTO 2R Comp.", key: "A-21", totalM2: 79.1, price: 2871300 },
  { level: "N2", type: "FRUTOS", model: "DEPTO 2R", key: "A-25", totalM2: 100.5, price: 3490000 },
  { level: "N2", type: "FRUTOS", model: "DEPTO 2R", key: "A-27", totalM2: 100.5, price: 3490000 },
  { level: "N2", type: "FLORES", model: "DEPTO 3R Comp.", key: "A-28", totalM2: 102, price: 3640000 },
  { level: "N2", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-21", totalM2: 79.1, price: 2871300 },
  { level: "N2", type: "SEMILLA", model: "DEPTO 1R Comp.", key: "B-22", totalM2: 60.5, price: 2220000 },
  { level: "N2", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-26", totalM2: 79.1, price: 2871300 },
  { level: "N2", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-27", totalM2: 79.1, price: 2871300 },
  { level: "N2", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-28", totalM2: 79.1, price: 2871300 },
  { level: "N2", type: "FLORES", model: "DEPTO 3R Comp.", key: "B-29", totalM2: 102, price: 3640000 },
  { level: "N3", type: "SEMILLA", model: "DEPTO 1R Comp.", key: "A-32", totalM2: 60.5, price: 2240000 },
  { level: "N3", type: "FRUTOS", model: "DEPTO 2R", key: "A-35", totalM2: 100.5, price: 3545000 },
  { level: "N3", type: "FRUTOS", model: "DEPTO 2R", key: "A-36", totalM2: 100.5, price: 3545000 },
  { level: "N3", type: "FRUTOS", model: "DEPTO 2R", key: "A-37", totalM2: 100.5, price: 3545000 },
  { level: "N3", type: "FLORES", model: "DEPTO 3R Comp.", key: "A-38", totalM2: 102, price: 3695000 },
  { level: "N3", type: "RAIZ", model: "DEPTO 1R", key: "B-33", totalM2: 70.5, price: 2486780 },
  { level: "N3", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-35", totalM2: 79.1, price: 2911080 },
  { level: "N3", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-36", totalM2: 79.1, price: 2911080 },
  { level: "N3", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-37", totalM2: 79.1, price: 2911080 },
  { level: "N3", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-38", totalM2: 79.1, price: 2911080 },
  { level: "N3", type: "FLORES", model: "DEPTO 3R Comp.", key: "B-39", totalM2: 102, price: 3695000 },
  { level: "N4", type: "COPA", model: "DEPTO 2R Roof", key: "A-47", totalM2: 123, price: 4330000 },
  { level: "N4", type: "FLORES", model: "DEPTO 3R Comp.", key: "A-48", totalM2: 102, price: 3820000 },
  { level: "N4", type: "RAMA", model: "DEPTO 2R Comp.", key: "B-41", totalM2: 79.1, price: 2999000 },
  { level: "N4", type: "RAIZ", model: "DEPTO 1R", key: "B-43", totalM2: 70.5, price: 2544920 },
  { level: "N4", type: "COPITA", model: "DEPTO 2R Comp Roof", key: "B-45", totalM2: 89.5, price: 3765000 },
  { level: "N4", type: "COPITA", model: "DEPTO 2R Comp Roof", key: "B-48", totalM2: 89.5, price: 3765000 },
  { level: "N4", type: "FLORES", model: "DEPTO 3R Comp.", key: "B-49", totalM2: 102, price: 3820000 },
];

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

const monthNames = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const annualProjectionRates = [
  {
    key: "plantar",
    label: "Plantar",
    rate: 0.175,
    color: "#16553c",
    basis: "totalValue",
  },
  {
    key: "fondos",
    label: "Fondos",
    rate: 0.1,
    color: "#587b7f",
    basis: "investedCapital",
  },
  {
    key: "cetes",
    label: "CETES",
    rate: 0.0719,
    color: "#9b7a2f",
    basis: "investedCapital",
  },
  {
    key: "oro",
    label: "Oro",
    rate: 0.056,
    color: "#bd8b3a",
    basis: "investedCapital",
  },
];

const fields = {
  unit: document.querySelector("#unit"),
  closingMonth: document.querySelector("#closingMonth"),
  preClosingPercent: document.querySelector("#preClosingPercent"),
  downPayment: document.querySelector("#downPaymentInput"),
  reservation: document.querySelector("#reservation"),
  clientName: document.querySelector("#clientName"),
  clientContact: document.querySelector("#clientContact"),
};

const output = {
  totalPrice: document.querySelector("#totalPrice"),
  priceNote: document.querySelector("#priceNote"),
  downPaymentHelp: document.querySelector("#downPaymentHelp"),
  discountOut: document.querySelector("#discountOut"),
  reservationOut: document.querySelector("#reservationOut"),
  downPayment: document.querySelector("#downPaymentOut"),
  preClosingTarget: document.querySelector("#preClosingTarget"),
  financedTotal: document.querySelector("#financedTotal"),
  monthlyPayment: document.querySelector("#monthlyPayment"),
  closingBalance: document.querySelector("#closingBalance"),
  monthCount: document.querySelector("#monthCount"),
  preClosingOut: document.querySelector("#preClosingOut"),
  unitDetails: document.querySelector("#unitDetails"),
  projectionHorizon: document.querySelector("#projectionHorizon"),
  investedCapital: document.querySelector("#investedCapital"),
  projectedValueBase: document.querySelector("#projectedValueBase"),
  plantarGain: document.querySelector("#plantarGain"),
  plantarReturn: document.querySelector("#plantarReturn"),
  brokerScript: document.querySelector("#brokerScript"),
  marketChart: document.querySelector("#marketChart"),
  projectionLegend: document.querySelector("#projectionLegend"),
  projectionExplanation: document.querySelector("#projectionExplanation"),
  whatsappLink: document.querySelector("#whatsappLink"),
  copyQuote: document.querySelector("#copyQuote"),
  toast: document.querySelector("#toast"),
};

function money(value) {
  return `${currency.format(Math.round(value))} MXN`;
}

function moneyInput(value) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.max(0, Number(value) || 0));
}

function parseMoneyInput(input, fallback = 0) {
  const clean = input.value.replace(/[^\d.]/g, "");
  const value = Number(clean);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function selectMoneyValue(select, fallback = 0) {
  const value = Number(select.value);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function monthIndex(monthValue) {
  const [year, month] = monthValue.split("-").map(Number);
  return year * 12 + month - 1;
}

function monthLabel(monthValue) {
  const [year, month] = monthValue.split("-").map(Number);
  return `${monthNames[month - 1]} ${year}`;
}

function financingMonths(closingMonth) {
  const now = new Date();
  const start = now.getFullYear() * 12 + now.getMonth();
  return Math.max(1, monthIndex(closingMonth) - start + 1);
}

function extensionIncrease(closingMonth) {
  return Math.max(0, monthIndex(closingMonth) - monthIndex("2027-12"));
}

function discountForPreClosing(percent) {
  if (percent >= 0.8) return 0.1;
  if (percent >= 0.65) return 0.04;
  if (percent >= 0.45) return 0.02;
  return 0;
}

function getBaseQuote() {
  const unit = selectedUnit();
  const closingMonth = fields.closingMonth.value;
  const increaseMonths = extensionIncrease(closingMonth);
  const grossPrice = unit.price * (1 + increaseMonths * 0.01);
  const preClosingPercent = Number(fields.preClosingPercent.value);
  const discountPercent = discountForPreClosing(preClosingPercent);
  const discount = grossPrice * discountPercent;
  const adjustedPrice = grossPrice - discount;
  const reservation = selectMoneyValue(fields.reservation, 10000);
  const targetPreClosing = adjustedPrice * preClosingPercent;
  const maxDownPayment = Math.max(0, targetPreClosing - reservation);

  return {
    unit,
    closingMonth,
    increaseMonths,
    grossPrice,
    preClosingPercent,
    discountPercent,
    discount,
    adjustedPrice,
    reservation,
    targetPreClosing,
    maxDownPayment,
  };
}

function selectedUnit() {
  return units.find((unit) => unit.key === fields.unit.value) ?? units[0];
}

function selectedModelFilter() {
  return document.querySelector('input[name="modelFilter"]:checked')?.value ?? "all";
}

function unitMatchesFilter(unit, filter) {
  if (filter === "all") return true;
  return unit.model.includes(filter);
}

function populateUnits(keepSelected = true) {
  const previous = fields.unit.value;
  const filter = selectedModelFilter();
  const visibleUnits = units.filter((unit) => unitMatchesFilter(unit, filter));

  fields.unit.innerHTML = visibleUnits
    .map(
      (unit) =>
        `<option value="${unit.key}">${unit.key} · ${unit.type} · ${unit.model} · ${unit.totalM2.toFixed(2)} m² · ${money(unit.price)}</option>`,
    )
    .join("");

  if (keepSelected && visibleUnits.some((unit) => unit.key === previous)) {
    fields.unit.value = previous;
  }
}

function calculate() {
  const base = getBaseQuote();
  const rawDownPayment = parseMoneyInput(fields.downPayment, 0);
  const downPayment = Math.min(rawDownPayment, base.maxDownPayment);
  const months = financingMonths(base.closingMonth);

  const financedTotal = Math.max(0, base.targetPreClosing - base.reservation - downPayment);
  const monthlyPayment = financedTotal / months;
  const paidBeforeClosing = base.reservation + downPayment + financedTotal;
  const closingBalance = Math.max(0, base.adjustedPrice - paidBeforeClosing);
  const projections = calculateProjections(base.adjustedPrice, paidBeforeClosing, months);

  return {
    ...base,
    downPayment,
    rawDownPayment,
    financedTotal,
    monthlyPayment,
    paidBeforeClosing,
    closingBalance,
    months,
    projections,
  };
}

function calculateProjections(totalValue, investedCapital, months) {
  const years = months / 12;

  return annualProjectionRates.map((item) => {
    const base = item.basis === "totalValue" ? totalValue : investedCapital;
    const projectedGain = base * ((1 + item.rate) ** years - 1);
    const returnOnCapital = investedCapital > 0 ? projectedGain / investedCapital : 0;

    return {
      ...item,
      projectedGain,
      returnOnCapital,
      points: calculateProjectionPoints(item, totalValue, investedCapital, months),
    };
  });
}

function calculateProjectionPoints(item, totalValue, investedCapital, months) {
  const base = item.basis === "totalValue" ? totalValue : investedCapital;
  const safeMonths = Math.max(1, months);

  return Array.from({ length: safeMonths + 1 }, (_, month) => {
    const years = month / 12;
    const gain = base * ((1 + item.rate) ** years - 1);
    return {
      month,
      gain,
      returnOnCapital: investedCapital > 0 ? gain / investedCapital : 0,
    };
  });
}

function getQuoteText(quote) {
  const client = fields.clientName.value.trim() || "Cliente";
  const contact = fields.clientContact.value.trim() || "Sin dato";
  const increaseText =
    quote.increaseMonths > 0
      ? `Precio con incremento: ${quote.increaseMonths}% sobre precio base`
      : "Precio sin incremento por extensión";
  const discountText =
    quote.discountPercent > 0
      ? `Descuento por aportación previa (${Math.round(quote.preClosingPercent * 100)}%): ${Math.round(quote.discountPercent * 100)}%`
      : "Sin descuento por aportación previa";

  return [
    "Corrida inicial Plantar",
    `Cliente: ${client}`,
    `Contacto/nota: ${contact}`,
    `Unidad: ${quote.unit.key} · ${quote.unit.type} · ${quote.unit.model}`,
    `Nivel: ${quote.unit.level}`,
    `M2 totales: ${quote.unit.totalM2.toFixed(2)}`,
    `Precio base: ${money(quote.unit.price)}`,
    `Escritura: ${monthLabel(quote.closingMonth)}`,
    increaseText,
    discountText,
    `Precio calculado: ${money(quote.adjustedPrice)}`,
    `Apartado: ${money(quote.reservation)}`,
    `Aportación previa requerida (${Math.round(quote.preClosingPercent * 100)}%): ${money(quote.targetPreClosing)}`,
    `Enganche: ${money(quote.downPayment)}`,
    `Monto a diferir: ${money(quote.financedTotal)} en ${quote.months} mensualidades`,
    `Mensualidad estimada: ${money(quote.monthlyPayment)}`,
    `Saldo a escrituración: ${money(quote.closingBalance)}`,
    `Plusvalía Plantar proyectada: ${money(quote.projections[0].projectedGain)} (${percent(quote.projections[0].returnOnCapital)} sobre capital aportado)`,
  ].join("\n");
}

function percent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function render() {
  const quote = calculate();
  const increaseCopy =
    quote.increaseMonths > 0
      ? `Incluye ${quote.increaseMonths}% de incremento por escriturar en ${monthLabel(quote.closingMonth)}.`
      : "Precio base para escriturar en diciembre 2027.";
  const discountCopy =
    quote.discountPercent > 0
      ? ` Aplica ${Math.round(quote.discountPercent * 100)}% de descuento por aportar ${Math.round(quote.preClosingPercent * 100)}% antes de escritura.`
      : " Sin descuento por aportación previa.";

  output.totalPrice.textContent = money(quote.adjustedPrice);
  output.priceNote.textContent = `${increaseCopy}${discountCopy}`;
  output.discountOut.textContent = money(quote.discount);
  output.reservationOut.textContent = money(quote.reservation);
  output.downPayment.textContent = money(quote.downPayment);
  output.downPaymentHelp.textContent = `Máximo permitido: ${money(quote.maxDownPayment)}`;
  fields.downPayment.classList.toggle("is-over-limit", quote.rawDownPayment > quote.maxDownPayment);
  output.preClosingTarget.textContent = money(quote.targetPreClosing);
  output.financedTotal.textContent = money(quote.financedTotal);
  output.monthlyPayment.textContent = money(quote.monthlyPayment);
  output.closingBalance.textContent = money(quote.closingBalance);
  output.monthCount.textContent = quote.months;
  output.preClosingOut.textContent = `${Math.round(quote.preClosingPercent * 100)}%`;
  output.unitDetails.innerHTML = `
    <div><span>Nivel</span><strong>${quote.unit.level}</strong></div>
    <div><span>Tipo</span><strong>${quote.unit.type}</strong></div>
    <div><span>Modelo</span><strong>${quote.unit.model}</strong></div>
    <div><span>M2 totales</span><strong>${quote.unit.totalM2.toFixed(2)}</strong></div>
    <div><span>Precio lista</span><strong>${money(quote.unit.price)}</strong></div>
  `;
  renderProjections(quote);
  output.whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(getQuoteText(quote))}`;
  syncUrl(quote);
}

function renderProjections(quote) {
  const plantarProjection = quote.projections[0];

  output.projectionHorizon.textContent = `Plazo calculado: ${quote.months} meses`;
  output.investedCapital.textContent = money(quote.paidBeforeClosing);
  output.projectedValueBase.textContent = money(quote.adjustedPrice);
  output.plantarGain.textContent = money(plantarProjection.projectedGain);
  output.plantarReturn.textContent = percent(plantarProjection.returnOnCapital);
  output.brokerScript.textContent = `El cliente aporta ${money(quote.paidBeforeClosing)} antes de escriturar, pero participa en la plusvalía de una unidad de ${money(quote.adjustedPrice)}. Esta gráfica toma exactamente el plazo de la cotización: ${quote.months} meses. Con una plusvalía media de 17.5% anual, la ganancia estimada sería ${money(plantarProjection.projectedGain)}, equivalente a ${percent(plantarProjection.returnOnCapital)} sobre el capital que puso.`;
  renderMarketChart(quote);
  renderProjectionLegend(quote);
  renderProjectionExplanation(quote);
}

function renderMarketChart(quote) {
  const width = 720;
  const height = 300;
  const padding = { top: 18, right: 28, bottom: 38, left: 56 };
  const maxGain = Math.max(
    ...quote.projections.flatMap((item) => item.points.map((point) => point.gain)),
    1,
  );
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const xFor = (month) => padding.left + (month / Math.max(1, quote.months)) * plotWidth;
  const yFor = (gain) => padding.top + plotHeight - (gain / maxGain) * plotHeight;
  const gridValues = [0, 0.25, 0.5, 0.75, 1].map((value) => value * maxGain);
  const monthMarkers = [0, Math.round(quote.months / 2), quote.months];

  const grid = gridValues
    .map((value) => {
      const y = yFor(value);
      return `
        <line class="chart-grid" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" />
        <text class="chart-axis-label" x="8" y="${y + 4}">${shortMoney(value)}</text>
      `;
    })
    .join("");

  const xLabels = monthMarkers
    .map((month) => {
      const x = xFor(month);
      return `<text class="chart-axis-label" x="${x}" y="${height - 12}" text-anchor="middle">Mes ${month}</text>`;
    })
    .join("");

  const paths = quote.projections
    .map((item) => {
      const d = item.points
        .map((point, index) => `${index === 0 ? "M" : "L"} ${xFor(point.month).toFixed(2)} ${yFor(point.gain).toFixed(2)}`)
        .join(" ");
      const last = item.points[item.points.length - 1];
      return `
        <path class="market-line" d="${d}" stroke="${item.color}" />
        <circle cx="${xFor(last.month)}" cy="${yFor(last.gain)}" r="4" fill="${item.color}" />
      `;
    })
    .join("");

  output.marketChart.innerHTML = `
    <rect class="chart-bg" x="0" y="0" width="${width}" height="${height}" rx="8" />
    ${grid}
    <line class="chart-axis" x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" />
    <line class="chart-axis" x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" />
    ${xLabels}
    ${paths}
  `;
}

function renderProjectionLegend(quote) {
  output.projectionLegend.innerHTML = quote.projections
    .map((item) => {
      const explanation = item.basis === "totalValue" ? "sobre valor total" : "sobre dinero aportado";
      return `
        <div class="legend-item">
          <span style="background:${item.color}"></span>
          <strong>${item.label}</strong>
          <em>${money(item.projectedGain)} · ${percent(item.returnOnCapital)}</em>
          <small>${percent(item.rate)} anual, ${explanation}</small>
        </div>
      `;
    })
    .join("");
}

function renderProjectionExplanation(quote) {
  const plantar = quote.projections.find((item) => item.key === "plantar");
  const fondos = quote.projections.find((item) => item.key === "fondos");
  const cetes = quote.projections.find((item) => item.key === "cetes");
  const oro = quote.projections.find((item) => item.key === "oro");

  output.projectionExplanation.innerHTML = `
    <h3>¿Cómo leer esta gráfica?</h3>
    <p>
      En Plantar, la plusvalía estimada se calcula sobre el valor completo de la unidad:
      <strong>${money(quote.adjustedPrice)}</strong>. Por eso, aunque el cliente aporta
      <strong>${money(quote.paidBeforeClosing)}</strong> antes de escriturar, la ganancia
      proyectada de <strong>${money(plantar.projectedGain)}</strong> equivale a
      <strong>${percent(plantar.returnOnCapital)}</strong> sobre el dinero que puso.
    </p>
    <p>
      En fondos, CETES y oro el rendimiento se calcula solo sobre ese mismo capital aportado:
      fondos <strong>${percent(fondos.returnOnCapital)}</strong>, CETES
      <strong>${percent(cetes.returnOnCapital)}</strong> y oro
      <strong>${percent(oro.returnOnCapital)}</strong> durante este plazo de
      <strong>${quote.months} meses</strong>.
    </p>
  `;
}

function shortMoney(value) {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${Math.round(value / 1000)}K`;
  return `$${Math.round(value)}`;
}

function showToast(message) {
  output.toast.textContent = message;
  output.toast.classList.add("visible");
  window.setTimeout(() => output.toast.classList.remove("visible"), 2200);
}

document.querySelector("#quote-form").addEventListener("input", render);
document.querySelector("#quote-form").addEventListener("change", () => {
  clampAndFormatDownPayment(false);
  render();
});
document.querySelectorAll('input[name="modelFilter"]').forEach((input) => {
  input.addEventListener("change", () => {
    populateUnits();
    render();
  });
});

fields.reservation.addEventListener("blur", () => {
  fields.reservation.value = Math.round(selectMoneyValue(fields.reservation, 10000)).toString();
});

fields.downPayment.addEventListener("blur", () => {
  clampAndFormatDownPayment(true);
  render();
});

fields.downPayment.addEventListener("input", () => {
  const quote = calculate();
  if (quote.rawDownPayment > quote.maxDownPayment) {
    fields.downPayment.value = moneyInput(quote.maxDownPayment);
    showToast(`Enganche máximo: ${money(quote.maxDownPayment)}`);
  }
});

fields.clientName.addEventListener("input", render);
fields.clientContact.addEventListener("input", render);

output.copyQuote.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(getQuoteText(calculate()));
    showToast("Corrida copiada");
  } catch {
    showToast("No se pudo copiar automáticamente");
  }
});

function clampAndFormatDownPayment(showMessage) {
  const quote = calculate();
  const original = parseMoneyInput(fields.downPayment, 0);
  fields.downPayment.value = moneyInput(quote.downPayment);

  if (showMessage && original > quote.maxDownPayment) {
    showToast(`Enganche ajustado al máximo permitido: ${money(quote.maxDownPayment)}`);
  }
}

function applyQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const modelFilter = params.get("modelFilter");
  const filterInput = modelFilter
    ? document.querySelector(`input[name="modelFilter"][value="${modelFilter}"]`)
    : null;

  if (filterInput) filterInput.checked = true;
  populateUnits(false);

  const unit = params.get("unit");
  if (unit && units.some((item) => item.key === unit)) {
    fields.unit.value = unit;
  }

  const closingMonth = params.get("closingMonth");
  if (closingMonth && fields.closingMonth.querySelector(`option[value="${closingMonth}"]`)) {
    fields.closingMonth.value = closingMonth;
  }

  const preClosingPercent = params.get("preClosingPercent");
  if (
    preClosingPercent &&
    fields.preClosingPercent.querySelector(`option[value="${preClosingPercent}"]`)
  ) {
    fields.preClosingPercent.value = preClosingPercent;
  }

  const reservation = params.get("reservation");
  if (reservation && fields.reservation.querySelector(`option[value="${reservation}"]`)) {
    fields.reservation.value = reservation;
  }

  const downPayment = params.get("downPayment");
  if (downPayment) {
    fields.downPayment.value = downPayment;
  }

  clampAndFormatDownPayment(false);
}

function syncUrl(quote) {
  const params = new URLSearchParams({
    unit: quote.unit.key,
    closingMonth: quote.closingMonth,
    preClosingPercent: quote.preClosingPercent.toFixed(2),
    downPayment: moneyInput(quote.downPayment),
    reservation: Math.round(quote.reservation).toString(),
    modelFilter: selectedModelFilter(),
  });
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, "", nextUrl);
}

applyQueryParams();
render();
