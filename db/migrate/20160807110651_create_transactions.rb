class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.string :trans_type
      t.string :description
      t.boolean :is_positive
      t.decimal :amount

      t.timestamps null: false
    end
  end
end
