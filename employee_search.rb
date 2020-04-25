# A company database contains the following table, in which id is the primary key:

# employees

# ID  NAME     AGE
# 1   Steve    21
# 2   John     44
# 3   Amy      26
# 4   Marcus   44

# Select all the statements that return only the employee with name "John" (id = 2).

#    Employee.find("John")
# -> Employee.find_by(name: "John")
# -> Employee.where(name: "John").first
#    Employee.where("age > 30")
# -> Employee.not.where(name: ["Steve", "Amy", "Marcus"])
