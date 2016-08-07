class CreatePaylinks < ActiveRecord::Migration
  def change
    create_table :paylinks do |t|
      t.string :title
      t.string :description
      t.integer :quantity
      t.integer :seller

      t.timestamps null: false
    end
  end
end
