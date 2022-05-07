class HomeController < ApplicationController

	def home
    	render json: {status: "It's working..."}
  	end

end
