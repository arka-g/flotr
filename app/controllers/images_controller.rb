class ImagesController < ApplicationController
  before_action :find_image, only: [:show, :edit, :update, :destroy, :like, :dislike]
  before_action :authenticate_user!, except: [:index, :show, :browse_tags]

  def index
    @images = Image.unique_tag_images.paginate(:page => params[:page], :per_page => 1)
  end

  def tags
    @images = Image.tagged(params[:tag]).paginate(:page => params[:page], :per_page => 5)
  end

  def browse_tags
    @tags = get_tags
  end

  def show
  end

  def new
    @image = current_user.images.build
  end

  def create
    @image = current_user.images.build(image_params)
    if @image.save
      redirect_to @image
    else
      render 'new'
    end
  end

  def update
    if @image.update(image_params)
      redirect_to @image
    else
      render 'edit'
    end
  end

  def edit
  end

  def destroy
    @image.image = nil
    @image.destroy
    redirect_to root_path
  end

  def like
    @image.upvote_by current_user
    redirect_to :back
  end

  def dislike
    @image.downvote_from current_user
    redirect_to :back
  end

  private

  def image_params
    params.require(:image).permit(:title, :tags, :image, :all_tags)
  end

  def find_image
    @image = Image.find(params[:id])
  end

  def get_tags
    tags = Hash.new
    Tag.all.each do |tag|
      if tags[tag.name]
        next
      else
        tags[tag.name] = tag.images.first.image.url(:medium)
      end
    end
    tags
  end

end
