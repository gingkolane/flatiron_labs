class PokemonsController < ApplicationController

  def index
    pokemons = Pokemon.all
    render json: pokemons, only: [:id, :species, :nickname, :trainer_id]
  end 
 
  # def show
  #   pokemon = Pokemon.find_by(id: params[:id])
  #   render json: {id: pokemon.id, species: pokemon.species, nickname: pokemon.nickname, trainer_id: trainer.id, trainer: pokemon.trainer]
  # end

end