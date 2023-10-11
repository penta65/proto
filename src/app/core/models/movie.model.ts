export interface Movie {
  id: string;
  title: string;
  description: string;
  duration: string;
  releaseDate: string;
  images?: ImageData[] | null;
}

 interface ImageData {
  url: string;
  type: string;
}