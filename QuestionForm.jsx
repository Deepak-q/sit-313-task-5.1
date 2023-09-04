import React from 'react';
import './QuestionForm.css';


function Form2()
{

  return (
    <div className="question-form">
    
          <div className='cr'>
          <p className='ft1'>What do you want to ask or share</p>
          </div>
  
          <span>
            Title
            <input className='ft2' type='text' placeholder='Start your question with how, what, why, etc.'/>
          </span>

          <h3 className='ft3'>Describe your problem</h3>

          <input className='prb' type='text' />

          <div>
          <span>
            Tags
            <input className='ft5' type='text' placeholder='Please add up to 3 tags to describe what your question is about eg., Java'/>
          </span>
          </div>
          
          <button className='button' >Post</button>
        </div>  
  );
}

export default Form2;
