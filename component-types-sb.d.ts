import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  link?: MultilinkStoryblok;
  label?: string;
  has_icon?: boolean;
  disabled?: boolean;
  size?: "" | "default" | "small" | "large";
  variant?: "" | "fill" | "outline";
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface FooterCompnayInfoStoryblok {
  logo?: SiteLogoStoryblok[];
  powered_by?: string;
  address: RichtextStoryblok;
  _uid: string;
  component: "footer_compnay_info";
  [k: string]: any;
}

export interface FooterNewsletterStoryblok {
  heading?: string;
  email?: FormInputStoryblok[];
  subscribe_button?: ButtonStoryblok[];
  _uid: string;
  component: "footer_newsletter";
  [k: string]: any;
}

export interface FooterResourceNavsStoryblok {
  heading?: string;
  nav_items?: NavItemStoryblok[];
  _uid: string;
  component: "footer_resource_navs";
  [k: string]: any;
}

export interface FooterSocialNavsStoryblok {
  heading?: string;
  nav_items?: NavItemStoryblok[];
  _uid: string;
  component: "footer_social_navs";
  [k: string]: any;
}

export interface FormInputStoryblok {
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  helper_text?: string;
  input_type?: "" | "text" | "email" | "textarea" | "tel" | "radio" | "hidden";
  _uid: string;
  component: "form-input";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface HeroStoryblok {
  title?: string;
  background: AssetStoryblok;
  buttons: ButtonStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface HomePageStoryblok {
  body?: any[];
  _uid: string;
  component: "home_page";
  [k: string]: any;
}

export interface NavItemStoryblok {
  link: MultilinkStoryblok;
  title?: string;
  _uid: string;
  component: "nav_item";
  [k: string]: any;
}

export interface SiteConfigStoryblok {
  header_nav?: NavItemStoryblok[];
  header_logo: SiteLogoStoryblok[];
  header_buttons?: ButtonStoryblok[];
  footer_column_1?: FooterCompnayInfoStoryblok[];
  footer_column_2?: FooterSocialNavsStoryblok[];
  footer_column_3?: FooterResourceNavsStoryblok[];
  fotter_column_4?: FooterNewsletterStoryblok[];
  _uid: string;
  component: "site_config";
  [k: string]: any;
}

export interface SiteLogoStoryblok {
  link?: MultilinkStoryblok;
  logo?: AssetStoryblok;
  title?: string;
  _uid: string;
  component: "site_logo";
  [k: string]: any;
}
