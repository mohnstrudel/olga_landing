class Service < ApplicationRecord

	belongs_to :service_category

	before_save :set_slug

	mount_uploaders :pictures, PictureUploader

	# include Bootsy::Container

  has_many :member_services, dependent: :destroy
  has_many :members, through: :member_services

  accepts_nested_attributes_for :members, allow_destroy: true

	extend FriendlyId
  friendly_id :title, use: [:finders, :slugged]

  private

  def set_slug
    unless self.nil?
      # if self.slug.blank?
        begin
          slugged = Russian.translit(self.title).parameterize
          self.slug = slugged
        rescue => e
          logger.debug "Error while saving slug for #{self.inspect}. Error message: #{e.message}"
          self.slug = nil
        end
      # end
    end
  end
end
