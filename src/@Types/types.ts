import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type StateProps = any;
export type ResponseProps = any;
export type DispatchProps = any;
export type ActionProps = any;
export type DataProps = any;

export type StoresProps = {
  store: {
    name: string;
    slug: string;
    url: string;
  }
}

type Publisher = {
  id: number;
  name: string;
  length: number;
}

export type GameIdDataProps = {
  loading: boolean;
  data: {
    name: string;
    released: string;
    background_image: string;
    playtime: number;
    description_raw: string;
    website: string;
    reddit_name: string;
    reddit_url: string;
    metacritic: number;
    stores: StoresProps[];
    publishers: Publisher[];
    parent_platforms: [{
      platform: {
        id: number;
        slug: string;
      };
    }];
    clip: {
      video: string;
    };
  }
}

export type ItemProps = {
  id: number;
  background_image?: string;
  name?: string;
  released?: string;
  metacritic?: number;
  platforms: [{
    platform: {
      name: string;
    }
  }]
}

export type ResultsProps = {
  id: number;
  name: string;
  platforms: PlatformsProps[]
}

export type PlatformsDataProps = {
  data: {
    results: ResultsProps[]
  }
}

export type IconsProps = {
  back_home?: boolean;
  modal_style?: boolean;
  switch_border?: boolean;
  class_name?: string;
  icon: IconProp
}

export type PlatformsProps = {
  id: number;
  name: string;
}