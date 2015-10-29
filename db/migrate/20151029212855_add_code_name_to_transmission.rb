class AddCodeNameToTransmission < ActiveRecord::Migration
  def change
    add_column :transmissions, :codename, :string
  end
end
