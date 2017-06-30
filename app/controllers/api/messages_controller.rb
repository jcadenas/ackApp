class Api::MessagesController < ApplicationController

  def index
    @channel = Channel.find(params[:channel_id])
    @messages = @channel.messages
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save
      Pusher.trigger("new-message", "new-message-channel-#{@message.channel_id}", {
        id: @message.id,
        body: @message.body,
        channel_id: @message.channel_id,
        author_id: @message.user_id,
        author_username: @message.author.username
        })
      render :create
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def show
    @message = Message.find(params[:id])
  end



  def destroy
  end

  def update
  end

  private

  def message_params
    params.require(:message).permit(:channel_id, :body)
  end

end
