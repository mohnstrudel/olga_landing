module FrontHelper

	def strip_phone(phone)
		return phone.delete('^0-9') if phone
	end
end
