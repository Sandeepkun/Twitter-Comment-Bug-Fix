import React from 'react';

const Comment = ({ comment, user }) => (
  <div onClick={() => goToUserProfile(user)}>
    <h4>{user.name}</h4>
    <p>{comment.text}</p>
  </div>
);

function goToUserProfile(user) {
  // logic to navigate to user's profile page
}
