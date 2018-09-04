class Member < ApplicationRecord

	mount_uploader :picture, PictureUploader

	has_many :member_services, dependent: :destroy
	has_many :services, through: :member_services

	accepts_nested_attributes_for :services, allow_destroy: true
end
