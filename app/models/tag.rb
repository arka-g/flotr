class Tag < ActiveRecord::Base
  has_many :taggings
  has_many :images, through: :taggings

  def self.get_tags
    Tag.all.map.(&:name)
  end

end
