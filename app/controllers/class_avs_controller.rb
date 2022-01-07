class ClassAvsController < ApplicationController

  def index
    classAv = ClassAv.all
    render json: classAv
  end

  def create
    classAv = ClassAv.create(classAv_param)
    render json: classAv
  end

  def update
    classAv = ClassAv.find(params[:id])
    classAv.update(classAv_param)
    render json: tdlist
  end

  def destroy
    classAv = ClassAv.find(params[:id])
    classAv.destroy
    head :no_content, status: :ok
  end

  private
    def classAv_param
      params.require(:classAv).permit(:name, :date, :quotas)
    end
end
