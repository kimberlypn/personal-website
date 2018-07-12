defmodule PersonalWebsiteWeb.ExperienceControllerTest do
  use PersonalWebsiteWeb.ConnCase

  alias PersonalWebsite.Experiences
  alias PersonalWebsite.Experiences.Experience

  @create_attrs %{company: "some company", description: "some description", end_date: ~D[2010-04-17], location: "some location", position: "some position", start_date: ~D[2010-04-17]}
  @update_attrs %{company: "some updated company", description: "some updated description", end_date: ~D[2011-05-18], location: "some updated location", position: "some updated position", start_date: ~D[2011-05-18]}
  @invalid_attrs %{company: nil, description: nil, end_date: nil, location: nil, position: nil, start_date: nil}

  def fixture(:experience) do
    {:ok, experience} = Experiences.create_experience(@create_attrs)
    experience
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all experiences", %{conn: conn} do
      conn = get conn, experience_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create experience" do
    test "renders experience when data is valid", %{conn: conn} do
      conn = post conn, experience_path(conn, :create), experience: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, experience_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "company" => "some company",
        "description" => "some description",
        "end_date" => ~D[2010-04-17],
        "location" => "some location",
        "position" => "some position",
        "start_date" => ~D[2010-04-17]}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, experience_path(conn, :create), experience: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update experience" do
    setup [:create_experience]

    test "renders experience when data is valid", %{conn: conn, experience: %Experience{id: id} = experience} do
      conn = put conn, experience_path(conn, :update, experience), experience: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, experience_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "company" => "some updated company",
        "description" => "some updated description",
        "end_date" => ~D[2011-05-18],
        "location" => "some updated location",
        "position" => "some updated position",
        "start_date" => ~D[2011-05-18]}
    end

    test "renders errors when data is invalid", %{conn: conn, experience: experience} do
      conn = put conn, experience_path(conn, :update, experience), experience: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete experience" do
    setup [:create_experience]

    test "deletes chosen experience", %{conn: conn, experience: experience} do
      conn = delete conn, experience_path(conn, :delete, experience)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, experience_path(conn, :show, experience)
      end
    end
  end

  defp create_experience(_) do
    experience = fixture(:experience)
    {:ok, experience: experience}
  end
end
