json.extract! message, :id, :body, :channel_id
json.author_id message.user_id
json.author_username message.author.username
