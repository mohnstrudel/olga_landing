class AddWhatsappToSettings < ActiveRecord::Migration[5.2]
  def change
    add_column :settings, :whatsapp, :string
  end
end
