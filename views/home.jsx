const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              
              <div>
                <img src="/images/italy.jpg" alt="picture of italy" />
              </div>
              <div>
                <h3>picture by....</h3>
              </div>
              
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
              
          </main>
      </Def>
    )
  }

module.exports = home