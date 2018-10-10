class Front::StaticPagesController < FrontController

	def home
		@services = Service.all
		@gallery = Gallery.all
		@gallery_count = Gallery.count
		@reviews = Review.all
		@posts = Post.all
		@members = Member.all
		@jobs = Job.all

		@consult_request = ConsultRequest.new
		@book_request = BookRequest.new

	end
end
