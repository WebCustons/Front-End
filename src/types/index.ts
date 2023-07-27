
export type buttonProps = {
    nameButtons?: string;
};

export interface IStyledTypography {
    classText: "Number" | "Title" | "Title1.2" | "Heading1" | "Heading1.2" | "Heading2" | "Heading3" | "Heading4" | "Heading" | "HeadingColorTwo" | "Body" | "BodyColor" | "BodyError" | "Caption" | "practicing"
}

export interface IbaseComponents extends IStyledTypography {
    children: React.ReactNode;
    className?: string;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
    htmlFor?: string;
}