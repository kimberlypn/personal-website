defmodule PersonalWebsite.ProjectsTest do
  use PersonalWebsite.DataCase

  alias PersonalWebsite.Projects

  describe "projects" do
    alias PersonalWebsite.Projects.Project

    @valid_attrs %{collaborators: "some collaborators", description: "some description", end_date: ~D[2010-04-17], language: "some language", start_date: ~D[2010-04-17], title: "some title", type: "some type"}
    @update_attrs %{collaborators: "some updated collaborators", description: "some updated description", end_date: ~D[2011-05-18], language: "some updated language", start_date: ~D[2011-05-18], title: "some updated title", type: "some updated type"}
    @invalid_attrs %{collaborators: nil, description: nil, end_date: nil, language: nil, start_date: nil, title: nil, type: nil}

    def project_fixture(attrs \\ %{}) do
      {:ok, project} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Projects.create_project()

      project
    end

    test "list_projects/0 returns all projects" do
      project = project_fixture()
      assert Projects.list_projects() == [project]
    end

    test "get_project!/1 returns the project with given id" do
      project = project_fixture()
      assert Projects.get_project!(project.id) == project
    end

    test "create_project/1 with valid data creates a project" do
      assert {:ok, %Project{} = project} = Projects.create_project(@valid_attrs)
      assert project.collaborators == "some collaborators"
      assert project.description == "some description"
      assert project.end_date == ~D[2010-04-17]
      assert project.language == "some language"
      assert project.start_date == ~D[2010-04-17]
      assert project.title == "some title"
      assert project.type == "some type"
    end

    test "create_project/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Projects.create_project(@invalid_attrs)
    end

    test "update_project/2 with valid data updates the project" do
      project = project_fixture()
      assert {:ok, project} = Projects.update_project(project, @update_attrs)
      assert %Project{} = project
      assert project.collaborators == "some updated collaborators"
      assert project.description == "some updated description"
      assert project.end_date == ~D[2011-05-18]
      assert project.language == "some updated language"
      assert project.start_date == ~D[2011-05-18]
      assert project.title == "some updated title"
      assert project.type == "some updated type"
    end

    test "update_project/2 with invalid data returns error changeset" do
      project = project_fixture()
      assert {:error, %Ecto.Changeset{}} = Projects.update_project(project, @invalid_attrs)
      assert project == Projects.get_project!(project.id)
    end

    test "delete_project/1 deletes the project" do
      project = project_fixture()
      assert {:ok, %Project{}} = Projects.delete_project(project)
      assert_raise Ecto.NoResultsError, fn -> Projects.get_project!(project.id) end
    end

    test "change_project/1 returns a project changeset" do
      project = project_fixture()
      assert %Ecto.Changeset{} = Projects.change_project(project)
    end
  end
end
