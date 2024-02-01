import Link from "next/link";
import { useParams } from 'next/navigation'

export default function rotas(){
    let numero = 0

    return(
        <div>
            <div class="top-0 left-0 text-center w-60 h-4">
                <h1 class="text-black bg-red-400">ficha de personagem</h1>
            </div>
            <div class="container mx-auto bg-black my-3 mx-1 text-center">
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Força:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Destreza:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Constituição:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Sabedoria:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Inteligência:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Carisma:</h1>
                    <input class="py-2 text-center"></input>
                </div>
            </div>
            <div class="container mx-auto bg-black my-4 mx-1">
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1 relative
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block my-1">Habilidade:</h1>
                    <input type="checkbox" class="mx-2 z-10 w-5"></input>
                    <input type="checkbox" class="z-20 top-1 left-24 absolute"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
            </div>
        </div>
    )
}