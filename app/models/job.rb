class Job < ApplicationRecord
	mount_uploader :picture, PictureUploader
end
