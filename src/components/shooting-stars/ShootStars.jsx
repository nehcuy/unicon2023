import "./ShootingStars.scss";

import React, { useRef, useState, useEffect } from "react";

export default function ShootingStars(props) {
  const canvasRef = useRef(null);  //ref={canvasRef}
  let shapeNum = props.nums || 5;
  let meteorNum = props.meteorNum || 50;
  // let is_mobile = props.is_mobile || false;
//   let isPlay = props.isPlay != null ? props.isPlay : true;
//   console.log(`isPlay: ${isPlay}`);
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
//   useEffect(() => {
//       console.log(`props.isPlay: ${props.isPlay}`)
//     isPlay = props.isPlay != null ? props.isPlay : true;
//   }, [props.isPlay]);
  useEffect(() => {
    // console.log("Instatiating canvas");
    var canvas = document.getElementById("shootingStar");
    // console.log(canvas);
    // console.log(canvas.getBoundingClientRect());
    if (!canvas || !canvas.getContext) {
      return false;
    }
    var ctx = canvas.getContext("2d");
    var X = (canvas.width = window.innerWidth);
    var Y = (canvas.height = window.innerHeight);
    var stars = [];
    var meteors = [];
    /********
     *
     *  Star
     *
     ********/
    function Star(ctx, startX, startY) {
      this.ctx = ctx;
      this.init(startX, startY);
    }
    Star.prototype.init = function (x, y) {
      this.ratio = 0.9;
      this.speed = rand(10, 20);
      this.x = x;
      this.y = y;
      this.v = {
        x: -1 * this.speed, //rand(-1, 1) * Math.random(),
        y: 1 * this.speed,
      };
      this.img = new Image();
      this.img.src = "/assets/images/slantShoot.png";
      // this.ctx.rotate(-90 * Math.PI / 180);
    };

    Star.prototype.draw = function () {
      let ctx = this.ctx;
      ctx.drawImage(this.img, this.x, this.y);
    };

    Star.prototype.updateParams = function () {
      this.x += this.v.x;
      this.y += this.v.y;
      if (this.x < -146) {
        this.init(rand(0, X), -((Y / 2) * Math.random()));
      }
    };

    Star.prototype.render = function () {
      this.updateParams();
      this.draw();
    };

    for (let i = 0; i < shapeNum; i += 1) {
      stars.push(new Star(ctx, rand(0, X), (Y / 2) * Math.random()));
    }

    /*****
     *
     *  Meteors
     *
     ******/

    function Meteor(ctx, x, y, c) {
      this.ctx = ctx;
      this.init(x, y, c);
    }

    Meteor.prototype.init = function (x, y, c) {
      this.x = x;
      this.y = y;
      this.c = c;
      this.r = rand(1, 2);
      this.l = rand(0, 100);
      this.sl = this.l;
      this.ga = Math.random();
      this.v = {
        x: rand(-1, 1) * Math.random(),
        y: 0,
      };
    };

    Meteor.prototype.draw = function () {
      var ctx = this.ctx;
      ctx.save();
      ctx.globalAlpha = this.ga;
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = "hsl(" + this.c + ", 80%, 60%)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    Meteor.prototype.updateParams = function () {
      var ratio = (this.l / this.sl) * 1.1;
      this.r *= ratio;
      this.x += this.v.x;
      this.v.y = Y / 2 - this.y;
      this.y += this.v.y / 30;
      this.l -= 1;
      if (this.l < 0) {
        this.c += 10;
        this.init(rand(0, X), (Y / 2) * Math.random(), this.c);
      }
    };

    Meteor.prototype.render = function (i) {
      this.updateParams();
      this.draw();
      ctx.translate(0, Y);
      ctx.scale(1, -1);
      this.draw();
    };

    for (var i = 0; i < meteorNum; i++) {
      var s = new Meteor(
        ctx,
        rand(0, X),
        (Y / 2) * Math.random(),
        rand(0, 360)
      );
      meteors.push(s);
    }

    // image.onload = drawImageActualSize; // Draw when image has loaded
    var dt = 1000 / 30; // 60fps  1000 / 60;
    var timeTarget = 0;
    function render() {
      if ( Date.now() >= timeTarget) {  //isPlay == true &&
        ctx.clearRect(0, 0, X, Y);
        ctx.globalCompositeOperation = "darken";
        ctx.globalAlpha = 0.75;
        // ctx.fillStyle = "rgb(0,0,0)";
        // ctx.fillRect(0, 0, X, Y);
        // ctx.globalCompositeOperation = "source-over";
        // ctx.globalAlpha = 1;
        // for (let i = 0; i < meteors.length ; i += 1){
        //     meteors[i].render()
        // }
        for (let i = 0; i < stars.length; i += 1) {
          stars[i].render();
        }

        timeTarget += dt;
        if (Date.now() >= timeTarget) {
          timeTarget = Date.now();
        }
      }
      //   if (!is_mobile){

      requestAnimationFrame(render);
      //   }
    }
    render();

    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", function () {
      onResize();
    });
  },[]);

  return (
    <canvas id="shootingStar" ref={canvasRef} style={{ background: "rgba(0,0,0,0)" }}>
      Your browser does not support the HTML canvas tag.
    </canvas>
  );
}
