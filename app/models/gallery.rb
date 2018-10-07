class Gallery < ApplicationRecord
	mount_uploader :picture, PictureUploader
end
