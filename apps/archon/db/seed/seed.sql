--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.log DROP CONSTRAINT IF EXISTS "log_endpointId_endpoint_id_fk";
ALTER TABLE IF EXISTS ONLY public.lead DROP CONSTRAINT IF EXISTS "lead_endpointId_endpoint_id_fk";
ALTER TABLE IF EXISTS ONLY public.endpoint DROP CONSTRAINT IF EXISTS "endpoint_userId_user_id_fk";
ALTER TABLE IF EXISTS ONLY public."user" DROP CONSTRAINT IF EXISTS user_pkey;
ALTER TABLE IF EXISTS ONLY public.log DROP CONSTRAINT IF EXISTS log_pkey;
ALTER TABLE IF EXISTS ONLY public.lead DROP CONSTRAINT IF EXISTS lead_pkey;
ALTER TABLE IF EXISTS ONLY public.endpoint DROP CONSTRAINT IF EXISTS endpoint_pkey;
ALTER TABLE IF EXISTS ONLY drizzle.__drizzle_migrations DROP CONSTRAINT IF EXISTS __drizzle_migrations_pkey;
ALTER TABLE IF EXISTS drizzle.__drizzle_migrations ALTER COLUMN id DROP DEFAULT;
DROP TABLE IF EXISTS public."user";
DROP TABLE IF EXISTS public.log;
DROP TABLE IF EXISTS public.lead;
DROP TABLE IF EXISTS public.endpoint;
DROP SEQUENCE IF EXISTS drizzle.__drizzle_migrations_id_seq;
DROP TABLE IF EXISTS drizzle.__drizzle_migrations;
DROP TYPE IF EXISTS public.plan;
DROP TYPE IF EXISTS public."logType";
DROP TYPE IF EXISTS public."logPostType";
DROP SCHEMA IF EXISTS drizzle;
--
-- Name: drizzle; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA drizzle;


ALTER SCHEMA drizzle OWNER TO postgres;

--
-- Name: logPostType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."logPostType" AS ENUM (
    'http',
    'form',
    'webhook',
    'email'
);


ALTER TYPE public."logPostType" OWNER TO postgres;

--
-- Name: logType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."logType" AS ENUM (
    'success',
    'error'
);


ALTER TYPE public."logType" OWNER TO postgres;

--
-- Name: plan; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.plan AS ENUM (
    'free',
    'lite',
    'pro',
    'business',
    'enterprise'
);


ALTER TYPE public.plan OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: __drizzle_migrations; Type: TABLE; Schema: drizzle; Owner: postgres
--

CREATE TABLE drizzle.__drizzle_migrations (
    id integer NOT NULL,
    hash text NOT NULL,
    created_at bigint
);


ALTER TABLE drizzle.__drizzle_migrations OWNER TO postgres;

--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE; Schema: drizzle; Owner: postgres
--

CREATE SEQUENCE drizzle.__drizzle_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE drizzle.__drizzle_migrations_id_seq OWNER TO postgres;

--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: drizzle; Owner: postgres
--

ALTER SEQUENCE drizzle.__drizzle_migrations_id_seq OWNED BY drizzle.__drizzle_migrations.id;


--
-- Name: endpoint; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.endpoint (
    id text NOT NULL,
    "userId" text NOT NULL,
    name text NOT NULL,
    schema jsonb NOT NULL,
    enabled boolean DEFAULT true NOT NULL,
    "webhookEnabled" boolean DEFAULT false NOT NULL,
    "emailNotify" boolean DEFAULT false NOT NULL,
    webhook text,
    "formEnabled" boolean DEFAULT false NOT NULL,
    "successUrl" text,
    "failUrl" text,
    token text,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL
);


ALTER TABLE public.endpoint OWNER TO postgres;

--
-- Name: lead; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lead (
    id text NOT NULL,
    "endpointId" text NOT NULL,
    data jsonb NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL
);


ALTER TABLE public.lead OWNER TO postgres;

--
-- Name: log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.log (
    id text NOT NULL,
    "endpointId" text NOT NULL,
    type public."logType" NOT NULL,
    "postType" public."logPostType" NOT NULL,
    message jsonb NOT NULL,
    "createdAt" timestamp without time zone NOT NULL
);


