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



 */

var SlideControls = React.createClass({
    render: function(){
      return (
        <div class="controls">
          <a href="#" class="left">Previous</a>
          <a href="#" class="right">Next</a>
        </div>
      );
    }
});

var Slide = React.createClass({
    render: function(){
      var displaySlide = this.prop.slides[0]; // First slide for now
      return (
        <figure>
          <div class="thumb-wrapper">
            <div class="thumb-pane">
              <img src="{displaySlide.thumbnail}" alt="" />
            </div>
          </div>
          <figcaption>{displaySlide.caption}</figcaption>
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
        <div class="slide">
          <Slide slides={this.prop.slides} />
          <SlideControls />
        </div>
      );
    }
});

var SLIDES = [
  { thumbnail: 'assets/images/screenshots/bsu@2x.jpg', caption: '<p>This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption.</p><p>This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption. This is a figure caption.</p>' }
]

React.render(<Lightbox slides={SLIDES} />, document.getElementById('js-lightbox'));