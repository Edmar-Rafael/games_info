import { Icons } from '../components'
import {
  faWindows,
  faPlaystation,
  faXbox,
  faApple,
  faAndroid,
  faLinux
} from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'


export function mapPlatforms(slug, myClass) {
  let icon = ''
  
  switch(slug) {
    case 'pc':
      icon = faWindows
      break
    case 'playstation':
      icon = faPlaystation;
      break
    case 'xbox':
      icon = faXbox;
      break
    case 'ios':
    case 'mac':
      icon = faApple
      break
    case 'android':
      icon = faAndroid
      break
    case 'linux':
      icon = faLinux
      break
    default:
      icon = faGamepad
      break
  }

  return <Icons icon={icon} className={myClass}/>
}