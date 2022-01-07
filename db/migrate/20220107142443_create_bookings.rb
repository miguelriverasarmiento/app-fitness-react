class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :clas_id
      t.datetime :date

      t.timestamps
    end
  end
end
