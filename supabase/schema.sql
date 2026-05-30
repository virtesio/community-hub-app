-- Enable UUID generation
create extension if not exists "pgcrypto";

create table if not exists public.clubs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null,
  name text not null,
  category text not null,
  description text not null,
  city text not null,
  region text not null,
  website_url text,
  approved boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.openings (
  id uuid primary key default gen_random_uuid(),
  club_id uuid references public.clubs(id) on delete cascade,
  title text not null,
  opening_type text not null,
  description text not null,
  deadline date,
  status text default 'draft',
  created_at timestamptz default now()
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  opening_id uuid references public.openings(id) on delete cascade,
  user_id uuid not null,
  applicant_name text not null,
  applicant_email text not null,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists public.followers (
  id uuid primary key default gen_random_uuid(),
  club_id uuid references public.clubs(id) on delete cascade,
  user_id uuid not null,
  created_at timestamptz default now(),
  unique(club_id, user_id)
);

alter table public.clubs enable row level security;
alter table public.openings enable row level security;
alter table public.applications enable row level security;
alter table public.followers enable row level security;

create policy "Anyone can view clubs" on public.clubs for select using (true);
create policy "Users can create clubs" on public.clubs for insert with check (auth.uid() = owner_id);
create policy "Owners can update clubs" on public.clubs for update using (auth.uid() = owner_id);

create policy "Anyone can view published openings" on public.openings for select using (status = 'published');
create policy "Club owners can create openings" on public.openings for insert with check (
  exists (select 1 from public.clubs where clubs.id = club_id and clubs.owner_id = auth.uid())
);
create policy "Club owners can update openings" on public.openings for update using (
  exists (select 1 from public.clubs where clubs.id = club_id and clubs.owner_id = auth.uid())
);

create policy "Users can submit applications" on public.applications for insert with check (auth.uid() = user_id);
create policy "Users can see own applications" on public.applications for select using (auth.uid() = user_id);

create policy "Users can follow clubs" on public.followers for insert with check (auth.uid() = user_id);
create policy "Users can view own follows" on public.followers for select using (auth.uid() = user_id);
