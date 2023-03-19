import { type FC, useEffect, useState } from "react";
import { pascalCase } from "change-case";
import NoIcon from "./NoIcon";
import * as allIcons from "../../icons";
import { classNames } from "../../shared/utils";
import "./Icon.scss";

interface IconProps {
  /**
   * The name of the icon
   */
  name?: string;
  /**
   * The width of the icon in px
   */
  width?: number;
  /**
   * The height of the icon in px
   */
  height?: number;
  /**
   * Extra classes to override styles of chip
   */
  htmlClass?: string;
  /**
   * HTML title attribute for tooltip text
   */
  title?: string;
  /**
   * Content to be shown on top of the icon as a notification
   */
  notificationContent?: string | number;
  /**
   * Background color of the notification
   */
  notificationBGColor?: string;
}

/**
 * Icon component
 */
const Icon: FC<IconProps> = ({
  htmlClass,
  name,
  width,
  height,
  title,
  notificationContent,
  notificationBGColor,
}: IconProps) => {
  const [imgName, setImgName] = useState(name);
  const className = classNames("hh-icon", {
    [htmlClass]: htmlClass,
  });
  const divStyle =
    width && height
      ? {
          width: `${width}px`,
          height: `${height}px`,
        }
      : {};

  useEffect(() => {
    setImgName(name);
  }, [name]);

  const ActualIcon = allIcons[pascalCase(imgName)] || NoIcon;

  return (
    <div title={title} key={imgName} className={className} style={divStyle}>
      <ActualIcon />

      {notificationContent && (
        <div
          className="hh-icon__notification"
          style={{ backgroundColor: notificationBGColor }}
        >
          {notificationContent}
        </div>
      )}
    </div>
  );
};

Icon.defaultProps = {
  htmlClass: undefined,
  width: 0,
  height: 0,
  title: "",
  notificationContent: "",
  notificationBGColor: "#DF3324",
};

export default Icon;
