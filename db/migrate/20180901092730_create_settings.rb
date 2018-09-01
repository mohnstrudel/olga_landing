class CreateSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :settings do |t|
      t.string :title
      t.string :url
      t.string :phone
      t.string :instagram
      t.text :description
      t.text :address
      t.string :facebook
      t.string :vkontakte

      t.timestamps
    end
  end
end
