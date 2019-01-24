require 'capybara'
require 'capybara/cucumber'
require 'selenium-webdriver'
require 'site_prism'
require 'rspec'
Capybara.default_driver = :selenium_chrome_headless

class Hello < SitePrism::Page
    set_url 'http://localhost:9000/hello'
    element :greeting, 'label#greeting'
    element :input_field, 'input#name'
    element :go_button, 'input#goButton'
    element :result, 'div#result'
end

Given(/^I am on the start page/) do
    @test_page = Hello.new
    @test_page.load
end

Then (/^I should see greeting lebel$/) do
    expect(@test_page).to have_greeting
end

Then(/^I should see input field/) do
    expect(@test_page).to have_input_field
end
  
Then(/^I should see go button/) do
    expect(@test_page).to have_go_button
end
  
When(/^I typed '([^']+)' into input field/) do |msg|
    @test_page.input_field.set msg
end
  
When(/^I clicked go button/) do
    @test_page.go_button.click
end
  
Then(/^I should see '([^']+)'/) do |msg|
    expect(@test_page).to have_result(text: msg)
  end
  