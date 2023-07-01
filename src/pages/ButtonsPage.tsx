import { Button } from "../components/buttons/Button";
import { buttons } from "../helpers/buttons";
import "../sass/buttonsPage/buttonsPage.scss";

export const ButtonsPage = () => {
  return (
    <div className="buttons-page">
      <p className="page-title">Buttons</p>
      <div className="buttons-container">
        {buttons.map((button, i) => {
          const {
            name,
            aboveText,
            disabled,
            text,
            bgColor,
            color,
            border,
            borderColor,
            height,
            width,
            hasIcon,
            icon,
            iconClass,
          } = button;
          return (
            <div key={i} className={`button-wrapper-${i}`}>
              <p
                style={{
                  color: aboveText.includes("hover") ? "#828282" : "#333333",
                }}>
                {aboveText}
              </p>

              <Button
                disabled={disabled ? disabled : !disabled}
                text={text}
                bgColor={bgColor}
                colorText={color}
                border={border ? `1px solid ${borderColor}` : "none"}
                height={height}
                width={width}
                hasIcon={hasIcon ? hasIcon : !hasIcon}
                icon={icon ? icon : ""}
                iconClass={iconClass ? iconClass : ""}
                name={name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
