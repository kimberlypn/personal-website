CREATE TABLE public.project
(
    id bigint NOT NULL DEFAULT nextval('project_id_seq'::regclass),
    title character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'No Title'::character varying,
    headline character varying(255) COLLATE pg_catalog."default",
    language character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'N/A'::character varying,
    technology text COLLATE pg_catalog."default",
    type character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'N/A'::character varying,
    collaborators text COLLATE pg_catalog."default" NOT NULL DEFAULT 'Kimberly Nguyen'::text,
    start_date date NOT NULL,
    end_date date NOT NULL,
    img_src character varying(255) COLLATE pg_catalog."default" NOT NULL,
    repo character varying(255) COLLATE pg_catalog."default",
    demo character varying(255) COLLATE pg_catalog."default",
    inserted_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    CONSTRAINT project_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.project
    OWNER to personal_website;