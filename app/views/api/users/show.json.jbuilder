json.id @user.id
json.name @user.name
json.email @user.email
json.bio  @user.bio
json.gender @user.gender
json.level  @user.level
json.password @user.password
json.avatar rails_blob_url(@user.avatar) if @user.avatar.attachment
