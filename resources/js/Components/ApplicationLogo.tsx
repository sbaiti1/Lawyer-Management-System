import { SVGAttributes } from 'react';
import logo from "../../../public/logo.svg"
export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <img src={logo} width={130} />
    );
}
