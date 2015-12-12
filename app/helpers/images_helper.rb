module ImagesHelper
  def tag_links(tags)
    tags.split(',').map{|tag| link_to tag.strip, tag_pictures_path(tag.strip)}.join(', ')
  end
end
