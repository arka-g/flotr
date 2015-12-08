class RemoveTagsFromImages < ActiveRecord::Migration
  def change
    remove_column :images, :tags
  end
end
