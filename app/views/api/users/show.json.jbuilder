json.id @user.id
json.name @user.name
json.email @user.email
json.bio  @user.bio
json.gender @user.gender
json.level  @user.level
json.password @user.password
json.progress @user.calculated_progress
json.badge_name @user.badge_name 
json.avatar rails_blob_url(@user.avatar) if @user.avatar.attachment
