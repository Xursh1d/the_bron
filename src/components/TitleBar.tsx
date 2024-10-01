import { BackButton } from "./BackButton";

interface TitleBarProps {
    title: string
    backCallBack?: () => void;
    subComponent?: React.ReactNode;
}
export default function TitleBar(props: TitleBarProps) {
    const { backCallBack, title, subComponent } = props

    return (
        <div className="hidden my-4 space-y-4 sm:block">
            <BackButton onClick={backCallBack} />
            <h1 className="leading-[48px] text-[40px] font-bold">{title}</h1>
            {subComponent}
        </div>
    );
}
