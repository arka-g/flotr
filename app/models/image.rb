class Image < ActiveRecord::Base
  has_attached_file :image, styles: { large: "800x500>", medium: "300x300>", thumb: "100x100>" }, default_url: "http://placehold.it/250x150"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
end
