package {

    import flash.display.Sprite;
    import starling.core.Starling;

    [SWF(width="600", height="420", frameRate="60", backgroundColor="#ffffff")]
    public class Startup extends Sprite
    {
        private var _starling:Starling;

        public function Startup()
        {
            _starling = new Starling(Main, stage);
            _starling.start();
        }
    }

}