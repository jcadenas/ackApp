class Api::MessagesController < ApplicationController

  def index
    @channel = Channel.find(params[:channel_id])
    @messages = @channel.messages
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save
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
