require 'rubygems'
require 'sinatra'
require 'rack'
require 'haml'
require 'json'
require './app'


set :run, false
set :environment, :development
set :views, "views"

set :media_dir, 'media'

log = File.new("log/sinatra.log", "w")
STDOUT.reopen(log)
STDERR.reopen(log)

require File.dirname(__FILE__) + '/app.rb'
run Sinatra::Application
