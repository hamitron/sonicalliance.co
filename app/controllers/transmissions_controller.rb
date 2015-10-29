class TransmissionsController < ApplicationController
	
	def new
		@transmission = Transmission.new(uid: generate_uid, codename: generate_code_name)
	end

	def create
		@transmission = Transmission.new(transmission_params)
		if @transmission.save?
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
