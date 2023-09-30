import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Heading,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

export const Navbar = () => {
  return (
    <Flex
      direction="row" // Cambiar a 'row' para alinear los elementos horizontalmente
      align="center"
      p={30}
      bg={"#ffb700"}
      color={"#F1F1F1"}
      boxShadow={'md'}
    >
      <Link to='/' className='text-white text-3xl font-bold hover:scale-150 transition-all duration-500'>
        <h1>
          Preguntas
        </h1>
      </Link>

      <HStack spacing={4} ml="auto"> {/* Mover los iconos al lado derecho */}
        <a
          className='link'
          href='https://www.linkedin.com/in/jhon-joseph-cabrera-ojanama-086439252/'
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon w={30} h={30} as={FaLinkedin} />
        </a>
        <a
          className='link'
          href='https://github.com/jhoncabrera2050'
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon w={30} h={30} as={FaGithub} />
        </a>
        <a
          className='link'
          href='mailto:jhoncabrera2050@gmail.com'
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon w={30} h={30} as={MdAlternateEmail} />
        </a>
        <a
          className='link'
          href='https://www.instagram.com/sokarito.r'
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon w={30} h={40} as={FaInstagram} />
        </a>
      </HStack>
    </Flex>
  );
};
