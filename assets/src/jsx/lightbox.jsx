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

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var SLIDES = [
  { thumbnail: 'bsu@2x.jpg', caption: 'This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption.This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption.' },
  { thumbnail: 'alma@2x.jpg', caption: 'One more caption, one more screenshot.' },
  { thumbnail: 'lewis-clark@2x.jpg', caption: 'Third slide! What, fantastic. That third slide worked.' }
];

// var SlideControls = React.createClass({
//     render: function(){
//       return (
//         <div className="controls">
//           <a href="#" onClick={this.props.prevSlide} className="left">Previous</a>
//           <a href="#" onClick={this.props.nextSlide} className="right">Next</a>
//         </div>
//       );
//     }
// });

var Slide = React.createClass({
    render: function(){
      var displaySlide = this.props.slides[this.props.current]; // First slide for now
      //console.log(this.props.current);
      return (
        <figure>
          <div className="thumb-wrapper">
            <div className="thumb-pane">
              <img src={"assets/images/screenshots/" + displaySlide.thumbnail} alt="" />
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
    prevSlide: function(e){
      e.preventDefault();
      var newSlide = this.state.currentSlide - 1 < 0 ? this.props.slides.length - 1 : this.state.currentSlide - 1;
      this.setState({currentSlide: newSlide});
    },
    nextSlide: function(e){
      e.preventDefault();
      var newSlide = this.state.currentSlide + 1 === this.props.slides.length ? 0 : this.state.currentSlide + 1;
      this.setState({currentSlide: newSlide});
    },
    render: function(){
      //  return (
      //    <div className="slide">
      //      <Slide slides={this.props.slides} current={this.state.currentSlide} />
      //      <SlideControls slides={this.props.slides} current={this.state.currentSlide} />
      //    </div>
      //  );
      return (
        <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true}>
        <div className="slide" key="slidekey">
          <ReactCSSTransitionGroup transitionName="slideinfo">
            <Slide slides={this.props.slides} current={this.state.currentSlide} key={this.props.slides[this.state.currentSlide].thumbnail} />
          </ReactCSSTransitionGroup>
          <div className="controls" key="controlskey">
            <a href="#" onClick={this.prevSlide} className="left">Previous</a>
            <a href="#" onClick={this.nextSlide} className="right">Next</a>
          </div>
        </div>
        </ReactCSSTransitionGroup>
      );
    }
});

React.render(<Lightbox slides={SLIDES} />, document.getElementById('js-lightbox'));