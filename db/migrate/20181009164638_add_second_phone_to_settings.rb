class AddSecondPhoneToSettings < ActiveRecord::Migration[5.2]
  def change
    add_column :settings, :second_phone, :string
  end
end
