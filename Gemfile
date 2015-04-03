source 'https://rubygems.org'
#
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', github: "rails/rails", branch: "4-2-stable"
gem 'rails-api', '~> 0.4.0'
gem 'active_model_serializers', '~> 0.8.3' # NOTE: not the 0.9
gem 'devise', '~> 3.4.1'
gem 'sqlite3', group: :development
gem 'pg', group: :production

# Use SCSS for stylesheets
gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Rails Html Sanitizer for HTML sanitization
gem 'rails-html-sanitizer'

# Use Unicorn as the app server
gem 'puma'
gem 'rack-cors'

gem 'autoprefixer-rails'

group :production do
	gem 'rails_12factor'
end

group :development, :test do
	gem 'byebug'
	gem 'web-console', '~> 2.0'
	gem 'spring'
	gem 'rspec-rails'
	gem 'capybara'
	gem 'capybara-screenshot'
	gem 'selenium-webdriver'
	gem 'launchy'
	gem 'database_rewinder'
	gem 'foreman'

	gem 'factory_girl_rails'
end
gem 'spring-commands-rspec', group: :development
# gem 'rails-assets-foundation-apps', source: 'https://rails-assets.org'
