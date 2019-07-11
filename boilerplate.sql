--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: users; Type: TABLE; Schema: public; Owner: rekeningku
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    company character varying(255) NOT NULL,
    image_url character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO rekeningku;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: rekeningku
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO rekeningku;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rekeningku
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: rekeningku
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: rekeningku
--

COPY public.users (id, first_name, last_name, company, image_url) FROM stdin;
10	Dylan	Harber	Cormier - Fritsch	https://s3.amazonaws.com/uifaces/faces/twitter/incubo82/128.jpg
4	Tabitha	Jacobi	Morar - Block	https://s3.amazonaws.com/uifaces/faces/twitter/shesgared/128.jpg
5	Jarred	Bins	Ebert, Walker and Christiansen	https://s3.amazonaws.com/uifaces/faces/twitter/louis_currie/128.jpg
9	Andrew	Herman	Christiansen - Dibbert	https://s3.amazonaws.com/uifaces/faces/twitter/danvernon/128.jpg
11	Clement	Miller	Green - Ebert	https://s3.amazonaws.com/uifaces/faces/twitter/aluisio_azevedo/128.jpg
12	Newton	Huel	Sanford, Spinka and Dare	https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg
40	Jack	Maa	Alibaba	https://cdn-images-1.medium.com/max/2400/0*CSoVFfh0ne6yCBo9
7	Muhammad Zahidin	Nur	Bukalapak	https://pbs.twimg.com/media/C43DV9uUoAAgaBc.jpg
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rekeningku
--

SELECT pg_catalog.setval('public.users_id_seq', 98, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: rekeningku
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

