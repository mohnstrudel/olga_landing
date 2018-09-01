class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.string :name
      t.string :phone
      t.string :message
      t.references :service, foreign_key: true
      t.datetime :date
      t.string :type

      t.timestamps
    end
  end
end
