import React from "react";



export default function LocalDataBase(){


    const imoveis = [
      {
        'id': 1,
        'uri': "https://www.holidify.com/images/cmsuploads/compressed/1024px-Parramatta-NSW-GovernmentHouse_20190618193446.jpg",
         'imgs' : [
                    'https://www.holidify.com/images/cmsuploads/compressed/1024px-Pointe_aux_Caves_Lighthouse_Panorama_(6700683733)_20180611131223.jpg',
                    'https://www.holidify.com/images/cmsuploads/compressed/1024px-PoeHouse-Baltimore_20190729140053.jpg',
                    'https://www.holidify.com/images/cmsuploads/compressed/1024px-Raffles27_House_20190729154534.jpg'
                ],
                'corrector' : 
                {
                    'nome': 'Gomes ferreira',
                    'telefone': +2588460096069,
                    'email': 'corrector1@mail.com',
                }
              ,
              'adress': '24 de Julho',
              'wood': 'Esturro',
              'city': 'Beira',
              'type' : 'Flat/Moderno',
              'condition': 'Precisando de pitura apenas e alguns retoques interior',
              'rooms': 5,
              'badrooms': 4,
              'utility': 'Venda',
              'price': 200000,
              'currence': 'Mzn',
              'rate': 4,
        'province':  "Sofala",
        'description': "Bem proximo a cidade, menos deslocamento para si"
      },
      {
        'id': 2,
        'uri': "https://www.holidify.com/images/cmsuploads/compressed/1024px-Opera_house_in_Muscat_20190729151432.jpg",
        'imgs' : [
            
            'https://www.holidify.com/images/cmsuploads/compressed/1024px-NationalGlyptothequeOfGreece_20190729140019.jpg',
            'https://www.holidify.com/images/cmsuploads/compressed/-26975_10253_20170814163325.jpg',
            'https://www.holidify.com/images/cmsuploads/compressed/1024px-Nataraja01_20190618214610.jpg'
        ],
        'corrector' : 
        {
            'nome': 'Gloria Fasutino Guro',
            'telefone': +2588499886069,
            'email': 'corrector2@mail.com',
        }
      ,
      'adress': 'Xipamanine, rua rovuma',
      'wood': 'Baixa',
      'city': 'Maputo',
      'type' : 'Duplex full',
      'condition': 'Nova, cerem construida',
      'rooms': 6,
      'badrooms': 3,
      'utility': 'Aluger',
      'price': 30000,
      'currence': 'Mzn',
      'rate': 4,
        'province':  "Maputo",
        'description': "Supper confortavel e comodo"
      },
      {
        'id': 3,
        'uri': "https://www.holidify.com/images/cmsuploads/compressed/1024px-Natarajartemple1_20190618213054.jpg",
        'imgs' : [
            "https://www.holidify.com/images/cmsuploads/compressed/1024px-OIC_medindie_gardens_house_20190618194107.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/1024px-Natarajartemple1_20190618213054.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/1024px-OIC_perth_cbd_bishops_house_20190618194703.jpg",
        ],
        'corrector' : 
          {
              'nome': 'Armani Filipe',
              'telefone': +258846176069,
              'email': 'correcto@mail.com',
          }
        ,
        'adress': 'Namicopo rua 5',
        'wood': 'Namicopo',
        'city': 'Nampula',
        'type' : '3',
        'condition': 'Nova',
        'rooms': 4,
        'badrooms': 2,
        'utility': 'Venda',
        'price': 4000000,
        'rate': 4,
        'currence': 'Mzn',
        'province':  "Nampula",
        'description': "Enfrente ao mar, um vista incomparavel e favoravel a trabalhadores (home office)"
      }];






    return imoveis ;
}