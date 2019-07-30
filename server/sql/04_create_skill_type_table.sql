CREATE TABLE skill_type
(
    id SERIAL,
    type VARCHAR(50) NOT NULL,
    CONSTRAINT skill_type_pkey PRIMARY KEY (id)
);

ALTER TABLE skill_type OWNER TO personal_website;