import fridgeLinkData from "../mockData/fridgeLinkData";
import axios from 'axios';
import React, {useEffect,useState} from 'react';

export const HeaderTemplate = ({ headerData }) => {
    return (
      <div className="choise_header">
        Существующие холодильники не подходят?
      </div>
    );
};

export const DescrTemplate = ({ descrData }) => {
    return (
      <div className="choise_descr">
         Давайте создадим новый!
      </div>
    );
};


export const FridgeLink = () => {
    const {headerData, descrData, btnData} = fridgeLinkData;
    return (
        <>
            <HeaderTemplate headerData={headerData} />
            <DescrTemplate descrData={descrData} />
            <div className="buttons">
              <button className="person_buttons_prm"> Создать холодильник </button>
              <button className="person_buttons"> Сохранить </button>
            </div>
        </>
    )
}