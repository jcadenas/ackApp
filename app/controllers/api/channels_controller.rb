class Api::ChannelsController < ApplicationController

  def index
    @team = Team.find(params[:team_id])
    @channels = @team.channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      # @subscription = Subscription.create!({user_id: current_user.id, channel_id: @channel.id})
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end

  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    render :show
  end

  private

  def channel_params
    params.require(:channel).permit(:team_id, :name, :purpose)
  end

end
