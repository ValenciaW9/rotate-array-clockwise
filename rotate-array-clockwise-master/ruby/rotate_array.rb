def rotate_array(arr, k)
n = arr.length
#Calcylate the effective number of rotations
k = k % n

#Slice the array to get the rotated elemements 
rotated = arr[-k..-1] + arr[0..n-k-1]

retrun rotated 

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [4, 1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3, 4], 1)

  puts

  puts "Expecting: [2, 3, 1]"
  print "=> "
  print rotate_array([1, 2, 3], 2)

  puts

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3], 3)
  # Don't forget to add your own!
end


#Please add your pseudocode to this file
#{#} def rotate_array(arr, k) # type your code in here end. in ruby
#{}To rotate an array in Ruby, we can use a combination of array slicing and concatenation. Here's an example implementation of the rotate_array method:

#{}def rotate_array(arr, k)
  #n = arr.length
  # Calculate the effective number of rotations
  #k = k % n

  # Slice the array to get the rotated elements
  #rotated = arr[-k..-1] + arr[0..n-k-1]

  #return rotated
#{}end
#{}In this implementation, we first calculate the effective number of rotations by taking the modulo of k with the length of the array n. This ensures that if k is larger than the length of the array, we only perform the necessary rotations.
#{}Then, we slice the array to get the rotated elements. We concatenate the last k elements of the array with the first n-k elements. This gives us the rotated array.

