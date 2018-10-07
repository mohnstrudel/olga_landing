class Admin::ReviewsController < AdminController
	include CrudConcern
	
	before_action :find_review, only: [:edit, :update, :destroy]

	def index
		# @reviews = Review.all
		@reviews = index_helper("Review")
	end

	def new
		@review = Review.new
	end

	def create
		@review = Review.new(review_params)
		create_helper(@review, "edit_admin_review_path")
	end

	def update
		update_helper(@review, "edit_admin_review_path", review_params)
	end

	def edit
	end

	def destroy
		destroy_helper(@review, "admin_reviews_path")
	end

	private

	def find_review
		@review = Review.find(params[:id])
	end

	def review_params
		params.require(:review).permit(Review.attribute_names(&:to_sym))
	end

end



