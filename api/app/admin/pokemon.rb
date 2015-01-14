ActiveAdmin.register Pokemon do


  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end
  
  index do
    column "Pokemon", :species
    column "Sprite" do |pokemon|
      image_tag pokemon.sprite.url, {height: "30px", width: "auto"}
    end
    column "Abilities" do |pokemon|
      ul do
        pokemon.abilities.each do |ability|
          li ability.name
        end
      end
    end

  end


end
