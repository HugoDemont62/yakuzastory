import React from 'react';
import {PuffLoader} from 'react-spinners';
import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <PuffLoader color={'#BC002D'} loading={true} size={150}/>
      Yakuza Story
    </div>
  );
}