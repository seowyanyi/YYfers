require 'test_helper'

class AccountTest < ActiveSupport::TestCase
  def setup
    @account = Account.new(name: "Example User", email: "user@example.com",
                           password: "foobar", password_confirmation: "foobar")
  end

  test "email addresses should be unique" do
    duplicate_account = @account.dup
    duplicate_account.email = @account.email.upcase
    @account.save
    assert_not duplicate_account.valid?
  end

  test "email addresses should be valid" do
    invalid_email = "huhhhhh@"
    @account.email = invalid_email
    assert_not @account.valid?
  end  

  test "email addresses should be saved as lower-case" do
    mixed_case_email = "Foo@ExAMPle.CoM"
    @account.email = mixed_case_email
    @account.save
    assert_equal mixed_case_email.downcase, @account.reload.email
  end

  test "password should be present (nonblank)" do
    @account.password = @account.password_confirmation = " " * 6
    assert_not @account.valid?
  end

  test "password should have a minimum length" do
    @account.password = @account.password_confirmation = "a" * 5
    assert_not @account.valid?
  end

end
