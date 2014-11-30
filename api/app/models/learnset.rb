# == Schema Information
#
# Table name: learnsets
#
#  id         :integer          not null, primary key
#  pokemon_id :integer
#  created_at :datetime
#  updated_at :datetime
#

class Learnset < ActiveRecord::Base
    attr_protected :pokemon, :created_at, :updated_at
    belongs_to :pokemon
    has_many :moves
end
