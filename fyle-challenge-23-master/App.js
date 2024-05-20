import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="circle-container">
        <div className="circle">
          <img src="path/to/image.jpg" alt="" className="circle-image" />
        </div>
        <div className="circle-content">
          <div className="name">John Doe</div>
          <div className="bio">Bio goes here</div>
          <div className="location">
          <i class="bi bi-geo-alt-fill"></i> Orlando
          </div>
          <div className="twitter">
            Twitter: <a href="https://twitter.com/john_doe" target="_blank" rel="noopener noreferrer">https://twitter.com/john_doe</a>
          </div>
         </div>
      </div>

      <div className="github">
      <i class="bi bi-link"></i> <span href="github.com/john_doe" target="_blank" rel="noopener noreferrer">https://github.com/john_doe</span>
          </div>
      <div className="boxes-container">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div className="box" key={num}>
            <div className="hero-title">Heroes</div>
            <div className="hero-description">Heroes description goes here</div>
            <div className="buttons">
              <button>javascript</button>
              <button>angular</button>
              <button>angularjs</button>
              {(num === 1 || num === 2 || num === 5) && <button>angular 2+</button>}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        <div className="pagination">
          <span className="arrow">&larr;</span> Older
          <span className="pages">
            {Array.from({ length: 9 }).map((_, index) => (
              <span className={`page ${index === 1 ? 'highlight' : ''}`} key={index}>{index + 1}</span>
            ))}
          </span>
          Newer <span className="arrow">&rarr;</span>
        </div>
      </div>
    </div>
  );
}

export default App;
