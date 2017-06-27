# == Schema Information
#
# Table name: teams
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Team < ActiveRecord::Base
  validates :name, :owner, presence: true
  validates :name, uniqueness: true
  validates :name, format: { without: /\s/ }

  belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  has_many :memberships, inverse_of: :team, dependent: :destroy
  has_many :members,
    through: :memberships,
    source: :member

  has_many :channels, dependent: :destroy


end
