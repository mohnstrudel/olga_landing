class Admin::JobsController < AdminController

	include CrudConcern
	
	before_action :find_job, only: [:edit, :update, :destroy]

	def index
		# @jobs = Job.all
		@jobs = index_helper("Job")
	end

	def new
		@job = Job.new
	end

	def create
		@job = Job.new(job_params)
		create_helper(@job, "edit_admin_job_path")
	end

	def update
		update_helper(@job, "edit_admin_job_path", job_params)
	end

	def edit
	end

	def destroy
		destroy_helper(@job, "admin_jobs_path")
	end

	private

	def find_job
		@job = Job.find(params[:id])
	end

	def job_params
		params.require(:job).permit(Job.attribute_names(&:to_sym))
	end
end