module TransmissionsHelper
	def generate_uid
		return SecureRandom.urlsafe_base64(16).upcase
	end

	def generate_code_name
		return "OnlyOneCodeNameSoFar"
	end
end
