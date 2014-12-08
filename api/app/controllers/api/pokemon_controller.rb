class Api::PokemonController < ApplicationController
  before_filter :order
  def show
      if params[:id]
          if params[:id] == "random"
              @pokemon = Pokemon.all.sample(1)[0]
              
          else
              @pokemon = Pokemon.find(params[:id])
          end
         render json: @pokemon
      end
  end

  def by_id
    p = Pokemon.find_by_id(params[:id].to_i)
    if not p.nil?
      @pokemon = p
      render :json => @pokemon
    end
  end

  def autocomplete
    pokemon = Pokemon.where("species LIKE ?", "%#{params[:species]}%")
    @pokemon = pokemon
    render json: @pokemon
  end
  
  def random_ou
      pokes = Format.most_valuables.map {|format| format.pokemons }.flatten
      @pokemon = pokes.sample
      render json: @pokemon
  end
  
  # all pokemon known a given move by name(random if none is present.)
  def random_move
    move_name = params[:move] ||= Move.all.sample(1).name
    tier = Format.find_by_name(params[:tier])
    if tier.nil?
      return render json: error(:format, :resource_not_found), :status => 404
    end
    tier = tier.name
    m = Move.find_by_name(move_name).pokemons
    m = m.to_a.keep_if {|p| p.in_tier? tier}
    
    @pokemon = m.sample

    render json: @pokemon
  end

  

  def find
  end

  def index
  end

  private
  def order
    @request = request
    @order_by = params[:orderBy] ||= "id"
    @order_direction = params[:orderDirection] ||= "ASC"
  end
end
