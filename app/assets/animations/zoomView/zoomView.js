(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.zoomView = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.zoomView_set();
	this.instance.setTransform(550,216.6,0.635,0.635,0,0,0,190.1,227);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(357.2,72.4,316.7,403.3);


// symbols:
(lib.antiABlurred = function() {
	this.initialize(img.antiABlurred);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.antiBBlurred = function() {
	this.initialize(img.antiBBlurred);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.blood_aggl = function() {
	this.initialize(img.blood_aggl);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,136);


(lib.blood_Sticked = function() {
	this.initialize(img.blood_Sticked);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,80);


(lib.bloodBlurred = function() {
	this.initialize(img.bloodBlurred);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,118);


(lib.desktexture = function() {
	this.initialize(img.desktexture);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.zoomview_antiA_Aggle = function() {
	this.initialize(img.zoomview_antiA_Aggle);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.zoomview_antiA_noAggle = function() {
	this.initialize(img.zoomview_antiA_noAggle);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.zoomview_antiB_Aggle = function() {
	this.initialize(img.zoomview_antiB_Aggle);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.zoomview_antiB_noAggle = function() {
	this.initialize(img.zoomview_antiB_noAggle);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.zoomView_antiB = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,204,0,0.502)","rgba(255,153,0,0.502)","#A07118"],[0,0.761,1],21.2,12.9,0,21.2,12.9,55.7).s().p("AEsAAQAAgBAAgBQgCh6hWhXQhYhYh8AAQh7AAhYBYQhWBXgCB6QAAABAAABIAAADQABARABAQQAJBNAtA9QAEAGAEAGQABABABAAQAEAFADAEQABABABABQADADACACQABACACACQACACADADQBYBYB7AAQB8AABYhYQBWhXACh6IAAgD").cp();
	this.shape.setTransform(30,30);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(189,113,0,0.576)","rgba(255,204,0,0)"],[0,1],0,23.1,0,-20.6).s().p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7IAAAA").cp();
	this.shape_1.setTransform(30,30);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.zoomView_antiA = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(0,204,204,0.502)","rgba(0,102,204,0.502)","rgba(0,0,153,0.8)"],[0,0.761,1],12.5,9.2,0,12.5,9.2,46.6).s().p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7IAAAA").cp();
	this.shape_2.setTransform(30,30);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(6,30,102,0.6)","rgba(0,102,204,0)"],[0,1],0,23.1,0,-20.6).s().p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7IAAAA").cp();
	this.shape_3.setTransform(30,30);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.zoom_texture = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.039)").s().p("AO4tyIAAblQAABFhFAAI7lAAQhFAAAAhFIAA7lQAAhFBFAAIblAAQBFAAAABFIAAAAAOztyQAAhAhAAAI7lAAQhBAAAABAIAAblQAABABBAAIblAAQBAAAAAhAIAA7l").cp();
	this.shape_4.setTransform(95.3,95.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.078)").s().p("AO0tyIAAblQAABAhAAAI7mAAQhBAAAAhAIAA7lQAAhABBAAIbmAAQBAAAAABAIAAAAAOvtyQAAg8g7AAI7mAAQg8AAAAA8IAAblQAAA7A8AAIbmAAQA7AAAAg7IAA7l").cp();
	this.shape_5.setTransform(95.3,95.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.118)").s().p("AOvtyIAAbmQAAA7g7AAI7mAAQg8AAAAg7IAA7mQAAg8A8AAIbmAAQA7AAAAA8IAAAAAOqtyQAAg3g2AAI7mAAQg3AAAAA3IAAbmQAAA2A3AAIbmAAQA2AAAAg2IAA7m").cp();
	this.shape_6.setTransform(95.3,95.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.2)").s().p("AOltyIAAblQAAAygyAAI7lAAQgyAAAAgyIAA7lQAAgyAyAAIblAAQAyAAAAAyIAAAA").cp();
	this.shape_7.setTransform(95.3,95.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.157)").s().p("AOqtyIAAblQAAA3g2AAI7mAAQg3AAAAg3IAA7lQAAg3A3AAIbmAAQA2AAAAA3IAAAAAOltyQAAgygxAAI7mAAQgyAAAAAyIAAblQAAAyAyAAIbmAAQAxAAAAgyIAA7l").cp();
	this.shape_8.setTransform(95.3,95.3);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190.6,190.6);


(lib.zoom_desk = function() {
	this.initialize();

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#666666","#333333"],[0,1],-94.5,-101.4,0,-94.5,-101.4,313.4).s().p("AUMyMQDODiBwEJQB/EwADFjQAAAIAAAGQAAFOhuEiQgfBSgoBOQh7DwjODOQhMBNhSBBQjRCnjwBcQgsARgtANQg3ASg4AOQhHAQhIALQiIAUiQAAQrPAAn+n+QhMhMhBhSQlxnMABpkQAAgGAAgIQAEpaFsnGQBBhSBMhNQH+n+LPABQJkgBHMFxQBSBBBMBMQAgAgAeAhIAAAA").cp();
	this.shape_9.setTransform(137.2,174);

	this.addChild(this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.7,0,348,348);


(lib.zoom_border = function() {
	this.initialize();

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).p("AdsAAQAALangIUQglApgoAoQgYAYgXAWIhqBdQn9GiqpAAQsSAAosotQototAAsSQAAgwADgwQAgrVIKoJQIsotMSAAQMSAAItItQItIsAAMSIAAAA").cp();
	this.shape_10.setTransform(190,190);

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.176)").s().p("AVDVDQAogpAlgpQHhoVAArcQgBsUotouQouotsVgBQsUABotItQoLILghLXQgBAdgBAvQAAADAAADQAAAIAAAGQAHMcInInQItItMUABQKrgBH/miIBphdIAAAAQAYgXAYgXIAAAAAVGVGQgYAYgYAWIAAABIhpBdQAAAAAAAAQoAGjqtABQsWgBovovQovovAAsXQgBgwADgxQAhrYIMoMQIvovMWgBQMXABIvIvQIvIvABMWQAALeniIXQgmApgoAoIAAAA").cp();
	this.shape_11.setTransform(190,199.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.157)").s().p("AVGVGQAogoAmgpQHioXAAreQgBsWovovQovovsXgBQsWABovIvQoMIMghLYQgDAxABAwQAAMXIvIvQIvIvMWABQKtgBIAmjQAAAAAAAAIBphdIAAgBQAYgWAYgYIAAAAAVKVJQgYAYgYAXIAAAAIhpBdQgBAAAAAAQoBGlqvABQsYgBowoxQoxowAAsZQgBgwADgxQAhraIOoOQIwowMYgBQMZABIxIwQIwIxABMYQAALgnkIYQglApgoAoIAAAA").cp();
	this.shape_12.setTransform(190,199.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.137)").s().p("AVKVKQAogpAlgpQHkoYAArgQgBsYowowQoxoxsZAAQsYAAowIxQoOINghLaQgDAxABAwQAAMZIxIxQIwIwMYABQKvgBIBmkQAAgBABAAIBphdIAAAAQAYgXAYgXIAAAAAVNVNQgXAYgZAXQAAAAAAAAIhpBdQgBAAAAABQoCGlqxABQsaAAoyozQozoyABsbQgBgwADgxQAhrcIPoPQIyozMaABQMbgBIyIzQIzIyAAMaQgBLinkIaQglApgpAoIAAAA").cp();
	this.shape_13.setTransform(190,199.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.118)").s().p("AVNVNQApgoAlgpQHkoaABriQAAsaozoyQoyozsbABQsagBoyIzQoPIPghLcQgDAxABAwQgBMbIzIyQIyIzMaAAQKxgBICmlQAAgBABAAIBphdQAAAAAAAAQAZgXAXgYIAAAAAVRVRQgYAYgYAWQgBAAAAABIhpBdQAAAAgBAAQoDGnqzABQscAAo0o0Qo0o0ABsdQgBgwADgxQAhreIQoRQI0o0McABQMdgBI0I0QI0I0AAMcQgBLknlIbQgmApgoApIAAAA").cp();
	this.shape_14.setTransform(190,199.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.059)").s().p("AVYVYQAogpAmgqQHoodABroQAAsho3o2Qo3o3shAAQshAAo2I3QoTITghLiQgDAyAAAwQAAMhI3I3QI2I3MhAAQK2gBIHmpQAAAAABgBIBphdQAAAAABAAQAYgXAYgYIAAAAAVbVbQgYAYgYAXQgBABAAAAIhpBdQgBAAAAABQoIGqq4ABQsjgBo3o4QoxowgIsrQABgGgBgJQAAgDAAgDQACgwABgdQAhrkIVoUQI3o4MjgBQMjABI4I4QI4I3ABMjQgBLpnpIgQgmAqgpAoIAAAA").cp();
	this.shape_15.setTransform(190,199.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.039)").s().p("AVbVbQApgoAmgqQHpogABrpQgBsjo4o3Qo4o4sjgBQsjABo3I4QoVIUghLkQgBAdgBAwQAAADAAADQAAAJAAAGQAHMrIxIwQI3I4MjABQK4gBIImqQAAgBABAAIBphdQAAAAABgBQAYgXAYgYIAAAAAVfVfQgYAYgZAXQAAAAgBABIhpBdQAAAAgBABQoJGrq6ABQslgBo5o5Qo5o6AAslQgBgxADgxQAhrmIWoWQI5o5MlgBQMlABI6I5QI5I5ABMlQgBLrnqIhQgmAqgpApIAAAA").cp();
	this.shape_16.setTransform(190,199.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.016)").s().p("AWxUPQgmAqgpApQgYAYgYAXQgBABAAABIhpBdQgBAAgBABQoKGsq8ABQsngBo6o7Qo7o7AAsnQgBgxADgxQAhroIYoXQI6o7MngBQMnABI7I7QI7I6ABMnQgBLtnsIiIAAAAAVfVfQApgpAmgqQHqohABrrQgBslo5o5Qo6o5slgBQslABo5I5QoWIWghLmQgDAxABAxQAAMlI5I6QI5I5MlABQK6gBIJmrQABgBAAAAIBphdQABgBAAAAQAZgXAYgYIAAAA").cp();
	this.shape_17.setTransform(190,199.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.078)").s().p("AeJAMQgBsso0ozQo1o2sfAAQseAAo1I2QoSISghLgQgDAxABAwQgBMfI2I1QI1I2MeAAQK0gBIGmoQAAAAABAAIBphdQAAgBAAAAQAYgXAYgYQApgoAlgqQHcoQALriIAAgEAVYVYQgYAYgYAXQgBAAAAAAIhpBdQgBABAAAAQoHGpq2ABQshAAo2o3Qo2o3AAshQgBgwADgyQAhriIToTQI2o3MhAAQMhAAI3I3QI3I2AAMhQgBLonoIdQgmAqgoApIAAAA").cp();
	this.shape_18.setTransform(190,199.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.098)").s().p("AeJAMIAAAEQgKLindIQQglAqgpAoQgXAYgZAXQAAAAAAABIhpBdQgBAAAAAAQoGGoq0ABQseAAo1o2Qo1o1AAsfQAAgwACgxQAhrgISoSQI1o2MeABQMfgBI1I2QI0IzABMsIAAAAAVRVRQAogpAmgpQHmobAArkQAAsco0o0Qo0o0sdABQscgBo0I0QoQIRghLeQgCAxAAAwQAAMdIzI0QI0I0McAAQKzgBIDmnQABAAAAAAIBphdQAAgBABAAQAYgWAYgYIAAAA").cp();
	this.shape_19.setTransform(190,199.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.2)").s().p("AVCVDQgXAXgYAXIAAAAIhpBdQn/GiqrABQsUgBouotQomongIscQABgGgBgIQAAgDAAgDQACgvABgdQAhrXIKoLQIuotMUgBQMVABItItQIuIuAAMUQABLcnhIVQglApgpApIAAAA").cp();
	this.shape_20.setTransform(190,199.8);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,0,390,394.8);


(lib.zoom_bloodBlurred = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bloodBlurred();
	this.instance.setTransform(-58.9,-58.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.9,-58.9,118,118);


(lib.zoom_bloodAggl = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.blood_aggl();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137,136);


(lib.zoom_blood = function() {
	this.initialize();

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(204,0,0,0.6)","rgba(204,0,0,0.8)","rgba(126,0,0,0.902)"],[0,0.443,1],21.2,12.9,0,21.2,12.9,55.7).s().p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7IAAAA").cp();
	this.shape_21.setTransform(30,30);

	this.addChild(this.shape_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.zoom_bg = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.desktexture();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.zoom_antiB_noAggl = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.zoomview_antiB_noAggle();

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.zoom_antiB_Aggl = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.zoomview_antiB_Aggle();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.zoom_antiA_noAggl = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.zoomview_antiA_noAggle();

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.zoom_antiA_Aggl = function() {
	this.initialize();

	// Layer 1
	this.instance_6 = new lib.zoomview_antiA_Aggle();

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.yellowdrop = function() {
	this.initialize();

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(255,204,0,0.502)","rgba(255,153,0,0.502)","#A07118"],[0,0.761,1],21.2,12.9,0,21.2,12.9,55.7).s().p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7IAAAA").cp();
	this.shape_22.setTransform(30,30);

	this.addChild(this.shape_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.noagglunitation = function() {
	this.initialize();

	// Layer 1
	this.instance_7 = new lib.blood_Sticked();

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,80);


(lib.greendrop = function() {
	this.initialize();

	// Layer 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(0,204,51,0.502)","rgba(0,102,51,0.502)","rgba(0,51,51,0.8)"],[0,0.761,1],21.2,12.9,0,21.2,12.9,55.7).s().p("AEsAAQAAgBAAgBQgCh6hWhXQhYhYh8AAQh7AAhYBYQhWBXgCB6QAAABAAABIAAADQABARABAQQAJBNAtA9QAEAGAEAGQABABABAAQAEAFADAEQABABABABQADADACACQABACACACQACACADADQBYBYB7AAQB8AABYhYQBWhXACh6IAAgD").cp();
	this.shape_23.setTransform(30,30);

	// Layer 2
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,51,51,0.576)","rgba(0,204,51,0)"],[0,1],0,23.1,0,-20.6).s().p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7IAAAA").cp();
	this.shape_24.setTransform(30,30);

	this.addChild(this.shape_24,this.shape_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.bluedrop = function() {
	this.initialize();

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(0,204,204,0.502)","rgba(0,102,204,0.502)","rgba(0,0,153,0.8)"],[0,0.761,1],12.5,9.2,0,12.5,9.2,46.6).s().p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7IAAAA").cp();
	this.shape_25.setTransform(30,30);

	this.addChild(this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.antiB_blurred = function() {
	this.initialize();

	// Layer 1
	this.instance_8 = new lib.antiBBlurred();

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.antiAblurred = function() {
	this.initialize();

	// Layer 1
	this.instance_9 = new lib.antiABlurred();

	this.addChild(this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.zoom_testDish = function() {
	this.initialize();

	// Layer 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#B8B8B8","#FFFFFF"],[0,1],-46.4,-41.9,0,-46.4,-41.9,136.2).s().p("AIFoEQDWDXAAEtQAAEujWDWQjXDXkuAAQktAAjXjXQjWjWAAkuQAAktDWjXQDXjWEtAAQEuAADXDWIAAAA").cp();
	this.shape_26.setTransform(95,95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E9E9E9").s().p("AOIu1QAuAAAAAuIAAcPQAAAuguAAI8PAAQguAAAAguIAA8PQAAguAuAAIcPAAAIFoEQjXjWkuAAQktAAjXDWQjWDXAAEtQAAEuDWDWQDXDXEtAAQEuAADXjXQDWjWAAkuQAAktjWjXIAAAA").cp();
	this.shape_27.setTransform(95,95);

	// Layer 2
	this.instance_10 = new lib.zoom_texture();
	this.instance_10.setTransform(112.3,109.8,1,1,0,0,0,95.2,95.2);
	this.instance_10.alpha = 0.5;

	this.addChild(this.instance_10,this.shape_27,this.shape_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207.6,205.1);


(lib.topview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// agglutination
	this.instance_11 = new lib.zoom_bloodAggl();
	this.instance_11.setTransform(126.3,163.5,1,1,0,0,0,54.2,53.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101).to({_off:false},0).to({alpha:1},23).to({_off:true},1).wait(24).to({alpha:0,_off:false},0).to({alpha:1},22).to({_off:true},1).wait(16).to({alpha:0,_off:false},0).wait(92).to({alpha:1},22).to({_off:true},1).wait(215));

	// no agglutination
	this.instance_12 = new lib.noagglunitation();
	this.instance_12.setTransform(137.6,173.4,1,1,0,0,0,42.5,40.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(77).to({_off:false},0).to({alpha:1},23).to({_off:true},1).wait(68).to({alpha:0,_off:false},0).to({alpha:0.5},23).to({_off:true},1).wait(16).to({alpha:0,_off:false},0).wait(68).to({alpha:0.5},23).to({_off:true},1).wait(215));

	// upper blood
	this.instance_13 = new lib.zoom_bloodBlurred();
	this.instance_13.setTransform(137.5,173.5,1.434,1.434,0,0,0,0.2,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(77).to({_off:false},0).to({alpha:0.602},23).wait(1).to({alpha:0},0).to({alpha:0.5},23).to({_off:true},1).wait(215));

	// yellow blood blur
	this.instance_14 = new lib.antiB_blurred();
	this.instance_14.setTransform(137.3,173.1,1,1,0,0,0,83,83);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16).to({_off:false},0).wait(68).to({alpha:1},23).wait(1).to({alpha:0.699},22).to({_off:true},1).wait(302));

	// Layer 33
	this.instance_15 = new lib.zoom_antiB_Aggl();
	this.instance_15.setTransform(126.5,161.1,1,1,0,0,0,69.7,71);
	this.instance_15.alpha = 0.301;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(809).to({_off:false},0).to({alpha:1},23).wait(1));

	// Layer 30
	this.instance_16 = new lib.zoom_antiB_noAggl();
	this.instance_16.setTransform(137,175.3,1,1,0,0,0,69.7,71);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(785).to({_off:false},0).to({alpha:1},23).to({_off:true},1).wait(24));

	// Layer 15
	this.instance_17 = new lib.zoom_antiA_Aggl();
	this.instance_17.setTransform(123.8,161.1,1,1,0,0,0,69.7,71);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(24).to({_off:false},0).to({alpha:1},23).to({_off:true},1).wait(215));

	// Layer 20
	this.instance_18 = new lib.zoom_antiA_noAggl();
	this.instance_18.setTransform(137,173.1,1,1,0,0,0,69.7,71);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(570).to({_off:false},0).to({alpha:1},23).to({_off:true},1).wait(239));

	// high level blood
	this.instance_19 = new lib.zoom_blood();
	this.instance_19.setTransform(137.6,173.4,2.235,2.235,0,0,0,30,30);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(809).to({_off:false},0).to({scaleX:2.14,scaleY:2.14,alpha:0},23).wait(1));

	// high level blood
	this.instance_20 = new lib.zoom_blood();
	this.instance_20.setTransform(137.6,173.4,2.235,2.235,0,0,0,30,30);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(785).to({_off:false},0).to({scaleX:2.14,scaleY:2.14,alpha:0},23).to({_off:true},1).wait(24));

	// high level blood
	this.instance_21 = new lib.zoom_blood();
	this.instance_21.setTransform(137.6,173.4,2.235,2.235,0,0,0,30,30);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(570).to({_off:false},0).to({scaleX:2.14,scaleY:2.14,alpha:0},23).wait(1).to({scaleX:2.24,scaleY:2.24,alpha:1},0).to({scaleX:2.14,scaleY:2.14,alpha:0},23).to({_off:true},1).wait(215));

	// high level blood
	this.instance_22 = new lib.zoom_blood();
	this.instance_22.setTransform(138,173.3,2.573,2.573,0,0,0,30,30);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(531).to({_off:false},0).to({scaleX:0.98,scaleY:0.98,x:138.1,y:173.1,alpha:1},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,x:138,y:173.3},16).to({scaleX:2.24,scaleY:2.24},11).to({_off:true},1).wait(128).to({scaleX:2.57,scaleY:2.57,alpha:0,_off:false},0).to({scaleX:0.98,scaleY:0.98,x:138.1,y:173.1,alpha:1},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,x:138,y:173.3},16).to({scaleX:2.24,scaleY:2.24},11).to({_off:true},1).wait(48));

	// green
	this.instance_23 = new lib.greendrop();
	this.instance_23.setTransform(137.4,173.4,2.235,2.235,0,0,0,30,30);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(510).to({_off:false},0).to({alpha:1},20).to({_off:true},1).wait(107).to({alpha:0,_off:false},0).to({alpha:1},20).to({_off:true},1).wait(87));

	// yellow blood
	this.instance_24 = new lib.yellowdrop();
	this.instance_24.setTransform(137.6,173.4,2.573,2.573,0,0,0,30,30);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(29).to({_off:false},0).to({scaleX:0.98,scaleY:0.98,alpha:0.5},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,alpha:1},16).to({scaleX:2.24,scaleY:2.24,x:137.4},11).wait(1).to({alpha:0},23).wait(1).to({alpha:1},0).to({alpha:0},22).to({_off:true},1).wait(84).to({scaleX:2.57,scaleY:2.57,x:137.6,_off:false},0).to({scaleX:0.98,scaleY:0.98,alpha:0.5},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,alpha:1},16).to({scaleX:2.24,scaleY:2.24,x:137.4},11).wait(1).to({alpha:0},20).to({_off:true},1).wait(29).to({scaleX:2.57,scaleY:2.57,x:137.6,_off:false},0).to({scaleX:0.98,scaleY:0.98,alpha:0.5},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,alpha:1},16).to({scaleX:2.24,scaleY:2.24,x:137.4},11).to({_off:true},1).wait(147));

	// blue blood blur
	this.instance_25 = new lib.antiAblurred();
	this.instance_25.setTransform(137.4,173.4,1,1,0,0,0,83,83);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(68).to({_off:false},0).to({alpha:0.5},23).wait(1).to({alpha:0},0).to({alpha:0.5},22).to({_off:true},1).wait(215));

	// blue blood
	this.instance_26 = new lib.bluedrop();
	this.instance_26.setTransform(137.6,173.4,2.573,2.573,0,0,0,30,30);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(29).to({_off:false},0).to({scaleX:0.98,scaleY:0.98,y:173.2,alpha:0.5},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,x:137.2,y:173.8,alpha:1},16).to({scaleX:2.24,scaleY:2.24,x:137.3,y:173.2},11).wait(1).to({alpha:0},23).wait(1).to({alpha:1},0).to({alpha:0},22).to({_off:true},1).wait(45).to({scaleX:2.57,scaleY:2.57,x:137.6,y:173.4,_off:false},0).to({scaleX:0.98,scaleY:0.98,y:173.2,alpha:0.5},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,x:137.2,y:173.8,alpha:1},16).to({scaleX:2.24,scaleY:2.24,x:137.3,y:173.2},11).to({_off:true},1).wait(68).to({scaleX:2.57,scaleY:2.57,x:137.6,y:173.4,alpha:0,_off:false},0).to({scaleX:0.98,scaleY:0.98,y:173.2,alpha:0.5},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,x:137.2,y:173.8,alpha:1},16).to({scaleX:2.24,scaleY:2.24,x:137.3,y:173.2},11).to({_off:true},1).wait(108));

	// high level blood
	this.instance_27 = new lib.zoom_blood();
	this.instance_27.setTransform(138,173.3,2.573,2.573,0,0,0,30,30);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(29).to({_off:false},0).to({scaleX:0.98,scaleY:0.98,x:138.1,y:173.1,alpha:1},11,cjs.Ease.get(-0.99)).to({scaleX:2.34,scaleY:2.34,x:138,y:173.3},16).to({scaleX:2.24,scaleY:2.24},11).wait(1).to({x:137.6,y:173.4},0).to({scaleX:2.14,scaleY:2.14,alpha:0},23).wait(1).to({scaleX:2.24,scaleY:2.24,alpha:1},0).to({scaleX:2.14,scaleY:2.14,alpha:0},23).to({_off:true},1).wait(215));

	// antiB
	this.instance_28 = new lib.zoomView_antiB();
	this.instance_28.setTransform(138,173.3,2.573,2.573,0,0,0,30,30);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(231).to({_off:false},0).to({scaleX:1.14,scaleY:1.14,x:138.1,y:173.1,alpha:1},9,cjs.Ease.get(-0.99)).to({scaleX:1.63,scaleY:1.63,x:138,y:173.3},11).to({scaleX:1.52,scaleY:1.52},9).wait(138).to({alpha:0},23).wait(1).to({alpha:1},0).to({alpha:0},23).wait(1));

	// antiA
	this.instance_29 = new lib.zoomView_antiA();
	this.instance_29.setTransform(138,173.3,2.573,2.573,0,0,0,30,30);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(16).to({_off:false},0).to({scaleX:1.14,scaleY:1.14,x:138.1,y:173.1,alpha:1},9,cjs.Ease.get(-0.99)).to({scaleX:1.63,scaleY:1.63,x:138,y:173.3},11).to({scaleX:1.52,scaleY:1.52},9).wait(138).to({alpha:0},23).wait(1).to({alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(215));

	// zoomed blood
	this.instance_30 = new lib.zoom_bloodBlurred();
	this.instance_30.setTransform(168.3,204,1.029,1.029,0,0,0,30,30.1);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(77).to({_off:false},0).to({alpha:1},22).to({_off:true},1).wait(1).to({alpha:0,_off:false},0).to({alpha:0.5},23).to({_off:true},1).wait(84).to({alpha:0,_off:false},0).to({alpha:0.5},23).wait(1).to({alpha:0},0).to({alpha:0.5},22).to({_off:true},1).wait(84).to({alpha:0,_off:false},0).to({alpha:1},23).wait(1).to({alpha:0},0).to({alpha:0.5},22).to({_off:true},1).wait(215));

	// blood
	this.instance_31 = new lib.zoom_blood();
	this.instance_31.setTransform(138,173.3,2.573,2.573,0,0,0,30,30);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(9).to({_off:false},0).to({scaleX:1.14,scaleY:1.14,x:138.1,y:173.1,alpha:1},9,cjs.Ease.get(-0.99)).to({scaleX:1.63,scaleY:1.63,x:138,y:173.3},11).to({scaleX:1.52,scaleY:1.52},9).wait(39).to({alpha:0},22).to({_off:true},1).wait(1).to({alpha:1,_off:false},0).to({alpha:0},23).to({_off:true},1).wait(16).to({scaleX:2.57,scaleY:2.57,_off:false},0).to({scaleX:1.14,scaleY:1.14,x:138.1,y:173.1,alpha:1},9,cjs.Ease.get(-0.99)).to({scaleX:1.63,scaleY:1.63,x:138,y:173.3},11).to({scaleX:1.52,scaleY:1.52},9).wait(39).to({alpha:0},23).wait(1).to({alpha:1},0).to({alpha:0},22).to({_off:true},1).wait(16).to({scaleX:2.57,scaleY:2.57,_off:false},0).to({scaleX:1.14,scaleY:1.14,x:138.1,y:173.1,alpha:1},9,cjs.Ease.get(-0.99)).to({scaleX:1.63,scaleY:1.63,x:138,y:173.3},11).to({scaleX:1.52,scaleY:1.52},9).wait(39).to({alpha:0},23).wait(1).to({alpha:1},0).to({alpha:0},22).to({_off:true},1).wait(215));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ATOzNQH5H5AFLGQAAAIAAAGQAAFOhuEiQgfBSgoBOQh7DwjODOQhMBNhSBBQjRCnjwBcQgsARgtANQg3ASg4AOQhHAQhIALQiIAUiQAAQrPAAn+n+QhMhMhBhSQlxnMABpkQAAgGAAgIQAEpaFsnGQBBhSBMhNQH+n+LPABQJkgBHMFxQBSBBBMBMIAAAA").cp();
	mask.setTransform(137.2,182.1);

	// dish
	this.instance_32 = new lib.zoom_testDish("single",0);
	this.instance_32.setTransform(137.9,172.5,1,1,0,0,0,95,95);

	this.instance_32.mask = mask;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32}]}).wait(833));

	// desk
	this.instance_33 = new lib.zoom_desk();
	this.instance_33.setTransform(155.6,163.7,1,1,0,0,0,155.6,155.6);
	this.instance_33.alpha = 0.102;

	this.instance_33.mask = mask;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33}]}).wait(833));

	// bg
	this.instance_34 = new lib.zoom_bg();
	this.instance_34.setTransform(136.6,182,1.1,1.1,0,0,0,160,160);

	this.instance_34.mask = mask;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34}]}).wait(833));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,6,352,352);


