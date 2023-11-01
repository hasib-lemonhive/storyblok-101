import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: unknown;
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
          [k: string]: unknown;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: unknown;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: unknown[];
        default_full_slug?: null | string;
        translated_slugs?: null | unknown[];
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: unknown;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: unknown;
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
  [k: string]: unknown;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: unknown;
  text?: string;
  [k: string]: unknown;
}

export interface FooterCompnayInfoStoryblok {
  logo?: SiteLogoStoryblok[];
  powered_by?: string;
  address: RichtextStoryblok;
  _uid: string;
  component: "footer_compnay_info";
  [k: string]: unknown;
}

export interface FooterNewsletterStoryblok {
  heading?: string;
  email?: FormInputStoryblok[];
  subscribe_button?: ButtonStoryblok[];
  _uid: string;
  component: "footer_newsletter";
  [k: string]: unknown;
}

export interface FooterResourceNavsStoryblok {
  heading?: string;
  nav_items?: NavItemStoryblok[];
  _uid: string;
  component: "footer_resource_navs";
  [k: string]: unknown;
}

export interface FooterSocialNavsStoryblok {
  heading?: string;
  nav_items?: NavItemStoryblok[];
  _uid: string;
  component: "footer_social_navs";
  [k: string]: unknown;
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
  [k: string]: unknown;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: unknown;
}

export interface HeroStoryblok {
  title?: string;
  background: AssetStoryblok;
  buttons: ButtonStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: unknown;
}

export interface HomePageStoryblok {
  body?: unknown[];
  _uid: string;
  component: "home_page";
  [k: string]: unknown;
}

export interface NavItemStoryblok {
  link: MultilinkStoryblok;
  title?: string;
  _uid: string;
  component: "nav_item";
  [k: string]: unknown;
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
  [k: string]: unknown;
}

export interface SiteLogoStoryblok {
  link?: MultilinkStoryblok;
  logo?: AssetStoryblok;
  title?: string;
  _uid: string;
  component: "site_logo";
  [k: string]: unknown;
}
