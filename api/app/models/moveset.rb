# == Schema Information
#
# Table name: movesets
#
#  id              :integer          not null, primary key
#  team_pokemon_id :integer
#  created_at      :datetime
#  updated_at      :datetime
#

class Moveset < ActiveRecord::Base
    attr_protected :team_pokemon, :created_at, :updated_at
    belongs_to :team_pokemon
    has_many :moves
end
