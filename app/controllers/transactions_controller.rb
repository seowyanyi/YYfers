require 'sessions_helper'
class TransactionsController < ApplicationController
  include SessionsHelper
  respond_to :json

  def index
    @account = current_account
  end
  
  def create
    @transaction = Transaction.new(trans_params)  
    @account = current_account

    # check for insufficient funds
    if not @transaction.is_positive and @account.balance < @transaction.amount
      @transaction.errors.add("Insufficient funds")
      respond_with @transaction
      return
    end
 
    @transaction.save     
    if @transaction.valid?
      if @transaction.is_positive        
        @account.update_attribute(:balance, @account.balance + @transaction.amount)
      else
        @account.update_attribute(:balance, @account.balance - @transaction.amount)        
      end      
    end
    respond_with @transaction 
  end

  private
    def trans_params
      params.require(:transaction).permit(:trans_type, :description, :is_positive, 
                                      :amount)      
    end
end