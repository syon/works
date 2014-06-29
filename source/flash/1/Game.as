package {

    import starling.display.Sprite;
    import starling.display.Quad;
    import starling.events.Event;

    public class Game extends Sprite
    {
        private var square:Quad;

        public function Game()
        {
            addEventListener(Event.ADDED_TO_STAGE, init);
        }

        private function init(eventObject:Event):void
        {
            square = new Quad(50, 50, 0x0000FF);
            addChild(square);
            square.x = stage.stageWidth /2;
            square.y = stage.stageHeight / 2;
            square.pivotX = 50 / 2;
            square.pivotY = 50 / 2;
            addEventListener(Event.ENTER_FRAME, rotate);
        }

        private function rotate(eventObject:Event):void
        {
            square.rotation += 0.1;
        }
    }

}