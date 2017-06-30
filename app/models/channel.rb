# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  team_id    :integer          not null
#  name       :string           not null
#  purpose    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ActiveRecord::Base

  validates :team, :name, presence: true
  validates :name, format: { without: /\s/ }
  validates :name, uniqueness: { scope: [:team]}

  belongs_to :team

  has_many :subscriptions, inverse_of: :channel, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :subscribers,
    through: :subscriptions,
    source: :subscriber

end
