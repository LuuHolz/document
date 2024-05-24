import { Documento, Titular } from "../models/constants.type";
import AdoptoParaMi from "../assets/dueno-de-una-mascota (1).png";
import AdoptoParaOtro from "../assets/dueno-de-una-mascota.png";

export const documentos: Documento[] = [
  {
    text: "DNI",
    key: "DNI",
    valor: 1,
  },
  {
    text: "NIE",
    key: "NIE",
    valor: 2,
  },
  {
    text: "Pasaporte",
    key: "Pasaporte",
    valor: 5,
  },
];

export const titulares: Titular[]= [
    {
        imagen: AdoptoParaMi,
        text: "Adopto para mi",
        key: "Adopto para mi",
        valor: "Duenio principal"
    },
    {
        imagen: AdoptoParaOtro,
        text: "Adopto para otro",
        key: "Adopto para otro",
        valor: "Duenio secundario"
    }
];


