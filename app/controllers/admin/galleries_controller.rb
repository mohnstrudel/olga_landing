class Admin::GalleriesController < AdminController
	include CrudConcern
	
	before_action :find_gallery, only: [:edit, :update, :destroy]

	def index
		# @galleries = Gallery.all
		@galleries = index_helper("Gallery")
	end

	def new
		@gallery = Gallery.new
	end

	def create
		@gallery = Gallery.new(gallery_params)
		create_helper(@gallery, "edit_admin_gallery_path")
	end

	def update
		update_helper(@gallery, "edit_admin_gallery_path", gallery_params)
	end

	def edit
	end

	def destroy
		destroy_helper(@gallery, "admin_galleries_path")
	end

	private

	def find_gallery
		@gallery = Gallery.find(params[:id])
	end

	def gallery_params
		params.require(:gallery).permit(Gallery.attribute_names(&:to_sym))
	end

end



