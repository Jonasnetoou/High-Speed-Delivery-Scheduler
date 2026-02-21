// content.js - MOTOR JONAO - PASTA WAY
// PADRAO OK — ESTRATÉGIA: ALVO CURTO + TODOS OS TURNOS + ANTITRAVAMENTO

const TARGET_INCLUDE = ["pasta", "way"]; 
const TARGET_EXCLUDE = ["flori", "norte", "sul da ilha", "itacorubi", "repasse diario", "trindade"]; 

if (window.location.href.includes("AguardandoConfirmacao")) {
    throw new Error("MOTOR DESLIGADO - SUCESSO."); 
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function clicarEnviar() {
  const container = document.querySelector("#divPeriodos");
  if (container && container.children.length > 0) {
    const labels = container.querySelectorAll("label");
    labels.forEach(btn => { 
        // Seleciona qualquer turno disponível (ALL)
        if (!btn.classList.contains('active')) btn.click(); 
    });
    
    const termo = document.querySelector("#ckbTermo");
    const send = document.querySelector("#send");
    if (termo && !termo.checked) termo.click();
    if (send) {
        console.log("✅ MOTOR JONAO: Pasta Way detectado. Enviando..."); 
        send.click(); 
    }
    return true;
  }
  return false;
}

function turboLoop() {
  const bodyText = document.body.innerText;

  if (bodyText.includes("Não há Subpraças") || bodyText.includes("não possui vagas")) {
    setTimeout(() => { window.location.reload(); }, 300); 
    return;
  }

  if (window.location.href.includes("/Agendamentos/Criar")) {
    const zonas = document.querySelectorAll(".list-group-item");
    
    if (document.querySelector("#divPeriodos") && document.querySelector("#divPeriodos").children.length > 0) {
        clicarEnviar();
        return;
    }

    let achouLoja = false;
    for (const zona of zonas) {
      const t = normalize(zona.innerText);
      // Validação de segurança para praças específicas
      if (TARGET_INCLUDE.every(k => t.includes(k)) && !TARGET_EXCLUDE.some(k => t.includes(k))) {
        zona.click();
        setTimeout(clicarEnviar, 150); 
        achouLoja = true;
        return; 
      }
    }
    
    if (zonas.length > 0 && !achouLoja) {
        setTimeout(() => { window.location.reload(); }, 300); 
        return;
    }
  }
  requestAnimationFrame(turboLoop); 
}

turboLoop();

setInterval(() => {
  const okButton = document.querySelector(".swal2-confirm, .btn-primary, button[type='button']");
  if (okButton && (document.body.innerText.includes("Não Confirmadas") || document.body.innerText.includes("processada"))) {
    console.log("⚠️ MOTOR JONAO: Limpando erro e reiniciando pesca..."); 
    okButton.click();
    setTimeout(() => { window.location.reload(); }, 50); 
  }
}, 300);

console.log("🚀 MOTOR JONAO ATIVADO - PASTA WAY (ALL)");