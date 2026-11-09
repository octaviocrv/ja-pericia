// Dados de contato e institucionais da JA Perícia.
// Itens marcados com TODO são placeholders — trocar pelos valores reais antes de publicar.

export const SITE = {
  marca: "JA Perícia",
  empresa: "JA Contabilidade e Perícia",
  // Protagonista da página; a JA Perícia entra como assinatura de apoio
  perito: "João Firmino",
  cargo: "Perito Contábil",
  crc: "CRC/MG: 088990/0-3",
  cidade: "Contagem",
  estado: "MG",
  endereco: "R. Cel. Durval de Barros, 842 — Sala 206",
  email: "jacontabilidadeepericia@gmail.com",
  // TODO: perfil de Instagram da JA Perícia (ou do perito)
  instagramHandle: "@japericia",
  instagramUrl: "https://instagram.com/",
  whatsappNumber: "553131509984",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MENSAGENS = {
  padrao: "Olá! Gostaria de apresentar um caso para análise pericial.",
  duvida: "Olá! Tenho uma dúvida sobre perícia contábil e gostaria de conversar.",
  advogado: "Olá! Sou advogado(a) e gostaria de apresentar um processo para análise pericial contábil.",
};
