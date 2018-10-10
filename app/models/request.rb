class Request < ApplicationRecord
  
  self.inheritance_column = :type

  def self.types
      %w(ConsultRequest BookRequest)
  end

  scope :consults, -> { where(type: 'ConsultRequest') } 
  scope :books, -> { where(type: 'BookRequest') } 

  def send_notifications
    if Rails.env.production?
      RequestMailer.delay(queue: "admin", priority: 20).notify_admin(self)
    elsif Rails.env.development?
      RequestMailer.notify_admin(self).deliver_now
    end
  end

  private

  def consult_request?
    self.type == 'ConsultRequest'
  end
end
