class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :description
      t.string :image
      t.string :name
      t.string :age
      t.string :place

      t.timestamps
    end
  end
end
