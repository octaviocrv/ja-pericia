// Dados de contato e institucionais da JA Perícia.
// Itens marcados com TODO são placeholders — trocar pelos valores reais antes de publicar.

export const SITE = {
  marca: "JA Perícia",
  empresa: "JA Contabilidade e Perícia",
  // Protagonista da página; a JA Perícia entra como assinatura de apoio
  perito: "João Firmino",
  cargo: "Perito Contábil",
  // TODO: registro profissional (CRC) e inscrição no CNPC
  crc: "CRC [a confirmar]",
  // TODO: confirmar cidade-base
  cidade: "[Cidade]",
  estado: "[UF]",
  // TODO: endereço do escritório (deixar vazio para mostrar só "atendimento em todo o Brasil")
  endereco: "[Endereço do escritório]",
  // TODO: e-mail de contato
  email: "[email@japericia.com.br]",
  // TODO: perfil de Instagram da JA Perícia (ou do perito)
  instagramHandle: "@japericia",
  instagramUrl: "https://instagram.com/",
  // TODO: número real de WhatsApp, formato 55DDDNUMERO
  whatsappNumber: "5500000000000",
  // TODO: CNPJ real da JA Contabilidade e Perícia
  cnpj: "00.000.000/0001-00",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MENSAGENS = {
  padrao: "Olá! Gostaria de apresentar um caso para análise pericial.",
  duvida: "Olá! Tenho uma dúvida sobre perícia contábil e gostaria de conversar.",
  advogado: "Olá! Sou advogado(a) e gostaria de conversar sobre assistência técnica pericial em um processo.",
};
