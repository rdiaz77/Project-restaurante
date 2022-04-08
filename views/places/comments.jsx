const React = require('react')
const Def = require('../default.jsx')

function comments_form (data) {
    return (
        <Def>
            <main>
                <h1>Add Comment</h1>
                <form method="POST" action="/places/id/comment"> 
                
                    <div className = 'row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="author">Name</label>
                            <input className="form-control" id="author" name="author"  required />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="content">Comment</label>
                            <textarea name="content" id="content" cols="30" rows="5"></textarea>
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="stars">Star Rating</label>
                            <input type="number" step="0.5" min ='0'max='5'id="stars" required/>
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="rant">Rant</label>
                            <input type="checkbox" name="rant" id="rant" /> 
                            
                        </div>
                        
                    </div>   
                        <input className="btn btn-primary" type="submit" value="Post Comment"/>
                    
                </form>
            </main>
        </Def>
    )
}

module.exports = comments_form