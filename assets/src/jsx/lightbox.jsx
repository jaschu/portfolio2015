/**
 *

 Components:

 * Lightbox -parent component
   * shade - tag
   * slide - component
     * slideContents
     * controls -component
       * Previous
       * Next

Let's see

 */

var SLIDES = [
  { thumbnail: 'assets/images/screenshots/bsu@2x.jpg', caption: 'This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption.This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption.' },
  { thumbnail: 'assets/images/screenshots/bsu@2x.jpg', caption: 'One more caption, heyo.' },
  { thumbnail: 'assets/images/screenshots/bsu@2x.jpg', caption: 'Third slide!' }
];

var SlideControls = React.createClass({
    render: function(){
      return (
        <div className="controls">
          <a href="#" className="left">Previous</a>
          <a href="#" className="right">Next</a>
        </div>
      );
    }
});

var Slide = React.createClass({
    render: function(){
      var displaySlide = this.props.slides[this.props.current]; // First slide for now
      console.log(this.props.current);
      return (
        <figure>
          <div className="thumb-wrapper">
            <div className="thumb-pane">
              <img src={displaySlide.thumbnail} alt="" />
            </div>
          </div>
          <figcaption>
            {displaySlide.caption}
          </figcaption>
        </figure>
      );
    }
});

var Lightbox = React.createClass({
    getInitialState: function(){
      return {
        currentSlide: 0
      }
    },
    render: function(){
      return (
        <div className="slide">
          <Slide slides={this.props.slides} current={this.state.currentSlide} />
          <SlideControls slides={this.props.slides} current={this.state.currentSlide} />
        </div>
      );
    }
});

React.render(<Lightbox slides={SLIDES} />, document.getElementById('js-lightbox'));