package {

    import flash.display.BitmapData;
    import flash.utils.Timer;
    import flash.events.TimerEvent;
    import starling.display.Sprite;
    import starling.display.Image;
    import starling.textures.Texture;
    import starling.events.Event;
    import nape.phys.Body;
    import nape.phys.BodyType;
    import nape.phys.BodyList;
    import nape.phys.Material;
    import nape.geom.Vec2;
    import nape.shape.Circle;
    import nape.shape.Polygon;
    import nape.space.Space;

    public class Game extends Sprite
    {
        private var stageW:int;
        private var stageH:int;
        private var bitmap:BitmapData;
        private var texture:Texture;
        private var space:Space;
        private var floorBody:Body;
        private var ballBodies:Vector.<Body> = new Vector.<Body>();
        private var myTimer:Timer = new Timer(200, 100);

        public function Game()
        {
            addEventListener(Event.ADDED_TO_STAGE, init);
        }

        private function init(eventObject:Event):void
        {
            stageW = stage.stageWidth;
            stageH = stage.stageHeight;

            bitmap = new Ball();
            texture = Texture.fromBitmapData(bitmap);
            space = new Space(new Vec2(0, 2000));
            setFloor();
            addEventListener(Event.ENTER_FRAME, refreshScreen);
            myTimer.addEventListener(TimerEvent.TIMER, addBall);
            myTimer.start();
        }

        private function refreshScreen(eventObject:Event):void
        {
            space.step(1/24);
            var bodies:BodyList = space.liveBodies;
            for (var n:uint = 0; n < bodies.length; n++)
            {
                var body:Body = bodies.at(n);
                var updateGraphic:Function = body.userData.graphicUpdate as Function;
                if (Boolean(updateGraphic))
                {
                    updateGraphic(body);
                }
            }
        }

        function addBall(eventObject:TimerEvent):void
        {
            setBall();
        }

        private function setFloor():void
        {
            floorBody = new Body(BodyType.STATIC);
            floorBody.shapes.add(new Polygon(Polygon.rect(0, stageH, stageW, 100)));
            floorBody.space = space;
        }

        private function setBall():void
        {
            var image:Image = new Image(texture);
            image.pivotX = 50;
            image.pivotY = 50;
            addChild(image);

            var ballBody = new Body(BodyType.DYNAMIC, new Vec2(stageW * Math.random(), 0));
            ballBody.shapes.add(new Circle(50, null, new Material(20)))
            ballBody.space = space;
            ballBody.userData.graphic = image;
            ballBody.userData.graphicUpdate = updateGraphic;
            ballBodies.push(ballBody);
        }

        private function updateGraphic(_body:Body):void
        {
            var image:Image = _body.userData.graphic as Image;
            image.x = _body.position.x;
            image.y = _body.position.y;
            image.rotation = _body.rotation;
        }
    }

}