(lib.zoomView_set = function() {
	this.initialize();

	// text
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#171717").s().p("An4h0IAAAbIAvAAIAACXIAdAAIAAiXIAuAAIAAgbIh6AAAlZg8QgNAIgFAPQgFAPAAAUQAAASAFAQQAFAPANAJQAMAJAWAAQAWAAAMgJQANgJAFgPQAFgQAAgSQAAgUgFgPQgFgPgNgIQgMgJgWAAQgWAAgMAJIAAAAAk3gsQARAAAFALQAGAMAAATQAAALgCAKQgCAKgGAFQgGAGgMAAQgLAAgHgGQgFgFgDgKQgCgKAAgLQAAgNACgKQADgJAGgFQAGgFALAAIAAAAACHh0IAAAeIAcAAIAAgeIgcAAAD5hFQgbAAgOASQgOARAAAiQAAAUAGAOQAFAPAMAIQAMAIAUAAQAMAAALgCQAMgBAHgCIAHgBIgBgWIgEABQgEAAgIABQgHAAgIAAQgIABgHAAQgQgBgGgIQgHgJAAgNIBOAAIACgTQAAgdgNgPQgNgPgbAAIAAAAADegLQAAgRAHgIQAGgJAOAAQANAAAHAIQAGAIAAASIg1AAACHhCIAACAIAcAAIAAiAIgcAAAGNhAIgXBkIgHAAIgUhmIgcAAIAaCAIAvAAIAThXIAUBXIAvAAIAbiAIgdAAIgUBmIgGAAIgXhkIgeAAAggh0IAqCyIA3AAIAriyIgfAAIgjCXIgLAAIghiXIgeAAAiwhCQgHACgFACQgEADgBAAIAAgHIgcAAIAAC4IAcAAIAAg4QACABAHABQAGABAJAAQATAAAMgHQANgGAGgQQAGgPAAgYQAAghgLgRQgNgQgYAAQgIAAgHADIAAAAAimgsQANAAAGAMQAGAKAAATQAAAUgHALQgGAMgSAAQgHAAgGgBQgGgBgCAAIAAhKQABAAAEgCQAEgCAGgBQAGgDAGAAIAAAA").cp();
	this.shape_28.setTransform(193.2,332.7);

	// highlight
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AQw1bQBRBBBNBNQH5H5AFLGQAAAIAAAGQAAFOhuEiQgfBRgoBPQh7DwjODOQhNBNhRBBQjRCnjwBcQgsARgtANQg3ASg4AOQhHAQhIALQiIAUiQAAQrPAAn+n+QhNhNhBhRQlwnMAApkQAAgGAAgIQAFpaFrnHQBBhRBNhNQH+n+LPABQJkgBHMFwIAAAA").cp();
	this.shape_29.setTransform(190,190);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0.2)","rgba(255,255,255,0.102)"],[0,0.196,1],-75.4,-94.5,0,-75.4,-94.5,236.9).s().p("AV+wNQlQMIojJDQp8KkucGcQlwnMAAplQAAgHAAgIQAFpZFrnGQBBhRBNhNQH+n+LOAAQJlAAHMFwIAAAA").cp();
	this.shape_30.setTransform(156.6,156.6);

	// Top view
	this.instance_35 = new lib.topview();
	this.instance_35.setTransform(213.3,167.9,1,1,0,0,0,160.5,160);

	// base
	this.instance_36 = new lib.zoom_border();
	this.instance_36.setTransform(190,190,1,1,0,0,0,190,190);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgQFgiJIAFhNEgQFgiHQAAgBAAgBEAh1gMaQgQAQgRAPQgjAgglAeEAgngLFIhnBZMgxBAsaEgh0AjXMARthE1IACgp");
	this.shape_31.setTransform(103,408.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(0,0,0,0.102)"],[0,1],-114,174.2,1.2,-37.7).s().p("EgOtgiaQARLpINIkQItJIMoARQJ4AOHdmCMgxBAsaQAOiDg3geQg3gfuUDpMARthE1").cp();
	this.shape_32.setTransform(94,414.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(0,0,0,0.302)","rgba(0,0,0,0.502)","rgba(0,0,0,0.302)"],[0,0.812,1],12.1,152.9,0,12.1,152.9,297.1).s().p("AAAAwIgBAAQAAgcABgbIgCAAIABgoIAEAAQgBANAAAOQgCAgAAAjQAAABAAAAIAAAA").cp();
	this.shape_33.setTransform(0,185.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(0,0,0,0.302)","rgba(0,0,0,0.502)","rgba(0,0,0,0.302)"],[0,0.812,1],-230.8,-270.3,0,-230.8,-270.3,357.3).s().p("AA0gtQgQAQgRAPQgiAegkAeIBnhb").cp();
	this.shape_34.setTransform(314.3,333.6);

	this.addChild(this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.instance_36,this.instance_35,this.shape_30,this.shape_29,this.shape_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.5,0,498.6,634.9);

})(zoomView = zoomView||{}, images = images||{}, createjs = createjs||{});
var zoomView, images, createjs;