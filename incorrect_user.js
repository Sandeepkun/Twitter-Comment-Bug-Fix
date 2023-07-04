// Incorrect function: handles comment tap
function handleCommentTap(commentId) {
  // This function both expands the comment and redirects to user profile
  expandComment(commentId);
  redirectToUserProfile(getCommentAuthor(commentId));
}
