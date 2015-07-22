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
  { thumbnail: 'assets/images/screenshots/bsu@2x.jpg', caption: 'This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption.This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption.' },
  { thumbnail: 'assets/images/screenshots/alma@2x.jpg', caption: 'One more caption, one more screenshot.' },
  { thumbnail: 'assets/images/screenshots/lewis-clark@2x.jpg', caption: 'Third slide! What, fantastic. That third slide worked.' }
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

var Slide = React.createClass({displayName: "Slide",
    render: function(){
      var displaySlide = this.props.slides[this.props.current]; // First slide for now
      console.log(this.props.current);
      return (
        React.createElement("figure", null, 
          React.createElement("div", {className: "thumb-wrapper"}, 
            React.createElement("div", {className: "thumb-pane"}, 
              React.createElement("img", {src: displaySlide.thumbnail, alt: ""})
            )
          ), 
          React.createElement("figcaption", null, 
            displaySlide.caption
          )
        )
      );
    }
});

var Lightbox = React.createClass({displayName: "Lightbox",
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
        React.createElement("div", {className: "slide"}, 
          React.createElement(ReactCSSTransitionGroup, {transitionName: "slide"}, 
            React.createElement(Slide, {slides: this.props.slides, current: this.state.currentSlide})
          ), 
          React.createElement("div", {className: "controls"}, 
            React.createElement("a", {href: "#", onClick: this.prevSlide, className: "left"}, "Previous"), 
            React.createElement("a", {href: "#", onClick: this.nextSlide, className: "right"}, "Next")
          )
        )
      );
    }
});

React.render(React.createElement(Lightbox, {slides: SLIDES}), document.getElementById('js-lightbox'));