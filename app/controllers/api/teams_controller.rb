class Api::TeamsController < ApplicationController

  def index
    @user = current_user
    @teams = @user.teams
  end

  def create
    @team = Team.new(team_params)
    @team.user_id = current_user.id
    if @team.save
      render :show
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
