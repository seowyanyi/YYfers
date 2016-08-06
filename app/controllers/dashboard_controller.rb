class DashboardController < ApplicationController
  def index
    if not logged_in?
      redirect_to "/login"
    end
  end
end