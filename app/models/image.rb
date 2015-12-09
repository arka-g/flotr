class Image < ActiveRecord::Base
  has_attached_file :image, styles: { large: "800x500>", medium: "300x300>", thumb: "100x100>" }, default_url: "http://placehold.it/250x150"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  acts_as_votable

  belongs_to :user
  has_many :taggings
  has_many :tags, through: :taggings
  has_many :comments

  def all_tags=(names)
    self.tags = names.split(',').map do |name|
      Tag.where(name: name.strip).first_or_create!
    end
  end

  def all_tags
    self.tags.map(&:name).join(', ')
  end

  def self.tagged(name)
    Tag.find_by_name!(name).images
  end
end
