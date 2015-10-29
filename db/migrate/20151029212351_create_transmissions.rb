class CreateTransmissions < ActiveRecord::Migration
  def change
    create_table :transmissions do |t|

      t.timestamps null: false
    end
  end
end
