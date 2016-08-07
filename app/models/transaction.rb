class Transaction < ActiveRecord::Base
  before_save do 
    default_values
  end
  validates :amount, :numericality => { :greater_than => 0, :less_than => 10000 }
  
  private
    def default_values
        self.is_positive = true if self.is_positive.nil?
    end  

end