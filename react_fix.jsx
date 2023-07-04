import React from 'react';

const Comment = ({ comment, user }) => (
  <div>
    <h4 onClick={() => goToUserProfile(user)}>{user.name}</h4>
    <p onClick={() => expandComment(comment)}>{comment.text}</p>
  </div>
);

function goToUserProfile(user) {
  // logic to navigate to user's profile page
}

function expandComment(comment) {
  // logic to expand the comment text
}
