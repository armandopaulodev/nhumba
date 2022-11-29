
import React from "react";


export class RealState {
    
    ip = '192.168.133.187';

    url ='http://'+this.ip+':8000/api/realstate/all';
    url_store = 'http://'+this.ip+':8000/api/realstate/store';
    url_realtor ='http://'+this.ip+':8000/api/realtor/all';


   // 192.168.133.187 troque esse endereco pelo endereco da sua rede. o celular e pc devem estar na mesma rede
}