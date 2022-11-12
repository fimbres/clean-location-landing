import React from "react";
import Mapa from '../images/mapa.png'
import Calificacion from '../images/calificacion.png'

function Features() {
  return (
    <div className="w-full bg-stone-900 py-24">
      <div className="mx-auto  flex-row-reverse grid-rows-1 max-w-xl">
        <div className="flex pb-16 justify-between items-center">
          <div className="w-60 h-60 bg-green-400 rounded-full flex justify-center items-center">
            <img className="w-36" src={Calificacion}/>
          </div>
          <h1 className="pr-18 w-56 text-center text-white">
            Compare environmental information from various locations.
          </h1>
        </div>
        <div className=" flex pb-16 justify-between items-center">
          <h1 className="pl-18 w-56 text-center text-white">
            Get a tourist site recommendation using AI.
          </h1>
          <div className="w-60 h-60  bg-green-400 rounded-full flex justify-center items-center">
            <img className="w-36" src={Mapa}/>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <div className="w-60 h-60 bg-green-400 rounded-full flex justify-center items-center">
            <img className="w-36" src={Calificacion}/>
          </div>
          <h1 className="pr-18 w-56 text-center text-white">
            See the most important locations around the world and their
            pollution status.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Features;
