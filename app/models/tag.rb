class Tag < ActiveRecord::Base
  has_many :taggings
  has_many :images, through: :taggings

  def self.search(query)
    where("name LIKE ?", "%#{query}%").order("created_at DESC")
  end

end
