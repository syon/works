package {

    import starling.core.Starling;
    import starling.display.Sprite;
    import starling.display.Quad;
    import starling.events.Event;
    import starling.animation.Tween;
    import starling.animation.Transitions;

    public class Main extends Sprite
    {
        private var tips:Vector.<Quad>;
        private var sheet:Sprite = new Sprite();

        public function Main()
        {
            addEventListener(Event.ADDED_TO_STAGE, init);
        }

        private function init(eventObject:Event):void
        {
            addChild(sheet);
            tips = new <Quad> [
                newTip( 500),newTip( 600),newTip( 700),newTip( 800),
                newTip(1500),newTip(1600),newTip(1700),newTip(1800),
                newTip(2500),newTip(2600),newTip(2700),newTip(2800),
                newTip(3500),newTip(3600),newTip(3700),newTip(3800),
            ];

            var sheetTotalLength:Number = 4000;
            var sheetDuration:Number = 10;
            var tween:Tween = new Tween(sheet, sheetDuration, Transitions.LINEAR);
            tween.moveTo(-sheetTotalLength, 0);
            Starling.juggler.add(tween);
        }

        private function newTip(posX:Number):Quad
        {
            var tip = new Quad(50, 50, 0x0000FF);
            tip.x = posX;
            tip.y = stage.stageHeight / 2;
            tip.pivotX = 50 / 2;
            tip.pivotY = 50 / 2;
            sheet.addChild(tip);
            return tip;
        }
    }

}