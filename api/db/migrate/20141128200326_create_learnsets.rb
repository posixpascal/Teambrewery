class CreateLearnsets < ActiveRecord::Migration
  def change
    create_table :learnsets do |t|
      t.integer :pokemon_id

      t.timestamps
    end
  end
end
