class AppointmentsController < ApplicationController
  def index
    appointments = Appointment.all
    render json: appointments
  end

  def create
    appointment = Appointment.new(appointment_params)
    if appointment.save
      render json: appointment, status: :created
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:doctor_id, :patient_id, :appointment_time, :status)
  end
end
