defmodule PersonalWebsite.Repo.Migrations.CreateProjects do
  use Ecto.Migration

  def change do
    create table(:projects) do
      add :title, :string, default: "No Title", null: false
      add :headline, :string
      add :language, :string, default: "N/A", null: false
      add :technology, :text
      add :type, :string, default: "N/A", null: false
      add :collaborators, :text, default: "Kimberly Nguyen", null: false
      add :description, :text
      add :start_date, :date, null: false
      add :end_date, :date, null: false
      add :img_src, :string, null: false
      add :github, :string

      timestamps()
    end

  end
end
