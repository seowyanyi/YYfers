class AccountsController < ApplicationController
  def new
    @account = Account.new
  end

  def create
    @account = Account.new(account_params)

    if @account.save
      log_in @account
      redirect_to dashboard_path
    else
      render 'new'      
    end      
  end

  private
    def account_params
      params.require(:account).permit(:name, :email, :password, 
                                      :password_confirmation)      
    end

end
