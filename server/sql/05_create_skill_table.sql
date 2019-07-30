CREATE TABLE skill
(
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    proficiency INTEGER NOT NULL DEFAULT 0 CHECK (proficiency >= 0),
    type INTEGER NOT NULL REFERENCES skill_type(id),
    inserted_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT skill_pkey PRIMARY KEY (id)
);

ALTER TABLE skill OWNER TO personal_website;