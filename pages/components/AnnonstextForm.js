import React, { useState } from 'react';

export default function AnnonstextForm({ onSubmit }) {
  const [regnr, setRegnr] = useState('');
  const [miltal, setMiltal] = useState('');
  const [pris, setPris] = useState('');
  const [telefon, setTelefon] = useState('');
  const [kommentar, setKommentar] = useState('');

  const [skick, setSkick] = useState('Toppskick');
  const [besiktigad, setBesiktigad] = useState(null);
  const [servicebok, setServicebok] = useState(null);
  const [fullstamplad, setFullstamplad] = useState(null);
  const [skador, setSkador] = useState(false);
  const [dack, setDack] = useState('Vinterdäck');
  const [motorOk, setMotorOk] = useState(null);
  const [motorText, setMotorText] = useState('');
  const [vaxelladaOk, setVaxelladaOk] = useState(null);
  const [vaxelladaText, setVaxelladaText] = useState('');
  const [rost, setRost] = useState(false);
  const [rostText, setRostText] = useState('');
  const [skadorYttre, setSkadorYttre] = useState(false);
  const [skadorYttreText, setSkadorYttreText] = useState('');
  const [varforSalg, setVarforSalg] = useState('Skaffat ny bil');
  const [biltyp, setBiltyp] = useState('Familjebil');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      regnr,
      miltal,
      pris,
      telefon,
      kommentar,
      skick,
      besiktigad,
      servicebok,
      fullstamplad,
      skador,
      dack,
      motorOk,
      motorText,
      vaxelladaOk,
      vaxelladaText,
      rost,
      rostText,
      skadorYttre,
      skadorYttreText,
      varforSalg,
      biltyp,
    };

    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log('Form data:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Registreringsnummer*  
        <input type="text" value={regnr} onChange={e => setRegnr(e.target.value.toUpperCase())} required />
      </label>

      <label>
        Miltal*  
        <input type="number" value={miltal} onChange={e => setMiltal(e.target.value)} required />
      </label>

      <label>
        Pris  
        <input type="text" value={pris} onChange={e => setPris(e.target.value)} />
      </label>

      <label>
        Telefon*  
        <input type="tel" value={telefon} onChange={e => setTelefon(e.target.value)} required />
      </label>

      <label>
        Kommentar  
        <textarea value={kommentar} onChange={e => setKommentar(e.target.value)} />
      </label>

      <label>
        Hur är allmänt skick?  
        <select value={skick} onChange={e => setSkick(e.target.value)}>
          <option>Toppskick</option>
          <option>Bra skick</option>
          <option>Bruksskick</option>
          <option>Projektbil</option>
        </select>
      </label>

      <fieldset>
        <legend>Är bilen besiktigad?</legend>
        <label><input type="radio" name="besiktigad" value="Ja" checked={besiktigad === 'Ja'} onChange={e => setBesiktigad(e.target.value)} required /> Ja</label>
        <label><input type="radio" name="besiktigad" value="Nej" checked={besiktigad === 'Nej'} onChange={e => setBesiktigad(e.target.value)} /> Nej</label>
      </fieldset>

      <fieldset>
        <legend>Finns servicebok?</legend>
        <label><input type="radio" name="servicebok" value="Ja" checked={servicebok === 'Ja'} onChange={e => setServicebok(e.target.value)} required /> Ja</label>
        <label><input type="radio" name="servicebok" value="Nej" checked={servicebok === 'Nej'} onChange={e => setServicebok(e.target.value)} /> Nej</label>
      </fieldset>

      {servicebok === 'Ja' && (
        <fieldset>
          <legend>Är serviceboken fullstämplad?</legend>
          <label><input type="radio" name="fullstamplad" value="Ja" checked={fullstamplad === 'Ja'} onChange={e => setFullstamplad(e.target.value)} required /> Ja</label>
          <label><input type="radio" name="fullstamplad" value="Nej" checked={fullstamplad === 'Nej'} onChange={e => setFullstamplad(e.target.value)} /> Nej</label>
        </fieldset>
      )}

      <label>
        Finns det några kända skador?  
        <input type="checkbox" checked={skador} onChange={e => setSkador(e.target.checked)} />
      </label>

      <label>
        Finns vinterdäck eller sommarhjul?  
        <select value={dack} onChange={e => setDack(e.target.value)}>
          <option>Vinterdäck</option>
          <option>Sommarhjul</option>
        </select>
      </label>

      <fieldset>
        <legend>Funkar motor felfritt?</legend>
        <label><input type="radio" name="motorOk" value="Ja" checked={motorOk === 'Ja'} onChange={e => setMotorOk(e.target.value)} required /> Ja</label>
        <label><input type="radio" name="motorOk" value="Nej" checked={motorOk === 'Nej'} onChange={e => setMotorOk(e.target.value)} /> Nej</label>
      </fieldset>

      {motorOk === 'Nej' && (
        <label>
          Förklaring motor  
          <input type="text" value={motorText} onChange={e => setMotorText(e.target.value)} />
        </label>
      )}

      <fieldset>
        <legend>Funkar växellåda felfritt?</legend>
        <label><input type="radio" name="vaxelladaOk" value="Ja" checked={vaxelladaOk === 'Ja'} onChange={e => setVaxelladaOk(e.target.value)} required /> Ja</label>
        <label><input type="radio" name="vaxelladaOk" value="Nej" checked={vaxelladaOk === 'Nej'} onChange={e => setVaxelladaOk(e.target.value)} /> Nej</label>
      </fieldset>

      {vaxelladaOk === 'Nej' && (
        <label>
          Förklaring växellåda  
          <input type="text" value={vaxelladaText} onChange={e => setVaxelladaText(e.target.value)} />
        </label>
      )}

      <label>
        Finns det rost eller rostskador på bilen?  
        <input type="checkbox" checked={rost} onChange={e => setRost(e.target.checked)} />
      </label>

      {rost && (
        <label>
          Var finns rost?  
          <input type="text" value={rostText} onChange={e => setRostText(e.target.value)} />
        </label>
      )}

      <label>
        Finns repor, bucklor eller andra kosmetiska skador?  
        <input type="checkbox" checked={skadorYttre} onChange={e => setSkadorYttre(e.target.checked)} />
      </label>

      {skadorYttre && (
        <label>
          Var finns skador?  
          <input type="text" value={skadorYttreText} onChange={e => setSkadorYttreText(e.target.value)} />
        </label>
      )}

      <label>
        Varför säljs bilen?  
        <select value={varforSalg} onChange={e => setVarforSalg(e.target.value)}>
          <option>Skaffat ny bil</option>
          <option>Behöver större</option>
          <option>Behöver en mindre bil</option>
        </select>
      </label>

      <label>
        Vilket typ av bil är det?  
        <select value={biltyp} onChange={e => setBiltyp(e.target.value)}>
          <option>Familjebil</option>
          <option>Sportbil</option>
          <option>Pickup</option>
          <option>Arbetsbil</option>
        </select>
      </label>

      <button type="submit">Skapa annonstext</button>
    </form>
  );
}
