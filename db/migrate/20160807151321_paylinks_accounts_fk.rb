class PaylinksAccountsFk < ActiveRecord::Migration
  def change
    add_foreign_key :paylinks, :accounts
  end
end
