# Implement the function find_roots to find the roots of the quadratic equation: ax2 + bx + c = 0. The function should return an array containing both roots in any order. If the equation has only one solution, the function should return that solution as both elements of the array. The equation will always have at least one solution.

# The roots of the quadratic equation can be found with the following formula: A quadratic equation.

# For example, find_roots(2, 10, 8) should return [-1, -4] or [-4, -1] as the roots of the equation 2x2 + 10x + 8 = 0 are -1 and -4.

# param [Integer] a 
# param [Integer] b 
# param [Integer] c 
#
# @return [Array[Float]] 
#   An array of two elements containing both roots in any order
def find_roots(a, b, c)
  radicand = (b*b) - (4*a*c)
  numerator1 = (-1*b) + Math.sqrt(radicand)
  numerator2 = (-1*b) - Math.sqrt(radicand)
  root1 = numerator1 / (2*a)
  root2 = numerator2 / (2*a)
  return [root1, root2]
end

puts find_roots(2, 10, 8)
