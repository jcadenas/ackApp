class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find(params[:id])
    @membership.destroy
    render :show
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id, :team_id)
  end

end
