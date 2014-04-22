-- phpMyAdmin SQL Dump
-- version 3.4.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 06-04-2014 a las 23:40:39
-- Versión del servidor: 5.0.95
-- Versión de PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `u167341_paperblox`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Partida`
--

CREATE TABLE IF NOT EXISTS `Partida` (
  `fecha` datetime NOT NULL,
  `clavePartida` varchar(8) NOT NULL,
  `claveUsuario` varchar(8) NOT NULL,
  `Puntaje` int(10) NOT NULL,
  `Nivel` int(10) NOT NULL,
  `NumeroLineas` int(10) NOT NULL,
  PRIMARY KEY  (`clavePartida`),
  KEY `claveUsuario` (`claveUsuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Partida`
--

INSERT INTO `Partida` (`fecha`, `clavePartida`, `claveUsuario`, `Puntaje`, `Nivel`, `NumeroLineas`) VALUES
('2014-03-25 11:46:31', 'TE01', 'usr01', 1220, 2, 12),
('2014-03-25 15:12:41', 'TE02', 'usr02', 2220, 6, 24);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE IF NOT EXISTS `Usuario` (
  `ID` timestamp NOT NULL default CURRENT_TIMESTAMP,
  `clave` varchar(8) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `USUARIO_IMG`
--

CREATE TABLE IF NOT EXISTS `USUARIO_IMG` (
  `USUARIO_ID` varchar(20) NOT NULL,
  `IMG` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
