# Implement the filter method. It should accept a list of students and a variable number of filters. The filters will be passed in as lambdas, each of which will take one student record and return a boolean value.

# filter should return a list of student records that have passed through all the filters.

# If no filters are provided, the list of student records should be returned as is. If no students pass through all the provided filters (or if no students are provided), return an empty array.

# For example, consider the following code:

# students = [
#   { name: 'Thomas Edison', gpa: 3.45 },
#   { name: 'Grace Hopper', gpa: 3.99 },
#   { name: 'Leonardo DaVinci', gpa: 2.78 }
# ]

# honor_roll = ->(record) { record[:gpa] > 3.0 }
# filter(students, honor_roll) should return:

# [{:name=>"Thomas Edison", :gpa=>3.45},{:name=>"Grace Hopper", :gpa=>3.99}]


# @param [Array<Hash>] students
#   Array of student records (array of hashes)
# @param [Array<Lambda>] filters
#   Zero or more filters to apply - each filter is a lambda returning a boolean
#
# @return [Array<Hash>]
#   An array of students who pass ALL provided filters
def filter(students, *filters)
  # Write your code here
  return nil
end

students = [
  { name: 'Thomas Edison', gpa: 3.45 },
  { name: 'Grace Hopper', gpa: 3.99 },
  { name: 'Leonardo DaVinci', gpa: 2.78 }
]

honor_roll = ->(record) { record[:gpa] > 3.0 }

honor_roll_members = filter(students, honor_roll)
puts honor_roll_members # it should print
# {:name=>"Thomas Edison", :gpa=>3.45} 
# {:name=>"Grace Hopper", :gpa=>3.99}
