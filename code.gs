// ID da sua planilha (copie da URL do Google Sheets)
const PLANILHA_ID = "1L-tJVdYrDNScfG0eM-AuSmUgy5Fm_IzTIXzzp1-EhrM";

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Função que será chamada pelo HTML
function colorirCelula(celula, cor) {
  const planilha = SpreadsheetApp.openById(PLANILHA_ID);
  const aba = planilha.getActiveSheet(); // ou .getSheetByName("NomeDaAba") se preferir
  aba.getRange(celula).setBackground(cor);
  return `✅ Célula ${celula} colorida com ${cor}`;
}

function colorirLinha(linha, cor) {
  const planilha = SpreadsheetApp.openById(PLANILHA_ID);
  const aba = planilha.getActiveSheet();
  aba.getRange(linha + ":" + linha).setBackground(cor);
  return `✅ Linha ${linha} colorida com ${cor}`;
}

function colorirIntervalo(inicio, fim, cor) {
  const planilha = SpreadsheetApp.openById(PLANILHA_ID);
  const aba = planilha.getActiveSheet();
  aba.getRange(inicio + ":" + fim).setBackground(cor);
  return `✅ Intervalo de ${inicio} a ${fim} colorido com ${cor}`;
}
