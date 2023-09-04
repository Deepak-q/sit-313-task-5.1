import React, { useState } from 'react';
import Page1 from './Page2';
import Form2 from './QuestionForm';
import Form1 from './ArticleForm';

function PostPage() {
  const [postType, setPostType] = useState('question');

  return (
    <div>
      <Page1 postType={postType} setPostType={setPostType} />
      {postType === 'question' ? <Form2 /> : null}
      {postType === 'article' ? <Form1 /> : null}
    </div>
  );
}

export default PostPage;
