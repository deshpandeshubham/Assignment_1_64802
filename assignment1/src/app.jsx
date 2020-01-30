import React from 'react'
import ReactDOM from 'react-dom';

const element = (
    <div>
        <div>
            <h1>Shubham Deshpande</h1>
        </div>
        <div>
            <img src="images/img01.jpg" alt="My Photo" width="500" height="500"></img>
        </div>
        <div>
            Always Smiling :), honest and helpful ! <br/>
            Well that is an informal introduction, let us talk about something technical <br/>
            Have 2 years of experience in software development <br/>
            Slightly biased towards using Java, but always ready to work on any new technology <br/>
            Love web development <br/>
            And yes playing video games and cricket are some of the many hobbies.
        </div>
        <div>
            <a href="https://github.com/deshpandeshubham">VIEW MY GITHUB REPO</a>
        </div>
    </div>
)
   
ReactDOM.render(element, document.getElementByTagName('body'));