class RenamePaylinkSellerCol < ActiveRecord::Migration
  def change
    rename_column :paylinks, :seller, :account_id
  end
end