ALTER TABLE public.log OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id text NOT NULL,
    email text NOT NULL,
    name text,
    "firstName" text,
    "lastName" text,
    "imageUrl" text,
    username text,
    "profileImageUrl" text,
    "hasImage" boolean,
    "lastSignInAt" timestamp with time zone,
    "lastActiveAt" timestamp with time zone,
    banned boolean DEFAULT false,
    "passwordEnabled" boolean DEFAULT false,
    "twoFactorEnabled" boolean DEFAULT false,
    "publicMetadata" jsonb,
    "privateMetadata" jsonb,
    "unsafeMetadata" jsonb,
    "emailVerified" boolean DEFAULT false,
    "leadCount" integer DEFAULT 0 NOT NULL,
    plan public.plan DEFAULT 'free'::public.plan NOT NULL,
    "stripeCustomerId" text,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: __drizzle_migrations id; Type: DEFAULT; Schema: drizzle; Owner: postgres
--

ALTER TABLE ONLY drizzle.__drizzle_migrations ALTER COLUMN id SET DEFAULT nextval('drizzle.__drizzle_migrations_id_seq'::regclass);


--
-- Data for Name: __drizzle_migrations; Type: TABLE DATA; Schema: drizzle; Owner: postgres
--

COPY drizzle.__drizzle_migrations (id, hash, created_at) FROM stdin;
1	c485b6f289e635df32e77fa9e6e824c3d4164f9f0c629adff9aec588c60445f8	1736214348913
\.


--
-- Data for Name: endpoint; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.endpoint (id, "userId", name, schema, enabled, "webhookEnabled", "emailNotify", webhook, "formEnabled", "successUrl", "failUrl", token, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: lead; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lead (id, "endpointId", data, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.log (id, "endpointId", type, "postType", message, "createdAt") FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, email, name, "firstName", "lastName", "imageUrl", username, "profileImageUrl", "hasImage", "lastSignInAt", "lastActiveAt", banned, "passwordEnabled", "twoFactorEnabled", "publicMetadata", "privateMetadata", "unsafeMetadata", "emailVerified", "leadCount", plan, "stripeCustomerId", "createdAt", "updatedAt") FROM stdin;
user_2rM3KSAwPCciGeqAf97UHppWozA	yoanyomba@solomon-ai.co	\N	D Yoan L	Mekontchou Yomba	https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yck0zS1hhQ01HOVpqNnNFTDV2TEh2Q0pneU8ifQ	dfdfd	https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yck0zS1hhQ01HOVpqNnNFTDV2TEh2Q0pneU8ifQ	t	\N	2025-01-08 16:50:52.786+00	f	f	f	{}	{}	{}	t	0	free	\N	2025-01-08 16:50:53.367655+00	2025-01-08 16:50:53.367655+00
\.


--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE SET; Schema: drizzle; Owner: postgres
--

SELECT pg_catalog.setval('drizzle.__drizzle_migrations_id_seq', 1, true);


--
-- Name: __drizzle_migrations __drizzle_migrations_pkey; Type: CONSTRAINT; Schema: drizzle; Owner: postgres
--

ALTER TABLE ONLY drizzle.__drizzle_migrations
    ADD CONSTRAINT __drizzle_migrations_pkey PRIMARY KEY (id);


--
-- Name: endpoint endpoint_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.endpoint
    ADD CONSTRAINT endpoint_pkey PRIMARY KEY (id);


--
-- Name: lead lead_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lead
    ADD CONSTRAINT lead_pkey PRIMARY KEY (id);


--
-- Name: log log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.log
    ADD CONSTRAINT log_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: endpoint endpoint_userId_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.endpoint
    ADD CONSTRAINT "endpoint_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: lead lead_endpointId_endpoint_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lead
    ADD CONSTRAINT "lead_endpointId_endpoint_id_fk" FOREIGN KEY ("endpointId") REFERENCES public.endpoint(id) ON DELETE CASCADE;


--
-- Name: log log_endpointId_endpoint_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.log
    ADD CONSTRAINT "log_endpointId_endpoint_id_fk" FOREIGN KEY ("endpointId") REFERENCES public.endpoint(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

