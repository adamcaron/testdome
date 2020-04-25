class ContactsMigration < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.integer :telephone_number
      t.text :address, null: false
      t.timestamps
    end
  end
end

# -> The contacts.name field may be null.
#    The contacts table has no index.
# -> The table called contacts contains four different data types.
#    The table called contacts contains four different fields.
#    The contacts.address field may be null.
