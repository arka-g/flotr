class Tagging < ActiveRecord::Base
  belongs_to :image
  belongs_to :tag
end
