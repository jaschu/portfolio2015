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

var SlideControls = React.createClass({displayName: "SlideControls",
    render: function(){
      return (
        React.createElement("div", {className: "controls"}, 
          React.createElement("a", {href: "#", className: "left"}, "Previous"), 
          React.createElement("a", {href: "#", className: "right"}, "Next")
        )
      );
    }
});

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
    render: function(){
      return (
        React.createElement("div", {className: "slide"}, 
          React.createElement(Slide, {slides: this.props.slides, current: this.state.currentSlide}), 
          React.createElement(SlideControls, {slides: this.props.slides, current: this.state.currentSlide})
        )
      );
    }
});

React.render(React.createElement(Lightbox, {slides: SLIDES}), document.getElementById('js-lightbox'));