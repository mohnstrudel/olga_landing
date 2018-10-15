class AddEmailToSettings < ActiveRecord::Migration[5.2]
  def change
    add_column :settings, :email, :string
  end
end
