CREATE TABLE project
(
    id SERIAL,
    title VARCHAR(255) NOT NULL DEFAULT 'No Title',
    headline VARCHAR(255),
    technology TEXT[] NOT NULL DEFAULT '{}',
    type INTEGER NOT NULL REFERENCES project_type(id),
    collaborators TEXT[] NOT NULL DEFAULT '{"Kimberly Nguyen"}',
    start_date DATE NOT NULL,
    end_date DATE CHECK (end_date >= start_date),
    img_src VARCHAR(255),
    repo VARCHAR(255),
    demo VARCHAR(255),
    inserted_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT project_pkey PRIMARY KEY (id)
);

ALTER TABLE project OWNER TO personal_website;