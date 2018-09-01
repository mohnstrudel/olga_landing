class ServiceCategory < ApplicationRecord

	has_many :services

	before_save :set_slug

	# include Bootsy::Container

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
