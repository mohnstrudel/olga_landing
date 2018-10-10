class AddAcceptToRequests < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :accept, :boolean
  end
end
