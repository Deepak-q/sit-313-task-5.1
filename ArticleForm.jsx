import React from 'react';
import './ArticleForm.css';

function Form1() 
{
  return (
    <div>
          <div className='cr'>
          <p className='ft1'>What do you want to ask or share</p>
          </div>
  
          <span>
            Title
            <input className='ft2' type='text' placeholder='Enter a descriptive title'
            />
          </span>

          <h3 className='ft3'>Abstract</h3>
          <textarea className='ft6' rows="1" placeholder='Enter a 1-paragraph abstract'/>

          <h3 className='ft3'>Article Text</h3>
          <textarea className='ft7' rows="1" placeholder='Enter a 1-paragraph abstract'/>

          <span>
            Tags
            <textarea className='ft4' type='text' placeholder='Please add up to 3 tags to describe what your article is about eg., Java'
            />
          </span>
          
          <button className='button'>Post</button>
        </div>
   
  );
  }

export default Form1;
