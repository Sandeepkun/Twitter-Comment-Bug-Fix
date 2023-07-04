# Twitter Comment Bug Fix

## Overview

This repository contains the fix for a bug that was affecting approximately 1% of Twitter users. The issue was that when these users tapped on a "Comment" within the Twitter app, they were inadvertently redirected to the profile page of the comment's author and the respective comment was expanded. The intended behavior was to simply expand the comment within the current context.

## Bug Details

### Symptom:
- Tapping on 'Comment' leads the user to the profile page of the comment's author, while also expanding the comment.

### Impact:
- Affected approximately 1% of Twitter users.

## Fix

Our team has diagnosed the root cause of the issue and implemented a fix. The private release of the fix was launched on July 2nd, and today, July 4th, we're pleased to announce the public release. Now, tapping on a "Comment" will correctly expand the comment within the context of the original tweet.

## Getting Started

1. **Clone this repository**
   - `git clone https://github.com/username/twitter_comment_bugfix.git`

2. **Navigate to the project directory**
   - `cd twitter_comment_bugfix`

3. **Install the necessary dependencies**
   - `npm install`

4. **Run the patch**
   - `npm run patch`

## Contribution

If you find any other bugs or have suggestions to improve this fix, please create an issue or submit a pull request.

## Acknowledgments

A big thank you to our user community for bringing this issue to our attention, and to our team for diagnosing and addressing this bug quickly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
