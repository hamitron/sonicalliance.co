require 'rubygems'
require 'sinatra'
configure { set :server, :puma }
require './routes'
