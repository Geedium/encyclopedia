interface Props {
    children: React.ReactNode;
    className?: string | undefined;
}

export default function Container({ children, className }: Props) {
    return <div className={`container mx-auto ${className}`}>{children}</div>
}
