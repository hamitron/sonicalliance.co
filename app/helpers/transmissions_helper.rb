module TransmissionsHelper
	require 'faker'
	
	def generate_uid
		return SecureRandom.urlsafe_base64(16).upcase
	end

	def generate_code_name
		Faker::Hacker.ingverb
	end
end
