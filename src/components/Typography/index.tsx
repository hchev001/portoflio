const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

interface TypographyProps {
  variant: keyof typeof variantsMapping;
  color: string;
  children: React.ReactNode;
  props: any;
}
const Typography = ({
  variant,
  color,
  children,
  ...props
}: TypographyProps) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return <Component {...props}>{children}</Component>;
};

export default Typography;
