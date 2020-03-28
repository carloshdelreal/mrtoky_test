require 'rails_helper'

RSpec.describe HomepageController, type: :controller do
  describe 'get index' do
    it 'can not go to the index' do
      get :index
      respond_to be_success
    end

    it 'returns http success' do
      user = FactoryBot.create(:user)
      sign_in(user)
      get :index
      respond_to be_success
    end
  end
end
