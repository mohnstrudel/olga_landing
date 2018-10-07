class ChangeGalleryColumnName < ActiveRecord::Migration[5.2]
  def change
  	rename_column :galleries, :image, :picture
  end
end
