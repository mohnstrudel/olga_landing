class AddPicturesToServices < ActiveRecord::Migration[5.2]
  def change
    add_column :services, :pictures, :json
  end
end
