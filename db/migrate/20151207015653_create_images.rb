class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title
      t.string :tags
      t.string :link

      t.timestamps null: false
    end
  end
end
