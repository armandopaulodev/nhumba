import React from "react";



export default function LocalDataBase(){


    const imoveis = [{
        'id': 1,
        'uri': "https://www.holidify.com/images/cmsuploads/compressed/1024px-Parramatta-NSW-GovernmentHouse_20190618193446.jpg",
         'imgs' : [
                    'https://www.holidify.com/images/cmsuploads/compressed/1024px-Pointe_aux_Caves_Lighthouse_Panorama_(6700683733)_20180611131223.jpg',
                    'https://www.holidify.com/images/cmsuploads/compressed/1024px-PoeHouse-Baltimore_20190729140053.jpg',
                    'https://www.holidify.com/images/cmsuploads/compressed/1024px-Raffles27_House_20190729154534.jpg'
                ],
        'capital': 'Beira',
        'province':  "Sofala",
        'description': "Alguma descricao da cidade nessa area sera da autoria do poster"
      },
      {
        'id': 2,
        'uri': "https://www.holidify.com/images/cmsuploads/compressed/1024px-Opera_house_in_Muscat_20190729151432.jpg",
        'imgs' : [
            
            'https://www.holidify.com/images/cmsuploads/compressed/1024px-NationalGlyptothequeOfGreece_20190729140019.jpg',
            'https://www.holidify.com/images/cmsuploads/compressed/-26975_10253_20170814163325.jpg',
            'https://www.holidify.com/images/cmsuploads/compressed/1024px-Nataraja01_20190618214610.jpg'
        ],
        'capital': 'Maputo',
        'province':  "Maputo",
        'description': "Alguma descricao da cidade nessa area sera da autoria do poster"
      },
      {
        'id': 3,
        'uri': "https://www.holidify.com/images/cmsuploads/compressed/1024px-Natarajartemple1_20190618213054.jpg",
        'imgs' : [
            "https://www.holidify.com/images/cmsuploads/compressed/1024px-OIC_medindie_gardens_house_20190618194107.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/1024px-Natarajartemple1_20190618213054.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/1024px-OIC_perth_cbd_bishops_house_20190618194703.jpg",
        ],
        'capital': 'Nampula',
        'province':  "Nampula",
        'description': "Alguma descricao da cidade nessa area sera da autoria do poster"
      }];









    return imoveis ;
}