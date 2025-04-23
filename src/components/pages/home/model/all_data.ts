import defaultJson from '@/components/pages/home/default/default_data.json';

export interface IAllData {
  about: IAbout;
  events: IEvent[];
  gallery: IPhotoAlbum[];
  partners: IDataUrl[];
  socialmedias: IDataUrl[];
  contacts: IDataUrl[];
}

export interface IImage {
  id: number;
  url: string;
  position: 'top' | 'center' | 'left' | 'right' | undefined;
}

export interface IAbout {
  id: number;
  name: string;
  description: string;
}

export interface IEvent {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: IImage;
  img: IImage;
}

export interface IPhotoAlbum {
  id: number;
  name: string;
  description: string;
  logo: IImage;
  background: IImage;
  url: string;
}

export interface IDataUrl {
  id: number;
  name: string;
  description: string;
  logo: IImage;
  url: string;
}

export class ImageModel {
  constructor(json: IImage) {
    this.id = json.id;
    this.url = json.url;
    this.position = json.position ?? undefined;
  }

  id: number;
  url: string;
  position: 'top' | 'center' | 'left' | 'right' | undefined;
}

export class DataModel {
  constructor(json: IDataUrl) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logo = new ImageModel(json.logo);
    this.url = json.url;
  }

  id: number;
  name: string;
  description: string;
  logo: ImageModel;
  url: string;
}

export class EventModel {
  constructor(json: IEvent) {
    this.id = json.id;
    this.name = json.name;
    this.shortDescription = json.shortDescription;
    this.longDescription = json.longDescription;
    this.logo = new ImageModel(json.logo);
    this.img = new ImageModel(json.img);
  }

  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: ImageModel;
  img: ImageModel;
}

export class AboutModel {
  constructor(json: IAbout) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
  }

  id: number;
  name: string;
  description: string;
}

export class PhotoAlbumModel {
  constructor(json: IPhotoAlbum) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logo = new ImageModel(json.logo);
    this.url = json.url;
    this.background = new ImageModel(json.background);
  }

  id: number;
  name: string;
  description: string;
  logo: ImageModel;
  url: string;
  background: IImage;
}

export class AllDataModel {
  constructor(json: IAllData) {
    this.about = new AboutModel(json.about);
    this.events = json.events.map(event => new EventModel(event));
    this.gallery = json.gallery.map(album => new PhotoAlbumModel(album));
    this.partners = json.partners.map(partner => new DataModel(partner));
    this.socialmedias = json.socialmedias.map(social => new DataModel(social));
    this.contacts = json.contacts.map(contact => new DataModel(contact));

    // const jsonByDefault = defaultJson as IAllData;

    // this.about = new AboutModel(json.about ?? jsonByDefault.about);

    // this.events = json.events.length > 0
    //   ? json.events.map(event => new EventModel(event))
    //   : jsonByDefault.events.map(event => new EventModel(event));

    // this.gallery = json.gallery.length > 0
    //   ? json.gallery.map(album => new PhotoAlbumModel(album))
    //   : jsonByDefault.gallery.map(album => new PhotoAlbumModel(album));

    // this.partners = json.partners.length > 0
    //   ? json.partners.map(partner => new DataModel(partner))
    //   : jsonByDefault.partners.map(partner => new DataModel(partner));

    // this.socialmedias = json.socialmedias.length > 0
    //   ? json.socialmedias.map(social => new DataModel(social))
    //   : jsonByDefault.socialmedias.map(social => new DataModel(social));

    // this.contacts = json.contacts.length > 0
    //   ? json.contacts.map(contact => new DataModel(contact))
    //   : jsonByDefault.contacts.map(contact => new DataModel(contact));
  }

  public static default = (): AllDataModel => new AllDataModel(defaultJson as IAllData);

  about: AboutModel;
  events: EventModel[];
  gallery: PhotoAlbumModel[];
  partners: DataModel[];
  socialmedias: DataModel[];
  contacts: DataModel[];
}