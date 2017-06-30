# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ActiveRecord::Base
  validates :body, :author, :channel, presence: true
  validates :body, length: { maximum: 300 }

  belongs_to :author,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :channel,
    class_name: :Channel,
    foreign_key: :channel_id,
    primary_key: :id

end
