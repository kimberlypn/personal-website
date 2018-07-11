defmodule PersonalWebsiteWeb.Router do
  use PersonalWebsiteWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PersonalWebsiteWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/projects", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", PersonalWebsiteWeb do
  #   pipe_through :api
  # end
end
