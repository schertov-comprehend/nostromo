require 'capybara'
require 'capybara/cucumber'
require 'selenium-webdriver'
require 'site_prism'
Capybara.default_driver = :selenium_chrome_headless

class Hello < SitePrism::Page
    set_url 'http://localhost:9000/hello'
    element :greeting, 'label[@id="greeting"]'
    element :input_field, 'input[@id="name"]'
    element :go_button, 'button[@id="goButton"]'
    element :result, '#div[@id="result"]'
end

Given(/^I am on the start page/) do
    @test_page = Hello.new
    @test_page.load
end

Then (/^I should see greeting lebel/) do
    expect(@test_page).to have_greeting
    expect(@test_page).to have_input_field
    expect(@test_page).to have_go_bitton
end

Then("I should see input field") do
    pending # Write code here that turns the phrase above into concrete actions
end
  
Then("I should see go button") do
    pending # Write code here that turns the phrase above into concrete actions
end
  
Given("I typed {string} into input field") do |string|
    pending # Write code here that turns the phrase above into concrete actions
end
  
When("I clicked go button") do
    pending # Write code here that turns the phrase above into concrete actions
end
  
Then("I should see {string}") do |string|
    pending # Write code here that turns the phrase above into concrete actions
  end
  