class SessionsController < ApplicationController
	def new
		@user = User.new
	end


	def create
		user = User.find_by(params[:session][:email])
		if user && user.authenticate(params[:session][:password])
			session[:user_id] = user.id.to_s
			redirect_to root_path
		else
			render "new"
		end
	end

	def destroy
		reset_session
		redirect_to root_path
	end

end
