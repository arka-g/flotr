class ImagesController < ApplicationController
  before_action :find_image, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if params[:tag]
      @images = Image.tagged(params[:tag])
    else
      @images = Image.all
    end
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
