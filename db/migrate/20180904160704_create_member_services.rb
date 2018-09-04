class CreateMemberServices < ActiveRecord::Migration[5.2]
  def change
    create_table :member_services do |t|
      t.references :member, foreign_key: true
      t.references :service, foreign_key: true

      t.timestamps
    end
  end
end
