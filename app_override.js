function mdToHtml(md) {
  // Replace display math with rendered KaTeX HTML (or plain formula fallback)
  md = md.replace(/\$\$([\s\S]*?)\$\$/g, (_, formula) => {
    if (typeof katex !== "undefined") {
      try { return katex.renderToString(formula.trim(), {displayMode: true, throwOnError: false}); }
      catch(e) { return formula.trim(); }
    }
    return formula.trim();
  });
  // Replace inline math
  md = md.replace(/\$(.+?)\$/g, (_, formula) => {
    if (typeof katex !== "undefined") {
      try { return katex.renderToString(formula.trim(), {displayMode: false, throwOnError: false}); }
      catch(e) { return formula.trim(); }
    }
    return formula.trim();
  });
  // Standard markdown
  md = md
    .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  // Wrap in paragraphs
  md = "<p>" + md.replace(/\n\n/g, "</p><p>") + "</p>";
  md = md.replace(/<p><\/p>/g, "").replace(/<\/p>\n<p>/g, "</p><p>");
  return md;
}

function renderExamTopics() {
  const el = $("#examList");
  if (!el || typeof examEssentials === "undefined") return;
  el.innerHTML = examEssentials.map((topic, i) => `
    <div class="exam-card" data-topic="${topic.id}">
      <div class="exam-card-header">
        <span class="num">${i + 1}</span>
        <h3>${topic.title}</h3>
        <span class="toggle">▼</span>
      </div>
      <div class="exam-card-body">${mdToHtml(topic.content)}</div>
    </div>`).join("");
  el.querySelectorAll(".exam-card-header").forEach((header) =>
    header.addEventListener("click", () => {
      const card = header.closest(".exam-card");
      card.classList.toggle("open");
      header.querySelector(".toggle").textContent = card.classList.contains("open") ? "▲" : "▼";
    })
  );
}
