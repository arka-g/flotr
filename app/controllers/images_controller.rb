class ImagesController < ApplicationController
  before_action :find_image, only: [:show, :edit, :update, :destroy, :like]
  before_action :authenticate_user!, except: [:index, :show, :browse_tags, :gotoImages, :tag_pictures, :tags, :search]

  def index
    @tags = Tag.all.paginate(:page => params[:page], :per_page => 1)
  end

  def gotoImages
    redirect_to images_path(page: 1)
  end

  def tags
    @images = Image.tagged(params[:tag]).paginate(:page => params[:page], :per_page => 1)
  end

  def browse_tags
    @tags = Tag.all
  end

  def search
    if params[:search]
      if Tag.search(params[:search]).exists?
        tag = Tag.search(params[:search]).first.name
        @images = Image.tagged(tag)
      else
        @images = []
      end
    else
      @images = Image.limit(5).order("RANDOM()")
    end
  end

  def tag_pictures
    @images = Image.tagged(params[:tag]).paginate(:page => params[:page], :per_page => 10)
  end

  def show
  end

  def profile
    @images = current_user.images
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

  private

  def image_params
    params.require(:image).permit(:title, :tags, :image, :all_tags)
  end

  def find_image
    @image = Image.find(params[:id])
  end
end
