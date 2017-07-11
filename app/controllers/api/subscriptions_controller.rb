class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user_id = current_user.id
    if @subscription.save
      @channel = Channel.find(params[:subscription][:channel_id])
      @user = current_user
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    # ID being passed in params is the channel_id
    @subscription = Subscription.find_by(user_id: current_user.id, channel_id: params[:id])
    if @subscription
      @subscription.destroy
      @user = current_user
      @channel = Channel.find(params[:id])
      render :show
    else
      render json: ['Failed to find subscription'], status: 422;
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:user_id, :channel_id)
  end

end
