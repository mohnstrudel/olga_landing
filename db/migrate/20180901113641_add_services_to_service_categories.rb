class AddServicesToServiceCategories < ActiveRecord::Migration[5.2]
  def change
    add_reference :service_categories, :service, foreign_key: true
  end
end
