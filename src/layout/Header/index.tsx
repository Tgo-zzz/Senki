import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const isIndex =  location.pathname === "/welcome" || location.pathname === '/'
  return (
    <div
      className={
        classes.headerContainer +
        " " +
        (isIndex ? "" : classes.tabbarBC)
      }
    >
      <div className={classes.headerInnerContainer}>
        <NavLink to="/welcome" className={classes.logoTitleBox}>
          <div>
            <img
              className={classes.logoImg}
              src={`https://k-1258976754.cos.ap-shanghai.myqcloud.com/senki/logo-${isIndex ?'blue': 'white'}.png`}
              alt=""
            />
          </div>
          <div
            className={
              classes.logoTitle +
              " " +
              (isIndex  ? "" : classes.tabbar)
            }
            style={{ fontFamily: "飞驰标题体" }}
          >
            Senki
          </div>
        </NavLink>
        <div className={classes.navItemBox}>
          <NavLink
            to="/algosimulate"
            isActive={(match, location) => {
              console.log(match, location)                 
              if(/\/algosimulate/.test(location.pathname)){
                return true
              }
              return false
            }}
            activeStyle={{ color: "#407cc0" }}
            className={
              classes.navItem +
              " " +
              (isIndex ? "" : classes.tabbar)
            }
          >
            算法模拟
          </NavLink>
          <NavLink
            to="/visual-editor"
            activeStyle={{ color: "#407cc0" }}
            className={
              classes.navItem +
              " " +
              (isIndex ? "" : classes.tabbar)
            }
          >
            动手演练
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{ color: "#407cc0" }}
            className={
              classes.navItem +
              " " +
              (isIndex ? "" : classes.tabbar)
            }
          >
            Senki.js文档
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

const useStyles = makeStyles({
  headerContainer: {
    height: "60px",
    width: "100%",
    color: "rgb(13, 51, 128)",
    transition: "all 0.2s",
  },
  tabbarBC: {
    color: "white",
    background: "#1c334c",
  },
  tabbar: {
    color: "white",
  },
  headerInnerContainer: {
    width: "90%",
    margin: "0 auto",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoImg: {
    width: "40px",
    height: "40px",
    transition: "all 0.5s"
  },
  logoImgBox: {
    width: "40px",
    height: "40px",
  },
  logoTitle: {
    fontSize: "32px",
    marginLeft: "10px",
    paddingBottom: "5px",
    boxSizing: "border-box",
    "&:hover": {
      cursor: "pointer",
    },
  },
  logoTitleBox: {
    display: "flex",
    alignItems: "center",
  },
  navItemBox: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
    height: "60px",
  },
  navItem: {
    "&:hover": {
      cursor: "pointer",
      color: "white",
      textDecoration: "1px",
    },
    fontWeight: 600,
    fontSize: "1rem",
    marginRight: "40px",
    height: "60px",
    lineHeight: "60px",
    position: "relative",
    "&::after": {},
  },
  // activeStyle: {
  //   color: ;
  // }
});
