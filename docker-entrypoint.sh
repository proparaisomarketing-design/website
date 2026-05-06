#!/bin/sh
set -e

# Cria/atualiza tabelas no banco SQLite persistente.
# Idempotente: se o schema já está sincronizado, não muda nada.
echo "[entrypoint] aplicando schema Prisma em $DATABASE_URL ..."
prisma db push --skip-generate --accept-data-loss=false || {
  echo "[entrypoint] prisma db push falhou — abortando"
  exit 1
}

echo "[entrypoint] iniciando aplicação Next.js"
exec "$@"
