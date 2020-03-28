require 'rails_helper'

RSpec.feature 'User Logs in' do
  scenario 'Test the log in', type: :feature, js: true do
    user = FactoryBot.create(:user)
    visit new_user_session_path
    within('form') do
      fill_in 'Email', with: user.email
      fill_in 'Password', with: user.password
    end
    respond_to be_success
  end
end
