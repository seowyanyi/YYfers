class Account < ActiveRecord::Base
  before_save do 
    email.downcase!
    default_values
  end
  validates :name,  presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  has_secure_password      
  validates :password, presence: true, length: { minimum: 6 }

  private
    def default_values
        self.balance ||= 0
    end  
end