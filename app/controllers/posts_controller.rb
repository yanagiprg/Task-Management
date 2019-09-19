class PostsController < ApplicationController
  
  def index
    @posts = Post.all.order(created_at: :asc)
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = Post.create(title: params[:title], content: params[:content])
    render json: @post

  end

  def update
    @post = Post.find(params[:id])
    @post = Post.create(title: params[:title], content: params[:content])
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end

end
