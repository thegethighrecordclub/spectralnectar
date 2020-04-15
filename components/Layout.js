const layoutStyle = {
  margin: 'auto',
  width: '100%',
  height: '100%',
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <div id="sfc2tepfpdfq61wtpybxpuxel3krz4mw3nc"></div>
    <a href="https://www.freecounterstat.com" title="website counter"><img src="https://counter4.stat.ovh/private/freecounterstat.php?c=2tepfpdfq61wtpybxpuxel3krz4mw3nc" border="0" title="website counter" alt="website counter"/></a>

    {props.children}
  </div>
);

export default Layout;
