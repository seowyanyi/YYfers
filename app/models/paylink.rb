class Paylink < ActiveRecord::Base
  before_save do 
    default_values
  end

  validates :quantity, :numericality => { 
    :greater_than_or_equal_to => 0, 
    :less_than => 10000, 
    :only_integer => true }  

  private
    def default_values
        self.title ||= "No title"
    end  

end