

get '/' do 
 erb :index
end

get '/register/?' do
	erb :register
end

get '/test' do
	@color = SecureRandom.hex(n=6)[0..5]
	@blackbox = Random.rand(1..10).to_i
	erb :test
end