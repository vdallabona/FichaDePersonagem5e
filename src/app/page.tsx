import Link from "next/link";
import { useParams } from 'next/navigation'

export default function rotas(){

    return(
        <div>
            <div className="top-0 left-0 text-center w-60 h-4">
                <h1 className="text-black bg-red-400">ficha de personagem</h1>
            </div>
            <div className="container mx-auto my-3 text-center bg-slate-300">
                <div className="bg-white inline-block
                 border-2 mx-1 border-red-700 my-1 border-box
                 ">
                    <h1>Força:</h1>
                    <input className="py-2 text-center"></input>
                </div>
                <div className="bg-white inline-block
                 border-2 mx-1 border-red-700 my-1 border-box
                 ">
                    <h1>Destreza:</h1>
                    <input className="py-2 text-center"></input>
                </div>
                <div className="bg-white inline-block
                 border-2 mx-1 border-red-700 my-1 border-box
                 ">
                    <h1>Constituição:</h1>
                    <input className="py-2 text-center"></input>
                </div>
                <div className="bg-white inline-block
                 border-2 mx-1 border-red-700 my-1 border-box
                 ">
                    <h1>Sabedoria:</h1>
                    <input className="py-2 text-center"></input>
                </div>
                <div className="bg-white inline-block
                 border-2 mx-1 border-red-700 my-1 border-box
                 ">
                    <h1>Inteligência:</h1>
                    <input className="py-2 text-center"></input>
                </div>
                <div className="bg-white inline-block
                 border-2 mx-1 border-red-700 my-1 border-box
                 ">
                    <h1>Carisma:</h1>
                    <input className="py-2 text-center"></input>
                </div>
            </div>
            <div className="container mx-auto w-60 bg-slate-300 my-4 inline-block">
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
                <div className="bg-white px-1 relative
                    border-2 border-red-700 my-1 border-box">
                    <h1 className="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" className="mx-2 z-10 w-5"></input>
                    <input type="checkbox" className="z-20 top-1 left-24 absolute"></input>
                    <h1 className="inline-block mx-1">+8</h1>
                </div>
            </div>
            <div className="container mx-auto text-center bg-slate-300 inline-block w-56">
                <div className="border-2 mx-1 border-red-700 w-20 inline-block bg-white">
                    <h1>CA:</h1>
                    <h1 className="text-center">14</h1>
                </div>
                <div className="border-2 mx-1 border-red-700 w-32 inline-block bg-white">
                    <h1>Max HP: 30</h1>
                    <input className="w-20 text-center"/>
                </div>
            </div>
        </div>
    )
}