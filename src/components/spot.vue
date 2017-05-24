
<template>
    <div class="grid__item">
        <button class="icobutton icobutton--thumbs-up"><span class="fa fa-thumbs-up"></span></button>
    </div>
</template>

<script>
    export default {
    	name: 'spot',
        prop: [],
        data() {
    		return {

            }
        },
        mounted() {
	        function isIOSSafari() {
		        let userAgent
		        userAgent = window.navigator.userAgent
		        return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)
	        }

	        function isTouch() {
		        let isIETouch
		        isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
		        return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch
	        }

//	        let isIOS = isIOSSafari()
		    let clickHandler = isIOSSafari() || isTouch() ? 'touchstart' : 'click'

	        function extend( a, b ) {
		        for( let key in b ) {
			        if( b.hasOwnProperty( key ) ) {
				        a[key] = b[key]
			        }
		        }
		        return a
	        }

	        function Animocon(el, options) {
		        this.el = el
		        this.options = extend( {}, this.options )
		        extend( this.options, options )

		        this.checked = false

		        this.timeline = new mojs.Timeline()

		        for(let i = 0, len = this.options.tweens.length; i < len; ++i) {
			        this.timeline.add(this.options.tweens[i])
		        }

		        let _this = this
		        this.el.addEventListener(clickHandler, function() {
			        if( _this.checked ) {
				        _this.options.onUnCheck()
			        }
			        else {
				        _this.options.onCheck()
				        _this.timeline.replay()
			        }
			        _this.checked = !_this.checked
		        })
	        }

	        Animocon.prototype.options = {
		        tweens : [
			        new mojs.Burst({})
		        ],
		        onCheck : function() { return false; },
		        onUnCheck : function() { return false; }
	        }

	        let scaleCurve4 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')
    		let el = this.$el.querySelector('button.icobutton')
            let elspan = el.querySelector('span')
	
	        new Animocon(el, {
		        tweens : [
			        // burst animation
			        new mojs.Burst({
				        parent: 	el,
				        count: 		6,
				        radius: 	{40:120},
				        children: {
					        fill : 		[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					        opacity: 	0.6,
					        radius: 	20,
					        direction: [ -1, -1, -1, 1, -1 ],
					        swirlSize: 'rand(10, 14)',
					        duration: 1500,
					        easing: 	mojs.easing.bezier(0.1, 1, 0.3, 1),
					        isSwirl: 	true
				        }
			        }),
			        // ring animation
			        new mojs.Shape({
				        parent: 			el,
				        radius: 			50,
				        scale: 				{ 0 : 1 },
				        fill: 				'transparent',
				        stroke: 			'#988ADE',
				        strokeWidth: 	{15:0},
				        opacity: 			0.6,
				        duration: 		750,
				        easing: 			mojs.easing.bezier(0, 1, 0.5, 1)
			        }),
			        // icon scale animation
			        new mojs.Tween({
				        duration : 900,
				        onUpdate: function(progress) {
					        let scaleProgress = scaleCurve4(progress)
					        elspan.style.WebkitTransform = elspan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)'
				        }
			        })
		        ],
		        onCheck : function() {
			        el.style.color = '#988ADE'
		        },
		        onUnCheck : function() {
			        el.style.color = '#C0C1C3'
		        }
	        })
        }
    }
</script>

<style lang="scss">
    .grid__item {
        position: relative;
        text-align: center;
        background: #f0f0f0;
        margin: 0 0 5em;
        width: 100%;
        min-height: 36em;
        display: -ms-flexbox;
        -ms-flex-pack: center;
        -ms-flex-align: center;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
    }

    .grid__item::before {
        content: counter(gridcounter);
        font-size: 5.5em;
        font-weight: bold;
        line-height: 1;
        position: absolute;
        bottom: 0;
        left: 0;
        counter-increment: gridcounter;
        text-align: center;
        color: #2b2929;
        font-family: 'Patrick Hand SC', cursive;
        -webkit-transform: translate3d(0.2em,50%,0);
        transform: translate3d(0.2em,50%,0);
    }

    .icobutton {
        font-size: 3em;
        position: relative;
        margin: 0;
        padding: 0;
        color: #c0c1c3;
        border: 0;
        background: none;
        overflow: visible;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    .icobutton .fa {
        display: block;
        padding: 0 0.1em;
    }

    .icobutton__text {
        font-size: 0.75em;
        position: absolute;
        top: 100%;
        left: -50%;
        width: 200%;
        text-align: center;
        line-height: 1.5;
        color: #a6a6a6;
    }

    .icobutton__text--side {
        top: 0;
        left: 100%;
        width: 100%;
        padding: 0 0 0 0.25em;
    }

    /* fix for mo.js */
    .icobutton svg {
        left: 0;
    }

    .icobutton:hover,
    .icobutton:focus {
        outline: none;
    }

    /* Unicorn */
    .icobutton--unicorn svg {
        fill: #c0c1c3;
    }
</style>













