class Api::MembershipsController < ApplicationController

  def create
    @newMembershipUser = User.find_by(username: params[:membership][:username])
    if @newMembershipUser
      @membership = Membership.new({ user_id: @newMembershipUser.id, team_id: params[:membership][:team_id]})
      if @membership.save
        @team = Team.find(params[:membership][:team_id])
        render 'api/teams/show'
      else
        render json: @membership.errors.full_messages, status: 422
      end
    else
      render json: ['Failed to find user'], status: 422
    end
  end

  def destroy
    # id in params is team_id of team being left.
    @membership = Membership.find_by(user_id: current_user.id, team_id: params[:id])
    if @membership
      @membership.destroy
      @team = Team.find(params[:id])
      render 'api/teams/show';
    else
      render json: ['Failed to find membership.'], status: 422;
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id, :team_id)
  end

end
