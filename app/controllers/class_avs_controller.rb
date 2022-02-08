class ClassAvsController < ApplicationController

  def index
    clas = ClassAv.all
    render json: clas
  end

  def create
    clas = ClassAv.create(clas_params)
    
    if clas.save
     render json: clas
    else
     render json: { error: review.errors.messages }, status: 422
    end
  end

  def update
    clas = ClassAv.find(params[:id])
    clas.update(clas_params)
    render json: tdlist
  end

  def destroy
    clas = ClassAv.find(params[:id])
    clas.destroy
    head :no_content, status: :ok
  end

  private
    def clas_params
      params.require(:class_av).permit(:name, :date, :quotas)
    end
end
