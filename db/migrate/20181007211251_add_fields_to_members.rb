class AddFieldsToMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :position, :string
    add_column :members, :experience, :string
  end
end
