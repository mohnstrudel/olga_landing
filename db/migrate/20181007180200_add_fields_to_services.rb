class AddFieldsToServices < ActiveRecord::Migration[5.2]
  def change
    add_column :services, :price, :float
    add_column :services, :duration, :float
  end
end
