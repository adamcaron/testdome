# Consider the following controller and view definitions:

class RecordsController < ApplicationController
  def update
    @record = Record.find(params[:id])
    @record.update(record_params)
  end
end

<%= form_for @record do |f| %>
<%= render 'form', f: f %>
<% end %>

# Select the statements that can be used to update a record.

#    write '/records/:id', to: 'records#update'
# -> put '/records/:id', to: 'records#update'
# -> patch '/records/:id', to: 'records#update'
#    post '/records/:id', to: 'records#update'
# -> resource :records, only: [:update]
