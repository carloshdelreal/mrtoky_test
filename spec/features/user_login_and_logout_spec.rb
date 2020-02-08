require 'rails_helper'

RSpec.feature 'User Logs in and logs out' do
  scenario 'Test the log in and the log out', type: :feature, js: true do
    user = FactoryBot.create(:user)
    visit new_user_session_path
    within('form') do
      fill_in 'Email', with: user.email
      fill_in 'Password', with: user.password
    end
    click_button 'Log in'
    # expect(page).to have_content('Hello!')
    click_on 'Sign out'
    respond_to be_success
  end
end
