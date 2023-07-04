// Corrected functions: handle comment tap and author profile redirection separately
function handleCommentTap(commentId) {
  // This function only expands the comment
  expandComment(commentId);
}

function handleAuthorTap(userId) {
  // This function redirects to the user's profile
  redirectToUserProfile(userId);
}
