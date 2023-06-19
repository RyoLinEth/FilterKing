import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

const home = [
  {
    name: "Home",
    routerPath: "/",
  }
]

const listing = [
  {
    name: "Search",
    routerPath: "/search",
  }
];

const MobileMenuContent = () => {
  const route = useRouter();
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/">
            <a className="sidebar-header-inner">
              <img
                className="nav_logo_img img-fluid mt20"
                src="/assets/images/header-logo2.png"
                alt="header-logo.png"
              />
              <span className="brand-text">ClawStuff</span>
            </a>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <SubMenu
            title="Home"
            className={
              home.some((page) => page.routerPath === route.pathname)
                ? "parent-menu-active"
                : undefined
            }
          >
            {home.map((val, i) => (
              <MenuItem key={i} active={true}>
                <Link href={val.routerPath}>
                  <a
                    className={
                      val.routerPath === route.pathname
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Home Home */}

          <SubMenu
            title="Listing"
            className={
              listing.some((page) => page.routerPath === route.pathname)
                ? "parent-menu-active"
                : undefined
            }
          >
            {listing.map((val, i) => (
              <MenuItem key={i} active={true}>
                <Link href={val.routerPath}>
                  <a
                    className={
                      val.routerPath === route.pathname
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Pages Listing */}

          <MenuItem>
            <Link href="/contact">
              <a
                className={
                  route.pathname === "/contact" ? "ui-active" : undefined
                }
              >
                Contact
              </a>
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default MobileMenuContent;
