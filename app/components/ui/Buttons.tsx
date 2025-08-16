// ------------------------------------
// Derived Button Variants
// ------------------------------------
import { DownloadIcon } from "lucide-react";
import BaseButton, { ButtonProps } from "./Atoms/BaseButton";

export const PrimaryButton = (props: Partial<ButtonProps>) => (
  <BaseButton variant="primary" {...props} />
);

export const SecondaryButton = (props: Partial<ButtonProps>) => (
  <BaseButton variant="secondary" {...props} />
);

export const DangerButton = (props: Partial<ButtonProps>) => (
  <BaseButton variant="danger" {...props} />
);

export const GhostButton = (props: Partial<ButtonProps>) => (
  <BaseButton variant="ghost" {...props} />
);

export const SubmitButton = (props: Partial<ButtonProps>) => (
  <BaseButton type="submit" variant="primary" {...props} />
);

export const DownloadButton = (props: Partial<ButtonProps<'a'>>) => (
  <BaseButton
    as="a"
    download
    iconRight={<DownloadIcon />}
    target="_blank"
    rel="noopener noreferrer"
    variant="primary"
    {...props}
  />
);

export const IconButton = (props: Partial<ButtonProps<'a'>>) => (
  <BaseButton
    as="a"
    target="_blank"
    rel="noopener noreferrer"
    variant="ghost"
    {...props}
  />
);

const Button = {
  Base: BaseButton,
  Primary: PrimaryButton,
  Secondary: SecondaryButton,
  Danger: DangerButton,
  Ghost: GhostButton,
  Submit: SubmitButton,
  Download: DownloadButton,
  Icon: IconButton,
};

export default Button;