export default function Recipe() {
  return (
    <div>
      Here's the livestream we'll be using for the party :~)
      <br />
      <iFrame
        src='https://player.twitch.tv/?channel=spectralnectar'
        frameborder='0'
        allowfullscreen='true'
        scrolling='no'
        height='378'
        width='620'
      ></iFrame>
    </div>
  );
}
