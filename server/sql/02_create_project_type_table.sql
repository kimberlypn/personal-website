CREATE TABLE project_type
(
    id SERIAL,
    type VARCHAR(50) NOT NULL,
    CONSTRAINT project_type_pkey PRIMARY KEY (id)
);

ALTER TABLE project_type OWNER TO personal_website;