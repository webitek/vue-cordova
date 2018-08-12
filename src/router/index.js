import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Vibration from '@/views/Vibration'
import Flash from '@/views/Flash'
import Camera from '@/views/Camera'
import Nfc from '@/views/Nfc'
import Localisation from '@/views/Localisation'
import NasaSearch from '@/views/NasaSearch'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/vibration',
      name: 'Vibration',
      component: Vibration
    },{
      path: '/flash',
      name: 'Flash',
      component: Flash
    },{
      path: '/camera',
      name: 'Camera',
      component: Camera
    },{
      path: '/nfc',
      name: 'Nfc',
      component: Nfc
    },{
      path: '/localisation',
      name: 'Localisation',
      component: Localisation
    },{
      path: '/nasa-search',
      name: 'NasaSearch',
      component: NasaSearch
    }
  ]
})
