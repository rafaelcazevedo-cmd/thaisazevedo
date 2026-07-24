/**
 * Vidas Transformadas — depoimentos publicados.
 *
 * Fluxo (decisão 2026-07-25): sem formulário/backend. Thais envia cada novo
 * depoimento pelo WhatsApp (canal zap) → adicionamos AQUI, no TOPO da lista
 * (a página exibe na ordem do array = mais recentes primeiro) → deploy.
 * Só publicar com a confirmação da Thais de que a família autorizou.
 */
export interface Depoimento {
  /** Nome de quem escreveu (como deve aparecer). */
  nome: string;
  /** Nome e idade do paciente, opcional (ex.: "Miguel, 8 anos"). */
  paciente?: string;
  /** Texto completo, sem cortes — a página não usa "ler mais". */
  texto: string;
}

export const depoimentos: Depoimento[] = [
  // Novos depoimentos entram no topo.
];
