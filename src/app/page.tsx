import Link from "next/link";
import { useParams } from 'next/navigation'

export default function rotas(){
    let numero = 0

    return(
        <div>
            <div class="container bg-black my-4 text-center">
                <div class="bg-white
                 border-2 border-red-400
                 ">
                    <h1>Força:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white
                 border-2 border-red-400 my-1
                 ">
                    <h1>Destreza:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white
                 border-2 border-red-400 my-1
                 ">
                    <h1>Constituição:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white
                 border-2 border-red-400 my-1
                 ">
                    <h1>Sabedoria:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white
                 border-2 border-red-400 my-1
                 ">
                    <h1>Inteligência:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white
                 border-2 border-red-400 my-1
                 ">
                    <h1>Carisma:</h1>
                    <input class="py-2 text-center"></input>
                </div>
            </div>
        </div>
    )
}