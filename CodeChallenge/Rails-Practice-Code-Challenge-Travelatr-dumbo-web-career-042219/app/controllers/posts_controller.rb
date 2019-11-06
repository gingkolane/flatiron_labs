class PostsController < ApplicationController



def new
  @post = Post.new
end 

def show
  @post = Post.find(params[:id])
end 

def create
  @post = Post.create(post_params)
  redirect_to @post 
end

def edit
  @post = Post.find(params[:id])
end

def update
  @post = Post.find(params[:id])
  @post.update(post_params)
  redirect_to @post
end 

private
  def post_params
    params.require(:post).permit(:title, :content, :blogger_id, :destination_id, :likes)
  end 
end 