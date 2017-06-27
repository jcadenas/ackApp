# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ActiveRecord::Base
  validates :member, :team, presence: true
  validates :member, uniqueness: { scope: [:team]}

  belongs_to :member,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :team, inverse_of: :memberships

end
