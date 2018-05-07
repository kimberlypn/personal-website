# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :personal_website, PersonalWebsiteWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "v5tTDn8HNzI4/61EW/KR/5Z9zItPcTe2QeXyf4D311/SZ9OnRSCTOkakkkXkibXJ",
  render_errors: [view: PersonalWebsiteWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PersonalWebsite.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
