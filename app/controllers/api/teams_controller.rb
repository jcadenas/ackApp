class Api::TeamsController < ApplicationController

  def index
    @user = current_user
    @teams = @user.teams
  end

  def create
    @team = Team.new(team_params)
    @team.user_id = current_user.id
    if @team.save
      @membership = Membership.create!({user_id:current_user.id, team_id: @team.id})
      @user = current_user
      @channel = Channel.create!({ team_id: @team.id, name: 'general', purpose: 'general chillings and millings' })
      @subscription = Subscription.create!({user_id: @user.id, channel_id: @channel.id})
      render :create
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def show
    @team = Team.find(params[:id])
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    render :show
  end

  def update
    @team = Team.find(params[:id])
    if @team.update(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  private

  def team_params
    params.require(:team).permit(:name, :description)
  end

end
