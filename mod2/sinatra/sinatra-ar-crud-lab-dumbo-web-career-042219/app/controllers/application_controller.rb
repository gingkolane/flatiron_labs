
require_relative '../../config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

# Show a new blank form ----------------------
  get '/articles/new' do
    erb :'articles/new' #show a blank form
  end

# Add an article-----------------------------------
# When a form filled and submit clicked, add article info to the database, then 
# direct the page to show the article. 
# Convention is to set path to '/articles' but can be anything, the redirect tells
# which page to go after filling in and submitting form.  
  post '/articles' do

    @article = Article.create(params) #create new article
    
    redirect :"/articles/#{@article.id}"

    # do we need an erb view page here?
    # erb: :'articles/show'
  end

# View an article by its id
  get '/articles/:id' do

    @article = Article.find(params[:id]) #define instance variable for view

    erb :'articles/show' #show single article view

  end

# list all articles in articles/index----------------------------

  get '/articles' do

    @articles = Article.all #define instance variable for view
  
    erb :'articles/index' #show all articles view (index)
  
  end


# Edit an article, need two pages to complete the process-----------------------
# page 1: a form with existing information filled, one can modify information within, then submit

  get '/articles/:id/edit' do

    #get params from url
    @article = Article.find(params[:id]) #define intstance variable for view

    erb :'articles/edit' #show edit article view

  end


# page 2: once page submitted, data posted to database, goes to a page showing the new information

  put '/articles/:id' do

    #get params from url
    @article = Article.find(params[:id]) #define variable to edit

    @article.assign_attributes(params[:article]) #assign new attributes

    if @article.save #saves new article or returns false if unsuccessful
      redirect '/articles' #redirect back to articles index page
    else
      erb :'articles/edit' #show edit article view again(potentially displaying errors)
    end

  end

# Delete an article-----------------

  delete '/articles/:id' do

    #get params from url
    @article = Article.find(params[:id]) #define article to delete

    @article.destroy #delete article

    redirect '/articles' #redirect back to articles index page

  end


end
