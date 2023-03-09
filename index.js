const Button = props => {
  //  Write your code here.
  cosnt { n1me, className } = props;
  return <button className={className}> {name} </button>
}

const element = (
  <div className="bg-container">
     <h1 className="heading">Social Buttons</h1>
  <div>
      <Button className="likeButton" name="Like" />
      <Button className="commentButton" name="Comment" />
      <Button className="shareButton" name="Share" />
  </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
