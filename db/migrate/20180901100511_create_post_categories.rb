class CreatePostCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :post_categories do |t|
      t.string :title
      t.text :description
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
