defmodule PersonalWebsite.Repo.Migrations.CreateExperiences do
  use Ecto.Migration

  def change do
    create table(:experiences) do
      add :company, :string, null: false
      add :position, :string, null: false
      add :location, :string, null: false
      add :description, :text
      add :start_date, :date, null: false
      add :end_date, :date

      timestamps()
    end

  end
end
