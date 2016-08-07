require 'sessions_helper'
class PaylinksController < ApplicationController
  include SessionsHelper

  def index
    @account = current_account
  end

  def new
    @paylink = Paylink.new
  end

  def create
    @paylink = Paylink.new(paylink_params)

    if @paylink.save
      log_in @paylink
      redirect_to dashboard_path
    else
      render 'new'      
    end      
  end

  private
    def paylink_params
      params.require(:paylink).permit(:name, :email, :password, 
                                      :password_confirmation)      
    end  
end
