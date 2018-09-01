class Admin::ServicesController < AdminController
	include CrudConcern
	
	before_action :find_service, only: [:edit, :update, :destroy]

	def index
		# @services = Service.all
		@services = index_helper("Service")
	end

	def new
		@service = Service.new
	end

	def create
		@service = Service.new(service_params)
		create_helper(@service, "edit_admin_service_path")
	end

	def update
		update_helper(@service, "edit_admin_service_path", service_params)
	end

	def edit
	end

	def destroy
		destroy_helper(@service, "admin_services_path")
	end

	private

	def find_service
		@service = Service.find(params[:id])
	end

	def service_params
		params.require(:service).permit(Service.attribute_names(&:to_sym))
	end

end

