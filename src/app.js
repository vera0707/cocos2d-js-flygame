var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        // const background1 = new cc.Sprite(res.Img_background);
        // background1.setAnchorPoint(cc.p(0,0));
        // background1.setPosition(0,0);
        // this.addChild(background1);

        // const background2 = new cc.Sprite(res.Img_background);
        // background2.setAnchorPoint(cc.p(0,0));
        // //这里减2的目的是为了防止图片交界的黑线
        // background2.setPosition(0,background2.getContentSize().height-2);
        // this.addChild(background2);


        // this.schedule(()=>{
        //     console.log(1)
        //     background1.setPositionY(background1.getPositionY()-2);
        //     background2.setPositionY(background1.getPositionY() + background1.getContentSize().height-2);
            
        //     if(background2.getPositionY() == 0) {
        //         background1.setPositionY(0);
        //     }
        // },0.01)
        // return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

