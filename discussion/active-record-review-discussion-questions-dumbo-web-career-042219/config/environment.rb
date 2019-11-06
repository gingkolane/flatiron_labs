require 'bundler/setup'
Bundler.require

require 'active_record'
require 'rake'

require_all 'app'

# require_relative '../app'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
)

ActiveRecord::Base.logger = Logger.new(STDOUT)


