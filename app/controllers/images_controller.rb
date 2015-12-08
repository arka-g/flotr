class ImagesController < ApplicationController
  before_action :find_image, only: [:show, :edit, :update, :destroy]

  def index
    @images = Image.all
  end

  def show
  end

  def new
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)
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
    params.require(:image).permit(:title, :tags, :image)
  end

  def find_image
    @image = Image.find(params[:id])
  end
end
