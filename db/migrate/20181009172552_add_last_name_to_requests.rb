class AddLastNameToRequests < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :last_name, :string
  end
end
