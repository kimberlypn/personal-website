CREATE TABLE experience
(
    id SERIAL,
    company VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT[],
    start_date DATE NOT NULL,
    end_date DATE,
    inserted_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT experience_pkey PRIMARY KEY (id)
);

ALTER TABLE experience OWNER TO personal_website;