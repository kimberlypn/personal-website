defmodule PersonalWebsiteWeb.ProjectControllerTest do
  use PersonalWebsiteWeb.ConnCase

  alias PersonalWebsite.Projects
  alias PersonalWebsite.Projects.Project

  @create_attrs %{collaborators: "some collaborators", description: "some description", end_date: ~D[2010-04-17], language: "some language", start_date: ~D[2010-04-17], title: "some title", type: "some type"}
  @update_attrs %{collaborators: "some updated collaborators", description: "some updated description", end_date: ~D[2011-05-18], language: "some updated language", start_date: ~D[2011-05-18], title: "some updated title", type: "some updated type"}
  @invalid_attrs %{collaborators: nil, description: nil, end_date: nil, language: nil, start_date: nil, title: nil, type: nil}

  def fixture(:project) do
    {:ok, project} = Projects.create_project(@create_attrs)
    project
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all projects", %{conn: conn} do
      conn = get conn, project_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create project" do
    test "renders project when data is valid", %{conn: conn} do
      conn = post conn, project_path(conn, :create), project: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, project_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "collaborators" => "some collaborators",
        "description" => "some description",
        "end_date" => ~D[2010-04-17],
        "language" => "some language",
        "start_date" => ~D[2010-04-17],
        "title" => "some title",
        "type" => "some type"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, project_path(conn, :create), project: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update project" do
    setup [:create_project]

    test "renders project when data is valid", %{conn: conn, project: %Project{id: id} = project} do
      conn = put conn, project_path(conn, :update, project), project: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, project_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "collaborators" => "some updated collaborators",
        "description" => "some updated description",
        "end_date" => ~D[2011-05-18],
        "language" => "some updated language",
        "start_date" => ~D[2011-05-18],
        "title" => "some updated title",
        "type" => "some updated type"}
    end

    test "renders errors when data is invalid", %{conn: conn, project: project} do
      conn = put conn, project_path(conn, :update, project), project: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete project" do
    setup [:create_project]

    test "deletes chosen project", %{conn: conn, project: project} do
      conn = delete conn, project_path(conn, :delete, project)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, project_path(conn, :show, project)
      end
    end
  end

  defp create_project(_) do
    project = fixture(:project)
    {:ok, project: project}
  end
end
