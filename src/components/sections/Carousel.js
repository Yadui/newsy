import React from "react"

const Carousel = () =>{

    return (
        <div>
            



            <div class="css-slider-wrapper">
            <input type="radio" name="slider" class="slide-radio1" checked id="slider_1" />
            <input type="radio" name="slider" class="slide-radio2" id="slider_2" />
            <input type="radio" name="slider" class="slide-radio3" id="slider_3" />
            <input type="radio" name="slider" class="slide-radio4" id="slider_4" />
            <div class="slider-pagination">
              <label for="slider_1" class="page1"></label>
              <label for="slider_2" class="page2"></label>
              <label for="slider_3" class="page3"></label>
              <label for="slider_4" class="page4"></label>
            </div>
            <div class="next control">
              <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-right"></i></label>
              <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-right"></i></label>
              <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-right"></i></label>
              <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-right"></i></label>
            </div>
            <div class="previous control">
              <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-left"></i></label>
              <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-left"></i></label>
              <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-left"></i></label>
              <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-left"></i></label>
            </div>
            <div class="slider slide1">
              <div>
                <h2>Css Based slider</h2>
                <a href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html" class="button">Back</a>  <a href="#" class="button">Download</a> </div>
            </div>
            <div class="slider slide2">
              <div>
                <h2>CSS Slider without use of any javascript or jQuery</h2>
                <a href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html" class="button">Back</a> <a href="#" class="button">Download</a> </div>
            </div>
            <div class="slider slide3">
              <div>
                <h2>Full screen animation slider</h2>
                <a href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html" class="button">Back</a> <a href="#" class="button">Download</a> </div>
            </div>
            <div class="slider slide4">
              <div>
                <h2>css3 slider</h2>
                <a href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html" class="button">Back</a> <a href="#" class="button">Download</a> </div>
            </div>
            </div>
        </div>
    );


}

export default Carousel