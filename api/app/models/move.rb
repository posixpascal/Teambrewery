# == Schema Information
#
# Table name: moves
#
#  id          :integer          not null, primary key
#  key         :string(255)
#  num         :integer
#  accuracy    :integer
#  basepower   :integer
#  category    :string(255)
#  desc        :string(255)
#  desc_short  :string(255)
#  name        :string(255)
#  pp          :integer
#  priority    :integer
#  secondary   :boolean
#  target      :string(255)
#  type_id     :integer
#  is_viable   :boolean
#  is_contact  :boolean
#  protectable :boolean
#  crit_ratio  :float
#  created_at  :datetime
#  updated_at  :datetime
#

class Move < ActiveRecord::Base
    attr_protected :key, :num, :accuracy, :basepower, :category, :desc, :desc_short
    attr_protected :name, :pp, :priority, :secondary, :target, :type, :is_viable, :is_contact
    attr_protected :protectable, :crit_ratio, :created_at, :updated_at
    

    belongs_to :type
end
