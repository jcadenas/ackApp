# == Schema Information
#
# Table name: subscriptions
#
#  id         :integer          not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ActiveRecord::Base
  validates :subscriber, :channel, presence: true
  validates :subscriber, uniqueness: { scope: [:channel]}

  belongs_to :subscriber,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :channel, inverse_of: :subscriptions


end
