
const BulletLayer = cc.Layer.extend({
	batchNode:null,
    ctor: function(){
    	this._super();

    	const pos_x = cc.winSize.width/2;
    	let pos_y = 40;
    	

    	const batchNode = new cc.SpriteBatchNode(res.Img_bullet_1);
    	this.addChild(batchNode);
    
    	this.schedule(()=>{
    		pos_y += 10;
    		const node = new cc.Sprite(res.Img_bullet_1);
    		batchNode.addChild(node);
    		node.setPosition(cc.p(pos_x,pos_y));
    	})

        return true;
    }
});

