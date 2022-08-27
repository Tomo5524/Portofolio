import NextLink from "next/link";
import { Grid } from "../Foundations/foundations";

// import Logo from './logo'
// import {
//   Container,
//   Box,
//   Link,
//   Stack,
//   Heading,
//   Flex,
//   Menu,
//   MenuItem,
//   MenuList,
//   MenuButton,
//   IconButton,
//   useColorModeValue
// } from '@chakra-ui/react'
// import { HamburgerIcon } from '@chakra-ui/icons'
// import ThemeToggleButton from './theme-toggle-button'
// import { IoLogoGithub } from 'react-icons/io5'
// import { GridContainer, GridWrapper, GridItem } from './styles';

// const LinkItem = ({ href, path, target, children, ...props }) => {
//   const active = path === href
//   const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
//   return (
//     <NextLink href={href} passHref scroll={false}>
//       <Link
//         p={2}
//         bg={active ? 'grassTeal' : undefined}
//         color={active ? '#202023' : inactiveColor}
//         target={target}
//         {...props}
//       >
//         {children}
//       </Link>
//     </NextLink>
//   )
// }
export default function Header() {
  // const { path } = props

  return (
    <Grid>
      <li>Hiya</li>
    </Grid>
  );
}
