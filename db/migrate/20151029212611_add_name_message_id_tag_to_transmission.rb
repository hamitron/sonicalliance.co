class AddNameMessageIdTagToTransmission < ActiveRecord::Migration
  def change
    add_column :transmissions, :name, :string
    add_column :transmissions, :message, :string
    add_column :transmissions, :uid, :string
  end
end
