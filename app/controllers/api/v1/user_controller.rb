class Api::V1::UserController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user
  end

  # private

  # def set_user
  #   @user = User.find(current_user.id)
  # end
end
