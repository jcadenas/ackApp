class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user_id = current_user.id
    if @subscription.save
      @channel = Channel.find(params[:subscription][:channel_id])
      render 'api/channels/show'
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find_by(user_id: current_user.id, channel_id: params[:id])
    if @subscription
      @subscription.destroy
      @channel = Channel.find(params[:id])
      render 'api/channels/show'
    else
      render json: ['Failed to find subscription'], status: 422;
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:user_id, :channel_id)
  end

end
