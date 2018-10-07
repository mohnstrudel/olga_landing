class AddFieldsToJobs < ActiveRecord::Migration[5.2]
  def change
    add_column :jobs, :requirements, :text
    add_column :jobs, :offerings, :text
    add_column :jobs, :email, :string
  end
end
