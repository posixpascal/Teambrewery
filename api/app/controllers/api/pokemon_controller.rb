class Api::PokemonController < ApplicationController
  def show
      if params[:id]
         @pokemon = Pokemon.find(params[:id])
         render json: @pokemon
      end
  end

  def find
  end

  def index
  end
end
