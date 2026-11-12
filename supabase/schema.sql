-- Etapa 1 (versão de teste): uma linha por conta, com todos os dados do app em JSON.
-- Na construção (Vite + React) isto vira tabelas de verdade (músicas, setlists, bandas, anotações).

create table if not exists public.user_data (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.user_data enable row level security;

-- Cada pessoa só lê e grava a própria linha.
create policy "ler os próprios dados" on public.user_data
  for select to authenticated using ((select auth.uid()) = user_id);

create policy "criar os próprios dados" on public.user_data
  for insert to authenticated with check ((select auth.uid()) = user_id);

create policy "atualizar os próprios dados" on public.user_data
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
