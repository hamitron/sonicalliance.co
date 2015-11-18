class TransmissionsController < ApplicationController
	include TransmissionsHelper

	def index
		@transmissions = Transmission.all
	end
	
	def new
		uid = generate_uid
		code = generate_code_name
		@transmission = Transmission.new(uid: uid, codename: code)
	end

	def create
		@transmission = Transmission.create(transmission_params)
		if @transmission
			redirect_to root_path
		else
			render 'new'
		end
	end

	def edit
		
	end

	private

	def transmission_params
		params.require(:transmission).permit(:name, :message, :uid, :codename)
	end

end
