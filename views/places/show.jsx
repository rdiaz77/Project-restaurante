const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className = 'inactive'>
            No comments yet, be the first!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <strong>- {c.author}</strong> 
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
  
 
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                <img src= {data.place.pic} alt= {data.place.name} />
            </div>
            <h3>
                Located in {data.place.city}, {data.place.state}
            </h3>
            <div>
                <h2>Rating</h2>
            </div>
            <div>
                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
            </div>
            
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>      
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
            <div>
                <h2>Comments</h2>
                {comments}
            </div>
            <a href={`/places/${data.id}/comment`} className="btn btn-primary"> 
                Add Comment
            </a>      
          </main>
        </Def>
    )
}

module.exports = show