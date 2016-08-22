class CustomersController < ApplicationController
	def index
		if params[:keywords].present?
			@keywords = params[:keywords]
			customer_search_term = CustomerSearchTerm.new(@keywords)
			@customers = Customer.where(
				customer_search_term.where_clause,
				customer_search_term.where_args).
			order(customer_search_term.order)
			offset(PAGE_SIZE * @page).limit(PAGE_SIZE)
		else
			@customers = []
		end
	end
end
