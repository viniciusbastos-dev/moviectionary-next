import React from "react";
import * as S from "./styles";
import Link from "next/link";

const Header = () => {
    return (
        <S.Container>
            <Link href="/">
                <S.Title>
                    <S.Logo src="/logo.png" alt="Logo do Moviectionary" />
                </S.Title>
            </Link>
        </S.Container>
    );
};

export default Header;
