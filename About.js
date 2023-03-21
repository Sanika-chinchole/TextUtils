import React   from 'react';

export default function About() {

  
    

   
  return (
    <div classNameName='container' >
        <h2 classNameName='my-3'>About US</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,character count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free to use
      </button>
    </h2>
    <div id="collapseTwo" classNameName="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the numberof words  and characters. Thus it is suitable for writing textwith word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       This word counter software works in any web Browser such a Crome,firefox,Internet Explorer, Safari,Opera.It suits to count characters in facebook,blog,books,excel document,pdf document,essay,etc.
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
