"use strict";

const START_HANDLER_DEFAULT_VALUE = 0;
const END_HANDLER_DEFAULT_VALUE = 150;

class PriceSlider {
  constructor(slider) {
    this.slider = slider;
    this.pricebar = this.slider.querySelector(".price__bar");
    this.startHandler = this.slider.querySelector(".price__handle--start");
    this.endHandler = this.slider.querySelector(".price__handle--end");
    this.minPrice = this.slider.querySelector(".price__input--min");
    this.maxPrice = this.slider.querySelector(".price__input--max");

    this.handlerPositions = {
      start: START_HANDLER_DEFAULT_VALUE,
      end: END_HANDLER_DEFAULT_VALUE,
    };

    this.startHandler.addEventListener("mousedown", (event) =>
      this.handlerMouseDown(event, this.startHandler)
    );
    this.endHandler.addEventListener("mousedown", (event) =>
      this.handlerMouseDown(event, this.endHandler)
    );

    this.startHandler.ondragstart = function () {
      return false;
    };

    this.endHandler.ondragstart = function () {
      return false;
    };
  }

  handlerMouseDown(event, handler) {
    event.preventDefault();
    let slider = this.slider;
    let positions = this.handlerPositions;
    let shiftX = event.clientX - handler.getBoundingClientRect().left;
    let pricebar = this.pricebar;
    let maxPrice = this.maxPrice;
    let minPrice = this.minPrice;


    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function isStartHandler(handler) {
      if (handler.classList.contains("price__handle--start")) {
        return true;
      }
      return false;
    }

    function pricebarScale() {
      pricebar.style.left = positions.start + 'px';
      pricebar.style.width = (positions.end - positions.start) + 'px';
    }

    function setPrices() {
      minPrice.value = (positions.start * 65) + 100;
      positions.end === 180 ?
      maxPrice.value = 'MAX' 
      : maxPrice.value = ((positions.end - 20) * 130) + 500
      
    }

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

      if (isStartHandler(handler)) {
        if (newLeft < 0) {
          newLeft = 0;
        }

        let rightEdge = positions.end - handler.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
      }

        if (!isStartHandler(handler)) {
          if (newLeft < positions.start + handler.offsetWidth) {
            newLeft = positions.start + handler.offsetWidth;
          }

          let rightEdge = slider.offsetWidth - handler.offsetWidth;
          if (newLeft > rightEdge) {
            newLeft = rightEdge;
          }
        }
      
    
      handler.style.left = newLeft + "px";
      handler.classList.contains("price__handle--start")
        ? (positions.start = newLeft)
        : (positions.end = newLeft);
      console.log(positions.end)
      
      pricebarScale() 
      setPrices()
    }

    function onMouseUp() {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
  }
}

let priceSlider = new PriceSlider(document.querySelector(".price__wrapper"));

