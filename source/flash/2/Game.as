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
            square = new Quad(100, 100, 0x000000);
            addChild(square);
            square.x = stage.stageWidth /2;
            square.y = stage.stageHeight / 2;
            square.pivotX = 100 / 2;
            square.pivotY = 100 / 2;
            square.setVertexAlpha(0, 0);
            square.setVertexColor(1, 0xFF0000);
            square.setVertexColor(2, 0x00FF00);
            square.setVertexColor(3, 0x0000FF);
            addEventListener(Event.ENTER_FRAME, rotate);
        }

        private function rotate(eventObject:Event):void
        {
            square.rotation += 0.1;
        }
    }

}