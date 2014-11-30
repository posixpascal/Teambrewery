class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :sprite_url, :species, :typing
  attributes :basestats
  attributes :abilities
  
  
  def basestats
     b = Hash.new
     b[:hp] = object.basestat[:hp]
     b[:atk] = object.basestat[:atk]
     b[:def] = object.basestat[:def]
     b[:spa] = object.basestat[:spa]
     b[:spd] = object.basestat[:spd]
     b[:spe] = object.basestat[:spe]
     b
  end
  
  def sprite_url
     "http://localhost:3000/#{object.sprite.url}" 
  end
  
  def abilities
     object.abilities.map {|i| i.name } 
  end
  
  def typing
     object.typing.types.map {|i| i.name } 
  end
end
