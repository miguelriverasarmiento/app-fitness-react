class BookingsController < ApplicationController

  def index
    booking = Booking.all
    render json: booking
  end

  def create
    booking = Booking.create(booking_param)
    if booking.save
     render json: booking
    else
     render json: { error: review.errors.messages }, status: 422
    end
  end

  def update
    booking = Booking.find(params[:id])
    booking.update(booking_param)
    render json: booking
  end

  def destroy
    booking = Booking.find(params[:id])
    booking.destroy
    head :no_content, status: :ok
  end

  private
    def booking_param
      params.require(:booking).permit(:user_id, :clas_id, :date, :name)
    end
end
