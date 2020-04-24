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
