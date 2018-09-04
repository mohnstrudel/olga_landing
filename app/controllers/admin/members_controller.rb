class Admin::MembersController < AdminController
	
	include CrudConcern
	
	before_action :find_member, only: [:edit, :update, :destroy]

	def index
		# @members = Member.all
		@members = index_helper("Member")
	end

	def new
		@member = Member.new
	end

	def create
		@member = Member.new(member_params)
		create_helper(@member, "edit_admin_member_path")
	end

	def update
		update_helper(@member, "edit_admin_member_path", member_params)
	end

	def edit
	end

	def destroy
		destroy_helper(@member, "admin_members_path")
	end

	private

	def find_member
		@member = Member.find(params[:id])
	end

	def member_params
		params.require(:member).permit(Member.attribute_names(&:to_sym).push(service_ids: []))
	end

end


