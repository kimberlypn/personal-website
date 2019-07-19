CREATE TABLE public.skill
(
    id bigint NOT NULL DEFAULT nextval('skill_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    proficiency integer NOT NULL DEFAULT 0,
    category character varying(255) COLLATE pg_catalog."default" NOT NULL,
    inserted_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    CONSTRAINT skill_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.skill
    OWNER to personal_website;