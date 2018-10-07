class FrontController < ApplicationController
	layout 'front'

	before_action :get_settings

	def get_settings
		@settings = Setting.first
	end
end

