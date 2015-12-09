class CommentsController < ApplicationController
  before_action :authenticate_user!

  def create
    @image = find_image
    @comment = Comment.create(comment_params)
    @comment.user_id = current_user.id
    @comment.image_id = @image.id
    if @comment.save
      redirect_to image_path(find_image)
    else
      render 'new'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def find_image
    @image = Image.find(params[:image_id])
  end
end
