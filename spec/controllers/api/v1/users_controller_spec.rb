require 'rails_helper'

RSpec.describe Api::V1::UserController do
  describe 'access api unauthenticated' do
    it 'returns redirect' do
      get :index
      respond_to redirect_to new_user_session_path
      respond_to be_success
    end
  end
  describe 'GET #index' do
    before do
      user = FactoryBot.create(:user)
      sign_in(user)
    end
    it 'returns http success' do
      get :index
      respond_to be_success
    end
    it 'JSON body response contains expected recipe attributes' do
      get :index
      json_response = JSON.parse(response.body)
      expect(json_response.keys).to match_array(["created_at", "email", "id", "updated_at"])
    end
  end
end
