class Admin::ServiceCategoriesController < AdminController
	include CrudConcern
	
	before_action :find_service_category, only: [:edit, :update, :destroy]

	def index
		# @service_categories = ServiceCategory.all
		@service_categories = index_helper("ServiceCategory")
	end

	def new
		@service_category = ServiceCategory.new
	end

	def create
		@service_category = ServiceCategory.new(service_category_params)
		create_helper(@service_category, "edit_admin_service_category_path")
	end

	def update
		update_helper(@service_category, "edit_admin_service_category_path", service_category_params)
	end

	def edit
	end

	def destroy
		destroy_helper(@service_category, "admin_service_categories_path")
	end

	private

	def find_service_category
		@service_category = ServiceCategory.find(params[:id])
	end

	def service_category_params
		params.require(:service_category).permit(ServiceCategory.attribute_names(&:to_sym))
	end

end

