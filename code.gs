// ID da sua planilha (copie da URL do Google Sheets)
const PLANILHA_ID = "1L-tJVdYrDNScfG0eM-AuSmUgy5Fm_IzTIXzzp1-EhrM";

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

// Função que será chamada pelo HTML
function colorirCelula(celula, cor) {
  const planilha = SpreadsheetApp.openById(PLANILHA_ID);
  const aba = planilha.getActiveSheet(); // ou .getSheetByName("NomeDaAba") se preferir
  aba.getRange(celula).setBackground(cor);
  return `✅ Célula ${celula} colorida com ${cor}`;
}
