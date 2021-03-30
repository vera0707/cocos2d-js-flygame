
// const BulletLayer = cc.Layer.extend({
//     stor: function(){

//         return true;

//     }
// });

const PlaneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        const size = cc.winSize;

        // 添加子弹
        const texture = cc.textureCache.addImage(res.Img_bullet_1);
        const spriteBatchNode = new cc.SpriteBatchNode(texture);


        const plane = new cc.Sprite(res.Img_plane);
        plane.setPosition(cc.p(size.width/2,60));

        this.addChild(plane, 1);

        // 闪烁动画
        const action_blink = new cc.Blink(1, 3);
        plane.runAction(action_blink);


        const animation = new cc.Animation();
        animation.setDelayPerUnit(0.1);

        animation.addSpriteFrameWithFile(res.Img_plane_fly1);
        animation.addSpriteFrameWithFile(res.Img_plane_fly2);

        plane.runAction(cc.animate(animation).repeatForever());

        // schedule(()=>{
        //     this.addChild(spriteBatchNode,0)；
        // },1);



        return true;
    }
});
