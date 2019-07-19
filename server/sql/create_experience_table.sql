CREATE TABLE public.experience
(
    id bigint NOT NULL DEFAULT nextval('experience_id_seq'::regclass),
    company character varying(255) COLLATE pg_catalog."default" NOT NULL,
    position character varying(255) COLLATE pg_catalog."default" NOT NULL,
    location character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    start_date date NOT NULL,
    end_date date,
    inserted_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    CONSTRAINT experience_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.experience
    OWNER to personal_website;