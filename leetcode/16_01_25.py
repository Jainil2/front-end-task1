from typing import List
# a ^ a = 0
# a ^ 0 = a
#
# now if we make all pairs then,
# nums1=[a1,a2,a3,a4,a5]
# nums2=[b1,b2,b3,b4,b5]
#
# then a1 multiple times xor with b1,b2,b3,b4,b5 
# and 5 times in result which eventually becomes a1
#
# if nums2 = [b1,b2,b3,b4]
# then a1 multiple times xor with b1,b2,b3,b4 
# and 4 times in result which eventually becomes 0


class Solution:
    def xorAllNums(self, nums1: List[int], nums2: List[int]) -> int:
        xor1, xor2 = 0, 0
        if len(nums1) % 2:
            for num in nums2:
                xor2 ^= num
        if len(nums2) % 2:
            for num in nums1:
                xor1 ^= num
        return xor1 ^ xor2

# what is docstring in function and class in python?
# https://www.geeksforgeeks.org/python-docstrings/