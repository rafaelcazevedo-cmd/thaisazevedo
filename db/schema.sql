-- Vidas Transformadas — depoimentos (Cloudflare D1)
-- Apply with: npx wrangler d1 execute thaisazevedo-depoimentos --remote --file=db/schema.sql
CREATE TABLE IF NOT EXISTS depoimentos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  paciente TEXT,                            -- "Nome, idade" livre; opcional
  comentario TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pendente',  -- pendente | aprovado
  criado_em TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_depoimentos_status ON depoimentos(status, id DESC);
