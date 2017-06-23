# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :memberships, dependent: :destroy
  has_many :teams,
    through: :memberships,
    source: :team
  has_many :owned_teams,
    class_name: :Team,
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)

    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end
end
