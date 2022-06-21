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
import { IconProp } from '@fortawesome/fontawesome-svg-core'


export function mapPlatforms(slug: string, newClass: string) {
  let faIcon: IconProp = 'abacus'
  
  switch(slug) {
    case 'pc':
      faIcon = faWindows
      break
    case 'playstation':
      faIcon = faPlaystation;
      break
    case 'xbox':
      faIcon = faXbox;
      break
    case 'ios':
    case 'mac':
      faIcon = faApple
      break
    case 'android':
      faIcon = faAndroid
      break
    case 'linux':
      faIcon = faLinux
      break
    default:
      faIcon = faGamepad
      break
  }

  return <Icons icon={faIcon} class_name={newClass}/>
}