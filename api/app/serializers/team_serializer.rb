class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :format, :populate_on_creation, :private
  
end
