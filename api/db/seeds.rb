# Check for showdown import file...

require 'yaml'
require 'json'

def import_hash(json, group)
    
    if group == :pokedex
        $pokemon_types = Hash.new
        errorPokes = Hash.new
        json.each do |key, data|
            if Pokemon.find_by_species(data["species"]).nil?
               pokemon = Pokemon.new
               pokemon.pokedex = data["num"]
               pokemon.species = data["species"]
           
               basestats = Basestat.new()
               basestats.hp = data["baseStats"]["hp"]
               basestats.atk = data["baseStats"]["atk"]
               basestats.def = data["baseStats"]["def"]
               basestats.spa = data["baseStats"]["spa"]
               basestats.spd = data["baseStats"]["spd"]
               basestats.spe = data["baseStats"]["spe"]
               
               pokemon.height = data["height"]
               pokemon.weight = data["weight"]
               pokemon.color = data["color"]
               if data["forme"] && data["forme"] == "Mega"
                  pokemon.mega = true
                  pokemon.mega_forme = data["formeLetter"] unless data[":formeLetter"].nil? 
               end
               
               basestats.save()
               pokemon.basestat = basestats
               if not pokemon.save()
                   errorPokes[key] = data
               else
                   $pokemon_types[pokemon.species] = data["types"]
                   puts "Pokemon #{pokemon.species} successfully added to DB..."
               end
           else
               puts "Pokemon (#{data["species"]}) already in DB"
           end
        end
    end
      
    if group == :abilities
        json.each do |key, data|
           if Ability.find_by_key(key.to_s).nil?
              ability = Ability.new
              ability.key = key.to_s
              ability.name = data["name"]
              ability.rating = data["rating"]
              ability.num = data["num"]
              if ability.save()
                  puts "Ability: #{ability.name} successfully added to DB..."
              else
                  puts "Couldn't save ability: #{ability.name}"
              end  
           end 
        end
        
    end
    
    if group == :typechart
        json.each do |key, data|
            if Type.find_by_name(key.to_s).nil?
                type =  Type.new
                type.name = key.to_s
                type.color = key.downcase
                if type.save()
                    puts "Type #{type.name} successfully saved to db."
                else
                    puts "Could not save type: #{key.to_s}"
                end
            else
                puts "Type already in DB"
            end
        end
    end
    
    if group == :items
       json.each do |key, data|
           if Item.find_by_key(key.to_s).nil?
               item = Item.new
               item.name = data["name"]
               item.key = data[key.to_s]
               item.num = data["num"]
               item.desc = data["desc"]
               item.gen = data["gen"] unless data["gen"].nil?
               
               details = ItemDetail.new()
               if not data["megaStone"].nil?
                  details.megastone = true
                  details.mega_evolves = Pokemon.find_by_species(data["megaEvolves"])
               end
               
               if not data["isBerry"].nil?
                  details.berry = !!data["isBerry"] 
               end
               
               if not data["fling"].nil?
                  details.fling = true
                  details.fling_bp = data["fling"]["basePower"] 
               end
               
               if data["isUnreleased"]
                  details.unreleased = !!data["isUnreleased"]
               end
               details.save()
               item.details = details
         
               if item.save()
                   details.item = item
                   details.save
                   puts "Item: #{item.name} successfully saved to db"
               else
                   puts "item #{item.name} wasn't saved to db"
               end 
                  
           else
               puts "Item (#{data["name"]}) already in db."
           end
       end 
    end

    if group == :moves
        $move_types = Hash.new
        json.each do |key, data|
            if not Move.find_by_key(key.to_s)
                m = Move.new()
                m.key = key.to_s
                m.num = data["num"]
                m.category = data["category"]
                m.desc = data["desc"]
                m.pp = data["pp"]
                m.accuracy = data["accuracy"]
                m.priority = data["priority"]
                m.name = data["name"]
                
                m.target = data["target"]
                m.desc_short = data["shortDesc"]
                m.is_viable = !!data["isViable"]
                m.is_contact = !!data["isContact"]
                m.type = Type.find_by_name(data["type"])
                m.crit_ratio = data["critRatio"] || 1
                m.basepower = data["basePower"] unless data["basePower"].nil?
                m.protectable = !data["isNotProtectable"]
                if m.save()
                    $move_types[m.key] = data["type"]
                    puts "Move #{data["name"]} successfully saved to DB."
                else
                    puts "Konnte Move nicht speichern."
                end                
            end
        end
    end
    

end

showdown_yaml = File.join(File.dirname(File.expand_path(__FILE__)),  "showdown.yml")
if File.exists?(showdown_yaml)
   puts "Importing new Showdown Data..." 
   options = YAML.load(open(showdown_yaml))
   puts options
   showdown_data = options[:target_directory]
   showdown_files = options[:files]
   
   showdown_files.each do |group, files|
       files.each do |file|
          file_path = File.join(options[:target_directory], group.to_s, file) 
          #puts JSON.parse(open(file_path).read())
          puts "Processing file: #{file} for group #{group}"
          sleep 2
          import_hash(JSON.parse(open(file_path).read()), group)
       end
   end
   $move_types.each do |move_key, type|
       puts "Fixing move: #{move_key}"
      move = Move.find_by_key(move_key)
      move.type = Type.find_by_name(type)
      move.save() 
      puts "Done!"
   end
   
   puts "Fixing Pokemon Types..."
   $pokemon_types.each do |pokemon_species, types|
      begin
          pokemon = Pokemon.find_by_species(pokemon_species)
          typing = Typing.new
          typing.pokemon = pokemon
          types.each do |type|
             typing.types.push Type.find_by_name(type)
          end
          typing.save()
          pokemon.typing = typing
          pokemon.save()
          puts "Set typing for #{pokemon.species} to #{(typing.types.map do |t| t.name end).join(',')}))"
      rescue
          puts "Error when setting type for #{pokemon.species} - check manually."
      end
   end
   puts "done setting types... here is a summary... lul"
   sleep 2
   # summary
   puts "====================================="
   puts "Summary"
   puts "====================================="
   sleep 1 # fancy
   puts "Added: #{Pokemon.count} Pokemon to DB"
   sleep 1
   puts "Added: #{Move.count} Moves to DB"
   sleep 1
   puts "Added: #{Type.count} Types to DB"
   sleep 1
   puts "Added: #{Item.count} Items to DB"
   sleep 1
   puts "Added: #{Ability.count} Abilities to DB"
   sleep 1
   puts "====================================="
   puts "Done! :)"
end