class HomepageController < ApplicationController
  before_action :authenticate_user!
  layout 'react'
  def index; end
end
