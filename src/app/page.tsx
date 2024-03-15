'use client'

import Link from "next/link";
import { useParams } from 'next/navigation'
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function rotas(){

    const [forc, setFor] = useState(10)
    const [dex, setDex] = useState(10)
    const [con, setCon] = useState(10)
    const [sab, setSab] = useState(10)
    const [int, setInt] = useState(10)
    const [car, setCar] = useState(10)

    const [proefNumber, setProefNumber] = useState(2)
    let proef = proefNumber * 1

    //formula para calcular modificadores de atributo do DnD
    let forcNumb = Math.floor((forc - 10) / 2)
    let dexNumb = Math.floor((dex - 10) / 2)
    let conNumb = Math.floor((con - 10) / 2)
    let sabNumb = Math.floor((sab - 10) / 2)
    let intNumb = Math.floor((int - 10) / 2)
    let carNumb = Math.floor((car - 10) / 2)



    let ArmaduraNumber = 90
    const [tipoArmadura, setArmadura] = useState('sArmadura')
    

    switch (tipoArmadura) {

        case 'couro':
            ArmaduraNumber = 11 + dexNumb
            break;

        case 'couroBatido':
            ArmaduraNumber = 12 + dexNumb
            break;

        case 'placas':
            if(dexNumb > 2){
                ArmaduraNumber = 16 + 2
            }else{
                ArmaduraNumber = 16 + dexNumb
            }
            break;

        case 'completa':
            ArmaduraNumber = 18
            break;

        case 'sArmadura':
            ArmaduraNumber = 10 + dexNumb
            break;
      }

        const [escudo, setEscudo] = useState(false);
        const handleEscudo = (event:any) => {
            setEscudo(event.target.checked)
        }

        if(escudo){
            ArmaduraNumber = ArmaduraNumber + 2
        }


    const [habProef, setHabProef] = useState(false);
    const [habExper, setHabExper] = useState(false);
    const handleProef = (event:any) => {
       setHabProef(event.target.checked)
    }
    const handleExper = (event:any) => {
        setHabExper(event.target.checked)
     }
     let acrobaciaHabilidade = dexNumb
     if(habExper == true && habProef == true){
        acrobaciaHabilidade = proef * 2 + dexNumb
     }else if(habProef){
        acrobaciaHabilidade = dexNumb + proef
     }else{
        acrobaciaHabilidade = dexNumb
     }


    const [habProefPres, setHabProefPres] = useState(false);
    const [habExperPres, setHabExperPres] = useState(false);
    const handleProefPres = (event:any) => {
    setHabProefPres(event.target.checked)
    }
    const handleExperPres = (event:any) => {
        setHabExperPres(event.target.checked)
    }
    let presdigitacaoHabilidade = dexNumb
    if(habExperPres == true && habProefPres == true){
    presdigitacaoHabilidade = proef * 2 + dexNumb
    }else if(habProefPres){
    presdigitacaoHabilidade = dexNumb + proef
    }else{
    presdigitacaoHabilidade = dexNumb
    }


    const [habProefFurt, setHabProefFurt] = useState(false);
    const [habExperFurt, setHabExperFurt] = useState(false);
    const handleProefFurt = (event:any) => {
        setHabProefFurt(event.target.checked)
    }
    const handleExperFurt = (event:any) => {
        setHabExperFurt(event.target.checked)
    }
    let furtHabilidade = dexNumb
    if(habExperFurt == true && habProefFurt == true){
        furtHabilidade = proef * 2 + dexNumb
    }else if(habProefFurt){
        furtHabilidade = dexNumb + proef
    }else{
        furtHabilidade = dexNumb
    }

    const [habProefAds, setHabProefAds] = useState(false);
    const [habExperAds, setHabExperAds] = useState(false);
    const handleProefAds = (event:any) => {
        setHabProefAds(event.target.checked)
    }
    const handleExperAds = (event:any) => {
        setHabExperAds(event.target.checked)
    }
    let adsHabilidade = sabNumb
    if(habExperAds == true && habProefAds == true){
        adsHabilidade = proef * 2 + sabNumb
    }else if(habProefAds){
        adsHabilidade = sabNumb + proef
    }else{
        adsHabilidade = sabNumb
    }

    const [habProefIntu, setHabProefIntu] = useState(false);
    const [habExperIntu, setHabExperIntu] = useState(false);
    const handleProefIntu = (event:any) => {
        setHabProefIntu(event.target.checked)
    }
    const handleExperIntu = (event:any) => {
        setHabExperIntu(event.target.checked)
        }
        let intuHabilidade = sabNumb
        if(habExperIntu == true && habProefIntu == true){
        intuHabilidade = proef * 2 + sabNumb
        }else if(habProefIntu){
        intuHabilidade = sabNumb + proef
        }else{
        intuHabilidade = sabNumb
        }

    const [habProefMeds, setHabProefMeds] = useState(false);
    const [habExperMeds, setHabExperMeds] = useState(false);
    const handleProefMeds = (event:any) => {
        setHabProefMeds(event.target.checked)
    }
    const handleExperMeds = (event:any) => {
        setHabExperMeds(event.target.checked)
        }
        let medsHabilidade = sabNumb
        if(habExperMeds == true && habProefMeds == true){
        medsHabilidade = proef * 2 + sabNumb
        }else if(habProefMeds){
        medsHabilidade = sabNumb + proef
        }else{
        medsHabilidade = sabNumb
        }

    const [habProefPerc, setHabProefPerc] = useState(false);
    const [habExperPerc, setHabExperPerc] = useState(false);
    const handleProefPerc = (event:any) => {
        setHabProefPerc(event.target.checked)
    }
    const handleExperPerc = (event:any) => {
        setHabExperPerc(event.target.checked)
        }
        let percHabilidade = sabNumb
        if(habExperPerc == true && habProefPerc == true){
        percHabilidade = proef * 2 + sabNumb
        }else if(habProefPerc){
        percHabilidade = sabNumb + proef
        }else{
        percHabilidade = sabNumb
        }

    const [habProefSobr, setHabProefSobr] = useState(false);
    const [habExperSobr, setHabExperSobr] = useState(false);
    const handleProefSobr = (event:any) => {
        setHabProefSobr(event.target.checked)
    }
    const handleExperSobr = (event:any) => {
        setHabExperSobr(event.target.checked)
        }
        let sobrHabilidade = sabNumb
        if(habExperSobr == true && habProefSobr == true){
        sobrHabilidade = proef * 2 + sabNumb
        }else if(habProefSobr){
        sobrHabilidade = sabNumb + proef
        }else{
        sobrHabilidade = sabNumb
        }

    const [habProefArc, setHabProefArc] = useState(false);
    const [habExperArc, setHabExperArc] = useState(false);
    const handleProefArc = (event:any) => {
        setHabProefArc(event.target.checked)
    }
    const handleExperArc = (event:any) => {
        setHabExperArc(event.target.checked)
        }
        let arcHabilidade = intNumb
        if(habExperArc == true && habProefArc == true){
        arcHabilidade = proef * 2 + intNumb
        }else if(habProefArc){
        arcHabilidade = intNumb + proef
        }else{
        arcHabilidade = intNumb
        }

    const [habProefHist, setHabProefHist] = useState(false);
    const [habExperHist, setHabExperHist] = useState(false);
    const handleProefHist = (event:any) => {
        setHabProefHist(event.target.checked)
    }
    const handleExperHist = (event:any) => {
        setHabExperHist(event.target.checked)
        }
        let histHabilidade = intNumb
        if(habExperHist == true && habProefHist == true){
        histHabilidade = proef * 2 + intNumb
        }else if(habProefHist){
        histHabilidade = intNumb + proef
        }else{
        histHabilidade = intNumb
        }

    const [habProefInv, setHabProefInv] = useState(false);
    const [habExperInv, setHabExperInv] = useState(false);
    const handleProefInv = (event:any) => {
        setHabProefInv(event.target.checked)
    }
    const handleExperInv = (event:any) => {
        setHabExperInv(event.target.checked)
        }
        let invHabilidade = intNumb
        if(habExperInv == true && habProefInv == true){
        invHabilidade = proef * 2 + intNumb
        }else if(habProefInv){
        invHabilidade = intNumb + proef
        }else{
        invHabilidade = intNumb
        }

    const [habProefNat, setHabProefNat] = useState(false);
    const [habExperNat, setHabExperNat] = useState(false);
    const handleProefNat = (event:any) => {
        setHabProefNat(event.target.checked)
    }
    const handleExperNat = (event:any) => {
        setHabExperNat(event.target.checked)
    }
    let natHabilidade = intNumb
    if(habExperNat == true && habProefNat == true){
        natHabilidade = proef * 2 + intNumb
    }else if(habProefNat){
        natHabilidade = intNumb + proef
    }else{
        natHabilidade = intNumb
    }

    const [habProefRel, setHabProefRel] = useState(false);
    const [habExperRel, setHabExperRel] = useState(false);
    const handleProefRel = (event:any) => {
        setHabProefRel(event.target.checked)
    }
    const handleExperRel = (event:any) => {
        setHabExperRel(event.target.checked)
    }
    let relHabilidade = intNumb
    if(habExperRel == true && habProefRel == true){
        relHabilidade = proef * 2 + intNumb
    }else if(habProefRel){
        relHabilidade = intNumb + proef
    }else{
        relHabilidade = intNumb
    }

    const [habProefAtl, setHabProefAtl] = useState(false);
    const [habExperAtl, setHabExperAtl] = useState(false);
    const handleProefAtl = (event:any) => {
        setHabProefAtl(event.target.checked)
    }
    const handleExperAtl = (event:any) => {
        setHabExperAtl(event.target.checked)
    }
    let atlHabilidade = forcNumb
    if(habExperAtl == true && habProefAtl == true){
        atlHabilidade = proef * 2 + forcNumb
    }else if(habProefAtl){
        atlHabilidade = forcNumb + proef
    }else{
        atlHabilidade = forcNumb
    }

    const [habProefEnga, setHabProefEnga] = useState(false);
    const [habExperEnga, setHabExperEnga] = useState(false);
    const handleProefEnga = (event:any) => {
        setHabProefEnga(event.target.checked)
    }
    const handleExperEnga = (event:any) => {
        setHabExperEnga(event.target.checked)
    }
    let engaHabilidade = carNumb
    if(habExperEnga == true && habProefEnga == true){
        engaHabilidade = proef * 2 + carNumb
    }else if(habProefEnga){
        engaHabilidade = carNumb + proef
    }else{
        engaHabilidade = carNumb
    }

    const [habProefInti, setHabProefInti] = useState(false);
    const [habExperInti, setHabExperInti] = useState(false);
    const handleProefInti = (event:any) => {
        setHabProefInti(event.target.checked)
    }
    const handleExperInti = (event:any) => {
        setHabExperInti(event.target.checked)
    }
    let intiHabilidade = carNumb
    if(habExperInti == true && habProefInti == true){
        intiHabilidade = proef * 2 + carNumb
    }else if(habProefInti){
        intiHabilidade = carNumb + proef
    }else{
        intiHabilidade = carNumb
    }

    const [habProefPerf, setHabProefPerf] = useState(false);
    const [habExperPerf, setHabExperPerf] = useState(false);
    const handleProefPerf = (event:any) => {
        setHabProefPerf(event.target.checked)
    }
    const handleExperPerf = (event:any) => {
        setHabExperPerf(event.target.checked)
    }
    let perfHabilidade = carNumb
    if(habExperPerf == true && habProefPerf == true){
        perfHabilidade = proef * 2 + carNumb
    }else if(habProefPerf){
        perfHabilidade = carNumb + proef
    }else{
        perfHabilidade = carNumb
    }

    const [habProefPers, setHabProefPers] = useState(false);
    const [habExperPers, setHabExperPers] = useState(false);
    const handleProefPers = (event:any) => {
        setHabProefPers(event.target.checked)
    }
    const handleExperPers = (event:any) => {
        setHabExperPers(event.target.checked)
    }
    let persHabilidade = carNumb
    if(habExperPers == true && habProefPers == true){
        persHabilidade = proef * 2 + carNumb
    }else if(habProefPers){
        persHabilidade = carNumb + proef
    }else{
        persHabilidade = carNumb
    }

    const [saveProefForc, setsaveProefForc] = useState(false);
    const handlesaveForc = (event:any) => {
        setsaveProefForc(event.target.checked)
    }
    let forcSave = forcNumb
    if(saveProefForc){
        forcSave = forcNumb + proef
    }else{
        forcSave = forcNumb
    }

    const [saveProefDex, setsaveProefDex] = useState(false);
    const handlesaveDex = (event:any) => {
        setsaveProefDex(event.target.checked)
    }
    let dexSave = dexNumb
    if(saveProefDex){
        dexSave = dexNumb + proef
    }else{
        dexSave = dexNumb
    }

    const [saveProefCon, setsaveProefCon] = useState(false);
    const handlesaveCon = (event:any) => {
        setsaveProefCon(event.target.checked)
    }
    let conSave = conNumb
    if(saveProefCon){
        conSave = conNumb + proef
    }else{
        conSave = conNumb
    }

    const [saveProefSab, setsaveProefSab] = useState(false);
    const handlesaveSab = (event:any) => {
        setsaveProefSab(event.target.checked)
    }
    let sabSave = sabNumb
    if(saveProefSab){
        sabSave = sabNumb + proef
    }else{
        sabSave = sabNumb
    }

    const [saveProefInt, setsaveProefInt] = useState(false);
    const handlesaveInt = (event:any) => {
        setsaveProefInt(event.target.checked)
    }
    let intSave = intNumb
    if(saveProefInt){
        intSave = intNumb + proef
    }else{
        intSave = intNumb
    }

    const [saveProefCar, setsaveProefCar] = useState(false);
    const handlesaveCar = (event:any) => {
        setsaveProefCar(event.target.checked)
    }
    let carSave = carNumb
    if(saveProefCar){
        carSave = carNumb + proef
    }else{
        carSave = carNumb
    }

    return(
        <div className="bg-gradient-radial from-red-300 to-red-900 bg-fixed">
            <div className="top-0 left-0 text-center w-60 h-4">
                <h1 className="text-black bg-lago">ficha de personagem</h1>
            </div>
            <div className="container mx-auto my-3 text-center md:my-10">
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Força:</h1>
                    <input className="atributoInput" name="atributoFor" placeholder="10"
                    required type="number" value={forc}
                    onChange={(e) => setFor(e.target.valueAsNumber)}/>
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Destreza:</h1>
                    <input className="atributoInput" name="atributoDex" placeholder="10"
                    required type="number" value={dex}
                    onChange={(e) => setDex(e.target.valueAsNumber)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Constituição:</h1>
                    <input className="atributoInput" name="atributoCon" placeholder="10"
                    required type="number" value={con}
                    onChange={(e) => setCon(e.target.valueAsNumber)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Sabedoria:</h1>
                    <input className="atributoInput" name="atributoSab" placeholder="10"
                    required type="number" value={sab}
                    onChange={(e) => setSab(e.target.valueAsNumber)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Inteligência:</h1>
                    <input className="atributoInput" name="atributoInt" placeholder="10"
                    required type="number" value={int}
                    onChange={(e) => setInt(e.target.valueAsNumber)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Carisma:</h1>
                    <input className="atributoInput" name="atributoCar" placeholder="10"
                    required type="number" value={car}
                    onChange={(e) => setCar(e.target.valueAsNumber)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap mx-auto w-fit md:my-20">
                <div className="w-56 mx-auto">
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Acrobacia:</h1>
                        <div className="inline-block float-right my-1">
                                <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefAcro"
                            onChange={handleExper}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpAcro"
                            onChange={handleProef}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {acrobaciaHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Adestrar animais:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefAds"
                            onChange={handleExperAds}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpAds"
                            onChange={handleProefAds}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {adsHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Arcanismo:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefArc"
                            onChange={handleExperArc}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpArc"
                            onChange={handleProefArc}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {arcHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Atletismo:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefAtl"
                            onChange={handleExperAtl}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpAtl"
                            onChange={handleProefAtl}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {atlHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Enganação:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefEnga"
                            onChange={handleExperEnga}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpEnga"
                            onChange={handleProefEnga}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {engaHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">História:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefHist"
                            onChange={handleExperHist}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpHist"
                            onChange={handleProefHist}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {histHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Perspicácia:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefIntu"
                            onChange={handleExperIntu}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpIntu"
                            onChange={handleProefIntu}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {intuHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Intimidação:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefInti"
                            onChange={handleExperInti}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpInti"
                            onChange={handleProefInti}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {intiHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Investigação:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefInv"
                            onChange={handleExperInv}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpInv"
                            onChange={handleProefInv}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {invHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Medicina:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefMeds"
                            onChange={handleExperMeds}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpMeds"
                            onChange={handleProefMeds}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {medsHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Natureza:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefNat"
                            onChange={handleExperNat}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpNat"
                            onChange={handleProefNat}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {natHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Percepção:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefPerc"
                            onChange={handleExperPerc}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpPerc"
                            onChange={handleProefPerc}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {percHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Performance:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefPerf"
                            onChange={handleExperPerf}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpPerf"
                            onChange={handleProefPerf}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {perfHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Persuasão:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefPers"
                            onChange={handleExperPers}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpPers"
                            onChange={handleProefPers}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {persHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Religião:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefRel"
                            onChange={handleExperRel}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpRel"
                            onChange={handleProefRel}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {relHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Presdigitação:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefPres"
                            onChange={handleExperPres}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpPres"
                            onChange={handleProefPres}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {presdigitacaoHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Furtividade:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefFurt"
                            onChange={handleExperFurt}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpFurt"
                            onChange={handleProefFurt}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {furtHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Sobrevivência:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefSobr"
                            onChange={handleExperSobr}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpSobr"
                            onChange={handleProefSobr}/>
                            <h1 className="inline-block mx-1 w-5 text-right">
                            {sobrHabilidade}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-2">
                    <div className="shadow-md border-2 mx-auto border-lago w-28 bg-white rounded-full top-0 relative my-4 md:my-10 text-center">
                            <h1>Bônus de Proeficiência:</h1>
                            <input type="number" className="outline-none w-12 h-6 text-center hover:bg-slate-200 mx-auto rounded-full" name="proef" placeholder="2"
                            onChange={(e) => setProefNumber(e.target.valueAsNumber)} value={proef}/>
                    </div>
                    <div className="text-center mx-auto my-auto w-56 py-3 md:py-3">
                        <div className="shadow-md border-2 mx-auto border-lago w-48 mb-2 bg-white rounded">
                            <h1 className="text-lg">Armadura equipada:</h1>
                            <select name="armaduraEquip" className="text-xs"
                            onChange={(e) => setArmadura(e.target.value)} value={tipoArmadura}>
                                <option value={'sArmadura'}>Sem armadura</option>
                                <option value={'couro'}>Armadura de couro</option>
                                <option value={'couroBatido'}>Armadura de couro batido</option>
                                <option value={'placas'}>Armadura de placas</option>
                                <option value={'completa'}>Armadura completa</option>
                            </select>
                            <h1 className="inline-block mx-2 text-sm">Escudo</h1>
                            <input type='checkbox' className='cursor-pointer' name="Escudo"
                                onChange={handleEscudo}/>
                        </div>
                        <div className="shadow-md border-2 mx-auto border-lago w-16 bg-white rounded-full">
                            <h1 className="text-xl">CA:</h1>
                            <h1 className="text-lg">{ArmaduraNumber}</h1>
                        </div>
                        <div className="shadow-md mx-auto border-2 border-lago w-32 mt-2 bg-white rounded-md divide-y-2 divide-slate-300 divide-dashed">
                            <h1 className="text-xl w-20 inline-block">PV</h1>
                            <h1 className="text-lg w-20 inline-block">max: 30</h1>
                            <input className="outline-none w-20 text-center hover:bg-slate-200" placeholder="PV atual" name="VidaAtual"/>
                        </div>
                    </div>
                    <div className="mx-auto w-48 my-5 md:my-5">
                        <p className="text-black text-center text-2xl mt-2 md:mt-5">Salvaguarda</p>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Força:</h1>
                            <div className="inline-block float-right my-1">
                                <input type='checkbox' className='cursor-pointer' name="SalvFor"
                                onChange={handlesaveForc}/>
                                <h1 className="inline-block mx-1 w-5 text-right">
                                {forcSave}
                                </h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Destreza:</h1>
                            <div className="inline-block float-right my-1">
                                <input type='checkbox' className='cursor-pointer' name="SalvDex"
                                onChange={handlesaveDex}/>
                                <h1 className="inline-block mx-1 w-5 text-right">
                                {dexSave}
                                </h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Constituição:</h1>
                            <div className="inline-block float-right my-1">
                                <input type='checkbox' className='cursor-pointer' name="SalvCon"
                                onChange={handlesaveCon}/>
                                <h1 className="inline-block mx-1 w-5 text-right">
                                {conSave}
                                </h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Sabedoria:</h1>
                            <div className="inline-block float-right my-1">
                                <input type='checkbox' className='cursor-pointer' name="SalvSab"
                                onChange={handlesaveSab}/>
                                <h1 className="inline-block mx-1 w-5 text-right">
                                {sabSave}
                                </h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Inteligência:</h1>
                            <div className="inline-block float-right my-1">
                                <input type='checkbox' className='cursor-pointer' name="SalvInt"
                                onChange={handlesaveInt}/>
                                <h1 className="inline-block mx-1 w-5 text-right">
                                {intSave}
                                </h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Carisma:</h1>
                            <div className="inline-block float-right my-1">
                                <input type='checkbox' className='cursor-pointer' name="SalvCar"
                                onChange={handlesaveCar}/>
                                <h1 className="inline-block mx-1 w-5 text-right">
                                {carSave}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center md:my-10">
                <div className="shadow-md bg-white border-2 border-lago m-2 border-box inline-block rounded p-2">
                        <h1 className="md:text-lg text-center">Habilidades de Classe:</h1>
                        <textarea className="bg-blue-50 rounded resize-none" rows={8} cols={40} name="habilidadesDeClasse"/>
                </div>
                <div className="shadow-md bg-white border-2 border-lago m-2 border-box inline-block rounded p-2 md:my-10">
                        <h1 className="md:text-lg text-center">Outras Habilidades:</h1>
                        <textarea className="bg-blue-50 rounded resize-none" rows={8} cols={40} name="outrasHabilidades"/>
                </div>
            </div>
            <footer className="invisible h-40">Vinícius Liberato Cidral Dallabona</footer>
        </div>
    )
}