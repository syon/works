package {

    import flash.display.Sprite;
    import starling.core.Starling;

    [SWF(width="400", height="300", frameRate="60", backgroundColor="#ffffff")]
    public class Startup extends Sprite
    {
        private var _starling:Starling;

        public function Startup()
        {
            _starling = new Starling(Game, stage);
            _starling.start();
        }
    }

}