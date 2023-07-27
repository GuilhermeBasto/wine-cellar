export interface WineModel {
  id: string;
  name: string;
  year: number;
  location: string;
  numberOfBottles: number;
  imagePath: string; //TODO: this should be an url. Currently is the path from assets folder
  description: string;
  favorite: boolean;
}

export const emptyWineModel: WineModel = {
  id: '',
  name: '',
  year: 0,
  location: '',
  numberOfBottles: 0,
  imagePath: '',
  description: '',
  favorite: false,
};
