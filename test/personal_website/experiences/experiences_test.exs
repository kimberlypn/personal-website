defmodule PersonalWebsite.ExperiencesTest do
  use PersonalWebsite.DataCase

  alias PersonalWebsite.Experiences

  describe "experiences" do
    alias PersonalWebsite.Experiences.Experience

    @valid_attrs %{company: "some company", description: "some description", end_date: ~D[2010-04-17], location: "some location", position: "some position", start_date: ~D[2010-04-17]}
    @update_attrs %{company: "some updated company", description: "some updated description", end_date: ~D[2011-05-18], location: "some updated location", position: "some updated position", start_date: ~D[2011-05-18]}
    @invalid_attrs %{company: nil, description: nil, end_date: nil, location: nil, position: nil, start_date: nil}

    def experience_fixture(attrs \\ %{}) do
      {:ok, experience} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Experiences.create_experience()

      experience
    end

    test "list_experiences/0 returns all experiences" do
      experience = experience_fixture()
      assert Experiences.list_experiences() == [experience]
    end

    test "get_experience!/1 returns the experience with given id" do
      experience = experience_fixture()
      assert Experiences.get_experience!(experience.id) == experience
    end

    test "create_experience/1 with valid data creates a experience" do
      assert {:ok, %Experience{} = experience} = Experiences.create_experience(@valid_attrs)
      assert experience.company == "some company"
      assert experience.description == "some description"
      assert experience.end_date == ~D[2010-04-17]
      assert experience.location == "some location"
      assert experience.position == "some position"
      assert experience.start_date == ~D[2010-04-17]
    end

    test "create_experience/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Experiences.create_experience(@invalid_attrs)
    end

    test "update_experience/2 with valid data updates the experience" do
      experience = experience_fixture()
      assert {:ok, experience} = Experiences.update_experience(experience, @update_attrs)
      assert %Experience{} = experience
      assert experience.company == "some updated company"
      assert experience.description == "some updated description"
      assert experience.end_date == ~D[2011-05-18]
      assert experience.location == "some updated location"
      assert experience.position == "some updated position"
      assert experience.start_date == ~D[2011-05-18]
    end

    test "update_experience/2 with invalid data returns error changeset" do
      experience = experience_fixture()
      assert {:error, %Ecto.Changeset{}} = Experiences.update_experience(experience, @invalid_attrs)
      assert experience == Experiences.get_experience!(experience.id)
    end

    test "delete_experience/1 deletes the experience" do
      experience = experience_fixture()
      assert {:ok, %Experience{}} = Experiences.delete_experience(experience)
      assert_raise Ecto.NoResultsError, fn -> Experiences.get_experience!(experience.id) end
    end

    test "change_experience/1 returns a experience changeset" do
      experience = experience_fixture()
      assert %Ecto.Changeset{} = Experiences.change_experience(experience)
    end
  end
end
