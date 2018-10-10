class Front::RequestsController < FrontController

	before_action :set_type

	def create
		@request = params[:type].constantize.new(request_params)
		@js_type = @type.underscore

		respond_to do |format|
			if @request.save
				format.js 
			else
				format.js { render partial: 'fail' }
			end
		end
	end

	private

  def set_request
    @request = type_class.find(params[:id])
  end

  def set_type
     @type = type
  end

  def type
      Request.types.include?(params[:type]) ? params[:type] : "Request"
  end

  def type_class 
      type.constantize 
  end

  def request_params
    params.require(type.underscore.to_sym).permit(Request.attribute_names.map(&:to_sym))
  end
end
