(function(e){"use strict";var t=function(e,i){this.$el=e,this.mf=i,this._domLayers=[],e.addClass("flipper"),this.increase=this.increase.bind(this),this.decrease=this.decrease.bind(this),this._events={},this.index=0,this.setLayer(t.Layers.FLIP,this.createTile(0)).show()};t.FlipRange=function(e,t){for(var i=[],s=e;t>=s;s++)i.push(s);return i},t.ProgressiveAccelleration=function(){this.speed=1},t.ProgressiveAccelleration.prototype.tick=function(){return this},t.ProgressiveAccelleration.prototype.getSpeed=function(){return this.speed},t.Direction={},t.Layers={},t.Classes={},t.Sets={},t.Direction.UP=1,t.Direction.DOWN=-1,t.Layers.MASK_ABOVE=400,t.Layers.FLIP=300,t.Layers.MASK_BELOW=200,t.Layers.NEXT=100,t.Layers.LAST=101,t.Classes[t.Layers.MASK_ABOVE]="mask",t.Classes[t.Layers.MASK_BELOW]="mask",t.Sets.SingleDigit=t.FlipRange(0,9),t.prototype.getIndex=function(){return this.index},t.prototype.setIndex=function(e){this.index=e},t.prototype.increase=function(){var e=this.index+1>=this.mf.length?0:this.index+1;this.setIndex(e)},t.prototype.decrease=function(){var e=this.index-1<=0?this.mf.length-1:this.index-1;this.setIndex(e)},t.prototype.transitionNumbers=function(e,t){var i=this.getIndex(),s=this.getIndex(e());return 0===s&&i>s&&this.trigger("loop"),{current:this.mf[i],after:this.mf[s],speed:t}},t.prototype.createTile=function(e){return $("<div>"+e+"</div>").addClass("tile-inner")},t.prototype.createHalfTile=function(e){return this.createTile(e).addClass("mask-inner")},t.prototype.setLayer=function(e,i){return this._domLayers[e]&&(this._domLayers[e].remove(),this._domLayers[e]=null),i?(this._domLayers[e]=$("<div />"),this._domLayers[e].hide().append(i).css("z-index",e).addClass("tile").addClass(t.Classes[e]).appendTo(this.$el),this._domLayers[e]):this},t.prototype.getLayer=function(e){return this._domLayers[e]},t.prototype.setupFlip=function(e){this.flipAccelleration=new t.ProgressiveAccelleration,this.setLayer(t.Layers.FLIP,this.createTile(e.current)).show(),this.setLayer(t.Layers.NEXT,this.createTile(e.after)).show(),this.setLayer(t.Layers.MASK_ABOVE,this.createHalfTile(e.current)).addClass("below").show(),this.setLayer(t.Layers.MASK_BELOW,this.createHalfTile(e.current)).addClass("below").show()},t.prototype.flipAway=function(e,i,s,r){var n,i=i||$.Deferred(),a=this.flipAccelleration.getSpeed();if(!r)return requestAnimationFrame(this.flipAway.bind(this,e,i,null)),i.promise();s=s||r,n=r-s;var o=this.normalRotation(n,e.speed+a,1,-90),h=this.getLayer(t.Layers.FLIP);return o=o>=-90?o:-90,this.rotateDomElement(h.find(".tile-inner"),o),this.flipAccelleration.tick(n),-90===o?i.resolve():void requestAnimationFrame(this.flipAway.bind(this,e,i,s))},t.prototype.setupFinalFlip=function(e){this.setLayer(t.Layers.MASK_ABOVE,this.createHalfTile(e.after)).addClass("above").show(),this.setLayer(t.Layers.FLIP,this.createTile(e.after))},t.prototype.flipIn=function(e,i,s,r){var n,i=i||$.Deferred(),a=this.flipAccelleration.getSpeed();if(!r)return requestAnimationFrame(this.flipIn.bind(this,e,i,null)),i.promise();s=s||r,n=r-s;var o=90-this.normalRotation(n,e.speed+a,1,90),h=this.getLayer(t.Layers.FLIP);return o=o>0?o:0,this.rotateDomElement(h.find(".tile-inner"),o),this.flipAccelleration.tick(n),h.show(),0===o?i.resolve(r):void requestAnimationFrame(this.flipIn.bind(this,e,i,s))},t.prototype.teardown=function(){this.setLayer(t.Layers.MASK_ABOVE,null),this.setLayer(t.Layers.FLIP,null),this.setLayer(t.Layers.NEXT,null),this.setLayer(t.Layers.MASK_BELOW,null)},t.prototype.rotateDomElement=function(e,t){$(e).css("-webkit-transform","rotateX("+t+"deg)")},t.prototype.normalRotation=function(e,t,i,s){return parseInt(e/1e3*t*s/i)},t.prototype.warpSpeed=function(e,t){return Math.pow(t/2-Math.abs(e-t/2)+1,1.25)},t.prototype.run=function(e,t,i){var i,s,r=this;i&&i.flip&&i.flip.speed?s=this.transitionNumbers(e,i.flip.speed):(i=i||1,s=this.transitionNumbers(e,this.warpSpeed(i,t))),this.flip=s,this.setupFlip(s),this.flipAway(s).then(function(){return r.setupFinalFlip(s),r.flipIn(s)}).then(function(){t>i&&(r.teardown(),r.run(e,t,i+1))})},t.prototype.on=function(e,t){this._events[e]=this._events[e]||[],this._events[e].push(t)},t.prototype.trigger=function(e,t){this._events[e]=this._events[e]||[],this._events[e].forEach(function(e){e(t)})};var i=function(e,i){var s,r,n=[];e.addClass("multiflip");for(var a=0;i>a;a++){var o=65*i-65*a-65;s=$("<div />"),s.css("left",o),r=new t(s,t.Sets.SingleDigit),n.push(r),s.appendTo(e),n[a-1]&&n[a-1].on("loop",r.run.bind(r,r.increase,1,n[a-1]))}this.digits=i,this.currentNumber=0,this.flippers=n};i.prototype.run=function(e){this.flipTo(this.flippers[0],e)},i.prototype.flipTo=function(e,t){var i=t-this.currentNumber;0>i&&(i=Math.pow(10,this.digits)+i),i&&(this.currentNumber=t,e.run(e.increase,Math.abs(i)))},e.NumberFlipper=i}).call(this,this);