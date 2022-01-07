class CreateClassAvs < ActiveRecord::Migration[6.1]
  def change
    create_table :class_avs do |t|
      t.string :name
      t.datetime :date
      t.integer :quotas

      t.timestamps
    end
  end
end
