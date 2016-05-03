package {

    import starling.core.Starling;
    import starling.display.Sprite;
    import starling.display.Quad;
    import starling.events.Event;
    import starling.animation.Tween;
    import starling.animation.Transitions;

    public class Game extends Sprite
    {
        private var square:Quad;
        private var myTransitions:Vector.<String>;
        private var positionsX:Vector.<Number>;

        public function Game()
        {
            addEventListener(Event.ADDED_TO_STAGE, init);
        }

        private function init(eventObject:Event):void
        {
            square = new Quad(50, 50, 0x0000FF);
            addChild(square);
            square.x = 0;
            square.y = stage.stageHeight / 2;
            square.pivotX = 50 / 2;
            square.pivotY = 50 / 2;

            myTransitions = new <String> [
                Transitions.EASE_IN_OUT_ELASTIC,
                Transitions.EASE_IN_OUT_BOUNCE,
                Transitions.EASE_OUT_IN_ELASTIC
            ];
            positionsX = new <Number> [
                stage.stageWidth,
                0,
                stage.stageWidth
            ];
            nextTween();
        }

        private function nextTween():void
        {
            if (myTransitions.length > 0)
            {
                var myTrans:String = myTransitions.shift();
                var posX:Number = positionsX.shift();
                var myTween:Tween = new Tween(square, 4, myTrans);
                myTween.moveTo(posX, square.y);
                Starling.juggler.add(myTween);
                myTween.onComplete = nextTween;
            }
        }
    }

}