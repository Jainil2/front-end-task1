class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def buildTree(inorder, postorder):
    if not inorder or not postorder:
        return None

    root_val = postorder.pop()
    root = TreeNode(root_val)
    inorder_index = inorder.index(root_val)

    root.right = buildTree(inorder[inorder_index + 1:], postorder)
    root.left = buildTree(inorder[:inorder_index], postorder)

    return root

# Example usage:
inorder = [9, 3, 15, 20, 7]
postorder = [9, 15, 7, 20, 3]
root = buildTree(inorder, postorder)
