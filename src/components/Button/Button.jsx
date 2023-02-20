import { StyledButton } from './Button.styled';

export const Button = ({
  type = 'button',
  icon: Icon = null,
  disabled = false,
  children,
  onClick,
  ...allyProps
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...allyProps}
    >
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};
