class RemoveLinkFromImages < ActiveRecord::Migration
  def change
    remove_column :images, :link
  end
end
