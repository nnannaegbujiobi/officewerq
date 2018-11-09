json.array! @users.each do |user|
   json.id user.id
   json.name user.name
   json.progress user.calculated_progress
   json.badge_name user.badge_name
 end