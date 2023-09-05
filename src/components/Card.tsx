import Image from 'next/image';
import Link from 'next/link';

interface Props {
    id: string;
    name: string;
    birthYear: string;
}

export default function Card({ id, birthYear, name }: Props) {
    return <Link
        href={`characters/${encodeURIComponent(id)}`}
        className="p-4 bg-slate-50 border rounded-md text-black flex flex-col items-center"
        passHref>
        <Image src={require("@/assets/no-image.png")} width={256} height={256} alt={' '} />
        <p className="block" key={id}>{name}</p>
        <p>{birthYear}</p>
    </Link>
}