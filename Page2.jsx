import React from 'react';
import './Page2.css'

function PostTypeSelector({ postType, setPostType }) {
  return (
    <div>
      <div className='post'>
      <h2> New Post </h2>
      </div>
      <label >Select Post Type: </label>
      <label>
        <input className='question'
          type="radio"
          value="question"
          checked={postType === 'question'}
          onChange={() => setPostType('question')}
        />
        Question
      </label>

      <label>
        <input className='question'
          type="radio"
          value="article"
          checked={postType === 'article'}
          onChange={() => setPostType('article')}
        
        />
        Article
      </label>
    </div>
  );
}

export default PostTypeSelector;
