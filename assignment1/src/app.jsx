const element = (
    <div id="mainDiv">
        <div id="nameDiv">
            <h1>SHUBHAM DESHPANDE</h1>
        </div>
        <div id="imgDiv">
            <img id="imgID" src="img01.jpg" alt="My Photo" width="300" height="300"></img><br/><br/>
        </div>
        <div id="introDiv">
            Always Smiling :), honest and helpful ! <br/>
            Well that is an informal introduction, let us talk about something technical <br/>
            Have 2 years of experience in software development <br/>
            Slightly biased towards using Java, but always ready to work on any new technology <br/>
            Love web development <br/>
            And yes playing video games and cricket are some of the many hobbies.<br/><br/>
        </div>
        <div id="gitDiv">
            <a id="gitLinkID" href="https://github.com/deshpandeshubham">VIEW MY GITHUB REPO</a>
        </div>
    </div>
)
   
ReactDOM.render(element, document.getElementById('section1'));