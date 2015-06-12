require 'rubygems'
require 'sinatra'
require "active_record"
require './routes'
configure { set :server, :puma }

ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3',
	:database =>  'sinatra_application.sqlite3.db'
	)
