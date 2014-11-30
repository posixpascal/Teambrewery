# == Schema Information
#
# Table name: pokemons
#
#  id         :integer          not null, primary key
#  key        :string(255)
#  pokedex    :integer
#  species    :string(255)
#  basestat  :integer
#  height     :integer
#  weight     :integer
#  color      :string(255)
#  mega       :boolean
#  mega_forme :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Pokemon < ActiveRecord::Base
    attr_protected :key, :pokedex, :species, :basestat, :height, :weight, :color, :mega, :mega_forme
    attr_protected :created_at, :updated_at
    has_one :typing
    has_one :learnset
    has_many :abilities
    has_one :basestat
    
    attr_protected
end
