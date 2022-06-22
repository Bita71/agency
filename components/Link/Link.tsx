import React, {HTMLProps} from 'react';
import NextLink, {LinkProps} from "next/link";

const Link = ({
                  href,
                  passHref,
                  replace,
                  scroll,
                  shallow,
                  children,
                  as,
                  ...rest
              }: LinkProps & HTMLProps<HTMLAnchorElement>) => {
    return (
        <NextLink
            as={as}
            href={href}
            passHref={passHref}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
        >
            <a style={{display: 'flex'}} {...rest}>{children}</a>
        </NextLink>
    )
        ;
};

export default Link;