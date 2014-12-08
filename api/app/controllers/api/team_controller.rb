class Api::TeamController < ApplicationController

  
  def show
    team = ApplicationController::Team.find(params[:id].to_i)
    return render :json => team
  end

  def index
  end

  def create
    team = ApplicationController::Team.new
    team.name = params[:name]
    team.user = current_user
    team.format = ApplicationController::Format.find_by_name(params[:tier])
    team.populate_on_creation = params[:populate]
    team.private = params[:private]
    team.save()
    render :json => team
  end

  def update
    team = ApplicationController::Team.find(params[:id].to_i)
    if current_user != team.user
      return render :json => {success: false}
    end
    if params[:pokemons].is_a? Array
      pokes = params[:pokemons].map do |p|
        return ApplicationController::Pokemon.find(p.id)
      end
    end
    team.pokemons = pokes
    team.name = team.name
    team.format = ApplicationController::Format.find_by_name(params[:tier])
    team.save()
  end

  def delete
  end

  def new
  end
end
