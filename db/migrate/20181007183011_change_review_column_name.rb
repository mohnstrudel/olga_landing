class ChangeReviewColumnName < ActiveRecord::Migration[5.2]
  def change
  	rename_column :reviews, :image, :picture
  end
end
