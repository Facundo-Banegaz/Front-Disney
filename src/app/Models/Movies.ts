export interface Genero {
  id: string;
  nombre: string;
  imagen: string;
}
export interface Movie{
  id: string,
  titulo: string,
  imagen: string,
  fechaCreacion:string,
  genero: Genero,
  calification: number,
  characters: any;
}

export const movies: Movie[]=[
  {
    "id": "fae8c16d-4310-4571-8ed3-08dcd7413845",
    "titulo": "Los Increíbles",
    "imagen": "https://www.xtrafondos.com/wallpapers/personajes-de-los-increibles-4271.jpg",
    "fechaCreacion": "2004-11-05T00:00:00",
    "genero": {
      "id": "7a969940-9d77-4486-0e59-08dcd73f7bbf",
      "nombre": "Accion",
      "imagen": "https://tse3.mm.bing.net/th?id=OIP.jrK_CKl0QRHtLFsR7wiiPgHaEK&pid=Api&P=0&h=180"
    },
    "calification": 5,
    "characters": null
  }
]
