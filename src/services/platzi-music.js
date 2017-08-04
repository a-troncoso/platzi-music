// Cuando no se especifica el / o ../
// webpack asume q es una dependencia de npm

import trae from 'trae'
import configService from './config'

const platziMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default platziMusicService
