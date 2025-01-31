export interface IAllData {
  about: IData;
  events: IDataLong[];
  gallery: IDataUrl[];
  partners: IDataUrl[];
  socialmedias: IDataUrl[];
  contacts: IDataUrl[];
}

export interface IData {
  id: number;
  name: string;
  description: string;
  logo: string;
}

export interface IDataLong {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  logo: string;
}

export interface IDataUrl {
  id: number;
  name: string;
  description: string;
  logo: string;
  url: string
}

export class Data {
  constructor(json: IData) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logo = json.logo;
  }

  id: number;
  name: string;
  description: string;
  logo: string;
}

export class DataLong {
  constructor(json: IDataLong) {
    this.id = json.id;
    this.name = json.name;
    this.shortDescription = json.short_description;
    this.longDescription = json.long_description;
    this.logo = json.logo;
  }

  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
}

export class DataUrl {
  constructor(json: IDataUrl) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logo = json.logo;
    this.url = json.url;
  }

  id: number;
  name: string;
  description: string;
  logo: string;
  url: string;
}

export class AllDataModel {
  constructor(json: IAllData) {
    this.about = new Data(json.about);
    this.events = json.events.map(event => new DataLong(event));
    this.gallery = json.gallery.map(album => new DataUrl(album));
    this.partners = json.partners.map(partner => new DataUrl(partner));
    this.socialmedias = json.socialmedias.map(social => new DataUrl(social));
    this.contacts = json.contacts.map(contact => new DataUrl(contact));
  }

  about: Data;
  events: DataLong[];
  gallery: DataUrl[];
  partners: DataUrl[];
  socialmedias: DataUrl[];
  contacts: DataUrl[];
}