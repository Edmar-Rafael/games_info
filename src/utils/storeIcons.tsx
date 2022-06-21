import React from 'react';
import { Icons } from '../components'
import {
  faPlaystation,
  faXbox,
  faApple,
  faSteam,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export function mapStoresIcons(slug: string, newClass: string){
  let faIcon: IconProp = 'abacus'
  
  switch(slug){
    case "playstation-store" :
      faIcon = faPlaystation;
      break;
    case "xbox360":
    case "xbox-store":
      faIcon = faXbox;
      break;
    case "steam":
      faIcon = faSteam
      break;
    case "apple-appstore":
      faIcon = faApple
      break;
    case "google-play":
      faIcon = faGooglePlay
      break;
    default:
      faIcon = faGamepad
      break;

  }

  return <Icons icon={faIcon} class_name={newClass}/>
}